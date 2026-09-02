param(
  [string]$BaseUrl = "http://localhost:3222",
  [string]$ArtifactsDir = ".artifacts/final-full-site-qa",
  [int]$ScreenshotTimeoutSeconds = 25
)

$ErrorActionPreference = "Stop"

function Assert-Ok([bool]$Condition, [string]$Message) {
  if (-not $Condition) { throw $Message }
}

function Test-Page([string]$Path, [int]$ExpectedStatus = 200) {
  $url = "$BaseUrl$Path"
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
    Assert-Ok ([bool]($response.StatusCode -eq $ExpectedStatus)) "Expected HTTP $ExpectedStatus for $Path, got $($response.StatusCode)."
    Assert-Ok ([bool]($response.Content -notmatch 'Internal Server Error')) "Internal Server Error rendered for $Path."
    Write-Host "PASS $Path [$($response.StatusCode)]" -ForegroundColor Green
    return $response
  }
  catch {
    throw "FAIL $Path :: $($_.Exception.Message)"
  }
}

function Stop-ProcessTree([int]$ProcessId) {
  try {
    & taskkill.exe /PID $ProcessId /T /F *> $null
  }
  catch {
    Stop-Process -Id $ProcessId -Force -ErrorAction SilentlyContinue
  }
}

function Invoke-BrowserShot(
  [string]$Chrome,
  [string]$Url,
  [string]$Shot,
  [string]$ViewportName,
  [string]$ViewportSize,
  [int]$TimeoutSeconds = 25,
  [int]$MaxAttempts = 2
) {
  for ($attempt = 1; $attempt -le $MaxAttempts; $attempt++) {
    $profile = Join-Path $env:TEMP ("amirmotefaker-final-qa-" + [Guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Force -Path $profile | Out-Null
    Remove-Item -LiteralPath $Shot -Force -ErrorAction SilentlyContinue

    Write-Host "CAPTURE $Url [$ViewportName] attempt $attempt/$MaxAttempts (timeout ${TimeoutSeconds}s)" -ForegroundColor DarkCyan

    $args = @(
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-sync",
      "--metrics-recording-only",
      "--virtual-time-budget=2500",
      "--user-data-dir=$profile",
      "--window-size=$ViewportSize",
      "--screenshot=$Shot",
      $Url
    )

    $proc = $null
    try {
      $proc = Start-Process -FilePath $Chrome -ArgumentList $args -PassThru -WindowStyle Hidden

      try {
        Wait-Process -Id $proc.Id -Timeout $TimeoutSeconds -ErrorAction Stop
      }
      catch {
        Write-Host "TIMEOUT $Url [$ViewportName] on attempt $attempt; terminating browser tree..." -ForegroundColor Yellow
        Stop-ProcessTree -ProcessId $proc.Id
      }

      $deadline = (Get-Date).AddSeconds(3)
      while ((Get-Date) -lt $deadline -and -not (Test-Path -LiteralPath $Shot)) {
        Start-Sleep -Milliseconds 200
      }

      if (Test-Path -LiteralPath $Shot) {
        $size = (Get-Item -LiteralPath $Shot).Length
        if ($size -gt 0) {
          Write-Host "PASS screenshot $Url $ViewportName ($size bytes)" -ForegroundColor Green
          return
        }
      }

      if ($attempt -lt $MaxAttempts) {
        Write-Host "RETRY screenshot $Url [$ViewportName]" -ForegroundColor Yellow
        Start-Sleep -Seconds 1
      }
    }
    finally {
      if ($proc -and -not $proc.HasExited) {
        Stop-ProcessTree -ProcessId $proc.Id
      }
      Remove-Item -LiteralPath $profile -Recurse -Force -ErrorAction SilentlyContinue
    }
  }

  throw "Browser screenshot failed after $MaxAttempts attempts: $Url ($ViewportName)"
}

Write-Host "`n=== AMIRMOTEFAKER.IR FINAL FULL-SITE LOCAL QA ===" -ForegroundColor Cyan
Write-Host "Base URL: $BaseUrl"

$repo = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$artifacts = Join-Path $repo $ArtifactsDir
New-Item -ItemType Directory -Force -Path $artifacts | Out-Null

Write-Host "`n[1/6] Health check"
Test-Page "/api/health" | Out-Null

Write-Host "`n[2/6] Core localized routes"
$coreRoutes = @(
  "about",
  "contact",
  "news",
  "notes",
  "pages",
  "products",
  "resume",
  "thesis",
  "sign-in",
  "sign-up"
)

foreach ($locale in @("fa", "en")) {
  Test-Page "/$locale" | Out-Null
  foreach ($route in $coreRoutes) {
    Test-Page "/$locale/$route" | Out-Null
  }
}

Write-Host "`n[3/6] All 11 products in FA + EN"
$productSlugs = @(
  "restyar",
  "primesys",
  "linkresan",
  "farsio",
  "fahmio",
  "zobdino",
  "idehjo",
  "tasvin",
  "vayran",
  "darmic",
  "filmtrack"
)

foreach ($locale in @("fa", "en")) {
  foreach ($slug in $productSlugs) {
    Test-Page "/$locale/products/$slug" | Out-Null
  }
}

Write-Host "`n[4/6] Public machine endpoints"
foreach ($path in @(
  "/robots.txt",
  "/sitemap.xml",
  "/feed.xml",
  "/manifest.webmanifest"
)) {
  Test-Page $path | Out-Null
}

Write-Host "`n[5/6] Clerk browser redirects + desktop/mobile auth evidence"
$clerkArtifacts = Join-Path $artifacts "clerk"
node (Join-Path $PSScriptRoot "clerk-local-browser-cdp.mjs") $BaseUrl $clerkArtifacts
Assert-Ok ([bool]($LASTEXITCODE -eq 0)) "Clerk browser QA failed."

Write-Host "`n[6/6] Desktop/mobile screenshots for critical public routes"
$chromeCandidates = @(
  $env:CHROME_PATH,
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  (Join-Path $env:LOCALAPPDATA "Google\Chrome\Application\chrome.exe"),
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { $_ -and (Test-Path $_) }

Assert-Ok ([bool]($chromeCandidates.Count -gt 0)) "No supported Chrome/Edge executable found."
$chrome = $chromeCandidates[0]
Write-Host "Browser: $chrome"
Write-Host "Per-capture timeout: ${ScreenshotTimeoutSeconds}s; max attempts: 2"

$evidenceRoutes = @(
  @{ Name = "fa-home"; Path = "/fa" },
  @{ Name = "en-home"; Path = "/en" },
  @{ Name = "fa-products"; Path = "/fa/products" },
  @{ Name = "en-products"; Path = "/en/products" },
  @{ Name = "fa-about"; Path = "/fa/about" },
  @{ Name = "en-about"; Path = "/en/about" },
  @{ Name = "fa-contact"; Path = "/fa/contact" },
  @{ Name = "en-contact"; Path = "/en/contact" }
)

$publicShots = Join-Path $artifacts "public"
New-Item -ItemType Directory -Force -Path $publicShots | Out-Null

$totalShots = $evidenceRoutes.Count * 2
$shotIndex = 0

foreach ($route in $evidenceRoutes) {
  foreach ($viewport in @(
    @{ Name = "desktop"; Size = "1440,1000" },
    @{ Name = "mobile"; Size = "390,844" }
  )) {
    $shotIndex++
    $shot = Join-Path $publicShots "$($route.Name)-$($viewport.Name).png"
    $url = "$BaseUrl$($route.Path)"

    Write-Host "PROGRESS screenshot $shotIndex/$totalShots :: $($route.Name) $($viewport.Name)" -ForegroundColor Cyan
    Invoke-BrowserShot `
      -Chrome $chrome `
      -Url $url `
      -Shot $shot `
      -ViewportName $viewport.Name `
      -ViewportSize $viewport.Size `
      -TimeoutSeconds $ScreenshotTimeoutSeconds `
      -MaxAttempts 2
  }
}

Write-Host "`n=== FINAL FULL-SITE QA PASS ===" -ForegroundColor Green
Write-Host "Core localized pages : PASS"
Write-Host "22 product routes    : PASS"
Write-Host "Public endpoints     : PASS"
Write-Host "Clerk browser QA     : PASS"
Write-Host "Desktop/mobile shots : PASS"
Write-Host "Evidence             : $artifacts"
