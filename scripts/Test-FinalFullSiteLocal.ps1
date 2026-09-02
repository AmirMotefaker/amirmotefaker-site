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

Write-Host "`n=== AMIRMOTEFAKER.IR FINAL FULL-SITE LOCAL QA ===" -ForegroundColor Cyan
Write-Host "Base URL: $BaseUrl"

$repo = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$artifacts = Join-Path $repo $ArtifactsDir
New-Item -ItemType Directory -Force -Path $artifacts | Out-Null

Write-Host "`n[1/6] Health check"
Test-Page "/api/health" | Out-Null

Write-Host "`n[2/6] Core localized routes"
$coreRoutes = @("about","contact","news","notes","pages","products","resume","thesis","sign-in","sign-up")
foreach ($locale in @("fa", "en")) {
  Test-Page "/$locale" | Out-Null
  foreach ($route in $coreRoutes) { Test-Page "/$locale/$route" | Out-Null }
}

Write-Host "`n[3/6] All 11 products in FA + EN"
$productSlugs = @("restyar","primesys","linkresan","farsio","fahmio","zobdino","idehjo","tasvin","vayran","darmic","filmtrack")
foreach ($locale in @("fa", "en")) {
  foreach ($slug in $productSlugs) { Test-Page "/$locale/products/$slug" | Out-Null }
}

Write-Host "`n[4/6] Public machine endpoints"
foreach ($path in @("/robots.txt","/sitemap.xml","/feed.xml","/manifest.webmanifest")) {
  Test-Page $path | Out-Null
}

Write-Host "`n[5/6] Clerk browser redirects + desktop/mobile auth evidence"
$clerkArtifacts = Join-Path $artifacts "clerk"
node (Join-Path $PSScriptRoot "clerk-local-browser-cdp.mjs") $BaseUrl $clerkArtifacts
Assert-Ok ([bool]($LASTEXITCODE -eq 0)) "Clerk browser QA failed."

Write-Host "`n[6/6] Desktop/mobile public evidence via Chrome DevTools Protocol"
$publicShots = Join-Path $artifacts "public"
node (Join-Path $PSScriptRoot "final-public-browser-cdp.mjs") $BaseUrl $publicShots
Assert-Ok ([bool]($LASTEXITCODE -eq 0)) "Public browser CDP QA failed."

Write-Host "`n=== FINAL FULL-SITE QA PASS ===" -ForegroundColor Green
Write-Host "Core localized pages : PASS"
Write-Host "22 product routes    : PASS"
Write-Host "Public endpoints     : PASS"
Write-Host "Clerk browser QA     : PASS"
Write-Host "Desktop/mobile shots : PASS (CDP)"
Write-Host "Evidence             : $artifacts"
