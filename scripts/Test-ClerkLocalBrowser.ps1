param(
  [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path,
  [int]$Port = 3210
)

$ErrorActionPreference = "Stop"
$web = Join-Path $RepoRoot "apps/web"
$envFile = Join-Path $web ".env.local"
$artifacts = Join-Path $RepoRoot ".artifacts/clerk-local-qa"
$browserQa = Join-Path $RepoRoot "scripts/clerk-local-browser-cdp.mjs"
$server = $null
$ownsServer = $false
$stdoutLog = Join-Path $artifacts "next-start.stdout.log"
$stderrLog = Join-Path $artifacts "next-start.stderr.log"
$hostName = "localhost"

function Assert-Ok([bool]$Condition, [string]$Message) {
  if (-not $Condition) { throw $Message }
}

function Get-ListeningPid([int]$CandidatePort) {
  try {
    $conn = Get-NetTCPConnection -LocalPort $CandidatePort -State Listen -ErrorAction Stop | Select-Object -First 1
    if ($conn) { return [int]$conn.OwningProcess }
  } catch { }
  return $null
}

function Get-FreePort([int]$PreferredPort) {
  if (-not (Get-ListeningPid $PreferredPort)) { return $PreferredPort }

  foreach ($candidate in ($PreferredPort + 1)..($PreferredPort + 50)) {
    if (-not (Get-ListeningPid $candidate)) { return $candidate }
  }

  throw "No free local port found in range $PreferredPort-$($PreferredPort + 50)."
}

function Show-ServerDiagnostics {
  Write-Host "`n--- NEXT START STDOUT ---"
  if (Test-Path $stdoutLog) { Get-Content $stdoutLog -Tail 160 }
  Write-Host "`n--- NEXT START STDERR ---"
  if (Test-Path $stderrLog) { Get-Content $stderrLog -Tail 160 }
}

function Wait-ForServer([string]$Url, [int]$TimeoutSeconds = 120) {
  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  while ((Get-Date) -lt $deadline) {
    if ($server -and $server.HasExited) {
      Show-ServerDiagnostics
      throw "Next.js production server exited early with code $($server.ExitCode)."
    }

    try {
      $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
      if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500) { return }
    } catch {
      $response = $_.Exception.Response
      if ($response -and [int]$response.StatusCode -ge 500) {
        Show-ServerDiagnostics
        throw "Runtime HTTP $([int]$response.StatusCode) detected while probing $Url."
      }
      Start-Sleep -Seconds 2
    }
  }

  Show-ServerDiagnostics
  throw "Next.js production server did not become ready within $TimeoutSeconds seconds."
}

function Assert-Page([string]$BaseUrl, [string]$Path) {
  try {
    $response = Invoke-WebRequest -Uri "$BaseUrl$Path" -UseBasicParsing -TimeoutSec 20
  } catch {
    $response = $_.Exception.Response
    if ($response) {
      Show-ServerDiagnostics
      throw "Expected HTTP 200 for $Path, got $([int]$response.StatusCode)."
    }
    throw
  }

  if ($response.StatusCode -ne 200 -or $response.Content -match "Internal Server Error") {
    Show-ServerDiagnostics
    throw "Auth route failed for $Path. HTTP $($response.StatusCode)."
  }

  Write-Host "PASS $Path"
}

try {
  Write-Host "`n=== CLERK LOCAL BROWSER QA ==="
  Assert-Ok (Test-Path $envFile) "Missing apps/web/.env.local. Run Clerk development env pull first."
  Assert-Ok (Test-Path $browserQa) "Missing browser QA helper: $browserQa"

  New-Item -ItemType Directory -Force -Path $artifacts | Out-Null
  Remove-Item $stdoutLog,$stderrLog -Force -ErrorAction SilentlyContinue

  Write-Host "`n[1/6] Install dependencies"
  Push-Location $web
  npm install
  Assert-Ok ($LASTEXITCODE -eq 0) "npm install failed."

  Write-Host "`n[2/6] Run static readiness gate"
  npm run test:clerk-readiness
  Assert-Ok ($LASTEXITCODE -eq 0) "Clerk readiness gate failed."

  Write-Host "`n[3/6] Build production bundle"
  npm run build
  Assert-Ok ($LASTEXITCODE -eq 0) "Next.js production build failed."

  Write-Host "`n[4/6] Start isolated Next.js production server"
  $Port = Get-FreePort $Port
  $baseUrl = "http://$hostName`:$Port"
  Write-Host "QA base URL: $baseUrl"

  $server = Start-Process -FilePath "npm.cmd" -ArgumentList @("run","start","--","--hostname",$hostName,"--port",$Port) -WorkingDirectory $web -PassThru -WindowStyle Hidden -RedirectStandardOutput $stdoutLog -RedirectStandardError $stderrLog
  $ownsServer = $true
  Wait-ForServer "$baseUrl/fa/sign-in"

  Write-Host "`n[5/6] Verify localized auth routes"
  foreach ($path in @("/fa/sign-in","/fa/sign-up","/en/sign-in","/en/sign-up")) {
    Assert-Page $baseUrl $path
  }

  Write-Host "`n[6/6] Verify browser redirects and capture desktop/mobile evidence"
  node $browserQa $baseUrl $artifacts
  Assert-Ok ($LASTEXITCODE -eq 0) "System Chrome browser QA failed."

  Write-Host "`n✓ Production build PASS"
  Write-Host "✓ Four localized Clerk routes return HTTP 200"
  Write-Host "✓ Legacy FA/EN login redirects preserve locale in system Chrome"
  Write-Host "✓ Desktop and mobile browser evidence captured"
  Write-Host "Evidence: $artifacts"
  Write-Host "`n=== CLERK LOCAL BROWSER QA PASS ==="
}
finally {
  if ($ownsServer -and $server -and -not $server.HasExited) {
    Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
  }
  Pop-Location -ErrorAction SilentlyContinue
}
