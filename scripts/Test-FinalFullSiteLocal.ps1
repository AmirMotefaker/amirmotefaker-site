param(
  [string]$BaseUrl = "http://localhost:3222",
  [string]$ArtifactsDir = ".artifacts/final-full-site-qa"
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

foreach ($route in $evidenceRoutes) {
  foreach ($viewport in @(
    @{ Name = "desktop"; Size = "1440,1000" },
    @{ Name = "mobile"; Size = "390,844" }
  )) {
    $shot = Join-Path $publicShots "$($route.Name)-$($viewport.Name).png"
    $url = "$BaseUrl$($route.Path)"

    & $chrome `
      --headless=new `
      --disable-gpu `
      --hide-scrollbars `
      --no-first-run `
      --no-default-browser-check `
      --virtual-time-budget=2500 `
      "--window-size=$($viewport.Size)" `
      "--screenshot=$shot" `
      $url | Out-Null

    Assert-Ok ([bool]($LASTEXITCODE -eq 0)) "Browser screenshot failed: $url ($($viewport.Name))"
    Assert-Ok ([bool](Test-Path $shot)) "Screenshot missing: $shot"
    Write-Host "PASS screenshot $($route.Name) $($viewport.Name)" -ForegroundColor Green
  }
}

Write-Host "`n=== FINAL FULL-SITE QA PASS ===" -ForegroundColor Green
Write-Host "Core localized pages : PASS"
Write-Host "22 product routes    : PASS"
Write-Host "Public endpoints     : PASS"
Write-Host "Clerk browser QA     : PASS"
Write-Host "Desktop/mobile shots : PASS"
Write-Host "Evidence             : $artifacts"
