param(
  [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path,
  [int]$Port = 3210
)

$ErrorActionPreference = "Stop"
$web = Join-Path $RepoRoot "apps/web"
$envFile = Join-Path $web ".env.local"
$artifacts = Join-Path $RepoRoot ".artifacts/clerk-local-qa"
$server = $null
$stdoutLog = Join-Path $artifacts "next-dev.stdout.log"
$stderrLog = Join-Path $artifacts "next-dev.stderr.log"

function Assert-Ok([bool]$Condition, [string]$Message) {
  if (-not $Condition) { throw $Message }
}

function Test-PortAvailable([int]$CandidatePort) {
  $listener = $null
  try {
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $CandidatePort)
    $listener.Start()
    return $true
  } catch {
    return $false
  } finally {
    if ($listener) { $listener.Stop() }
  }
}

function Get-FreePort([int]$PreferredPort) {
  if (Test-PortAvailable $PreferredPort) { return $PreferredPort }

  Write-Host "Port $PreferredPort is already in use. Searching for a free QA port..."
  foreach ($candidate in ($PreferredPort + 1)..($PreferredPort + 50)) {
    if (Test-PortAvailable $candidate) {
      Write-Host "Using free port $candidate instead."
      return $candidate
    }
  }

  throw "No free local port found in range $PreferredPort-$($PreferredPort + 50)."
}

function Show-ServerDiagnostics {
  Write-Host "`n--- NEXT DEV STDOUT ---"
  if (Test-Path $stdoutLog) { Get-Content $stdoutLog -Tail 120 }
  Write-Host "`n--- NEXT DEV STDERR ---"
  if (Test-Path $stderrLog) { Get-Content $stderrLog -Tail 120 }
}

function Wait-ForServer([string]$Url, [int]$TimeoutSeconds = 120) {
  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  while ((Get-Date) -lt $deadline) {
    if ($server -and $server.HasExited) {
      Show-ServerDiagnostics
      throw "Next.js dev server exited early with code $($server.ExitCode)."
    }

    try {
      $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
      if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500) { return }
    } catch {
      Start-Sleep -Seconds 2
    }
  }

  Show-ServerDiagnostics
  throw "Next.js server did not become ready within $TimeoutSeconds seconds."
}

function Assert-Page([string]$BaseUrl, [string]$Path) {
  $response = Invoke-WebRequest -Uri "$BaseUrl$Path" -UseBasicParsing -TimeoutSec 20
  Assert-Ok ($response.StatusCode -eq 200) "Expected HTTP 200 for $Path, got $($response.StatusCode)."
  Assert-Ok ($response.Content -notmatch "Internal Server Error") "Server error content detected on $Path."
  Write-Host "PASS $Path"
}

function Assert-Redirect([string]$BaseUrl, [string]$Path, [string]$ExpectedLocation) {
  try {
    Invoke-WebRequest -Uri "$BaseUrl$Path" -UseBasicParsing -MaximumRedirection 0 -TimeoutSec 20 | Out-Null
    throw "Expected redirect for $Path but request returned without redirect."
  } catch {
    $response = $_.Exception.Response
    if (-not $response) { throw }
    $status = [int]$response.StatusCode
    $location = $response.Headers.Location
    Assert-Ok ($status -in 301,302,303,307,308) "Expected redirect status for $Path, got $status."
    Assert-Ok ($location -eq $ExpectedLocation) "Expected $Path -> $ExpectedLocation, got $location."
    Write-Host "PASS $Path -> $ExpectedLocation"
  }
}

try {
  Write-Host "`n=== CLERK LOCAL BROWSER QA ==="
  Assert-Ok (Test-Path $envFile) "Missing apps/web/.env.local. Run Clerk development env pull first."

  New-Item -ItemType Directory -Force -Path $artifacts | Out-Null
  Remove-Item $stdoutLog,$stderrLog -Force -ErrorAction SilentlyContinue

  $Port = Get-FreePort $Port
  $baseUrl = "http://127.0.0.1:$Port"
  Write-Host "QA base URL: $baseUrl"

  Write-Host "`n[1/5] Install dependencies"
  Push-Location $web
  npm install
  Assert-Ok ($LASTEXITCODE -eq 0) "npm install failed."

  Write-Host "`n[2/5] Run static readiness gate"
  npm run test:clerk-readiness
  Assert-Ok ($LASTEXITCODE -eq 0) "Clerk readiness gate failed."

  Write-Host "`n[3/5] Start isolated local Next.js server"
  $server = Start-Process -FilePath "npm.cmd" -ArgumentList @("run","dev","--","--hostname","127.0.0.1","--port",$Port) -WorkingDirectory $web -PassThru -WindowStyle Hidden -RedirectStandardOutput $stdoutLog -RedirectStandardError $stderrLog
  Wait-ForServer "$baseUrl/fa/sign-in"

  Write-Host "`n[4/5] Verify localized auth routes and legacy redirects"
  foreach ($path in @("/fa/sign-in","/fa/sign-up","/en/sign-in","/en/sign-up")) {
    Assert-Page $baseUrl $path
  }
  Assert-Redirect $baseUrl "/fa/login" "/fa/sign-in"
  Assert-Redirect $baseUrl "/en/login" "/en/sign-in"

  Write-Host "`n[5/5] Capture desktop/mobile browser evidence"
  npx -y playwright@latest install chromium
  Assert-Ok ($LASTEXITCODE -eq 0) "Playwright Chromium install failed."

  $targets = @(
    @{ Path="/fa/sign-in"; Name="fa-sign-in" },
    @{ Path="/fa/sign-up"; Name="fa-sign-up" },
    @{ Path="/en/sign-in"; Name="en-sign-in" },
    @{ Path="/en/sign-up"; Name="en-sign-up" }
  )

  foreach ($target in $targets) {
    npx -y playwright@latest screenshot --wait-for-timeout=1500 --viewport-size="1440,1000" "$baseUrl$($target.Path)" (Join-Path $artifacts "$($target.Name)-desktop.png")
    Assert-Ok ($LASTEXITCODE -eq 0) "Desktop screenshot failed for $($target.Path)."

    npx -y playwright@latest screenshot --wait-for-timeout=1500 --device="iPhone 13" "$baseUrl$($target.Path)" (Join-Path $artifacts "$($target.Name)-mobile.png")
    Assert-Ok ($LASTEXITCODE -eq 0) "Mobile screenshot failed for $($target.Path)."
  }

  Write-Host "`n✓ Four localized Clerk routes return HTTP 200"
  Write-Host "✓ Legacy FA/EN login redirects preserve locale"
  Write-Host "✓ Desktop and mobile browser evidence captured"
  Write-Host "Evidence: $artifacts"
  Write-Host "`n=== CLERK LOCAL BROWSER QA PASS ==="
}
finally {
  if ($server -and -not $server.HasExited) {
    Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
  }
  Pop-Location -ErrorAction SilentlyContinue
}
