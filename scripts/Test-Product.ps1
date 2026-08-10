[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$RepositoryRoot = (
    Split-Path -Parent `
    (Split-Path -Parent $PSCommandPath)
)

$RequiredFiles = @(
"README.md",
".gitignore",
".editorconfig",
"SECURITY.md",
"docs/architecture/README.md",
"docs/architecture/ADR-001-modern-nextjs-ai-platform.md",
"docs/01-approved-positioning-v1.md",
"docs/02-design-system-v1.md",
"docs/03-information-architecture-v1.md",
"docs/09-design-tokens-v1.json",
"apps/web",
"content/fa",
"content/en",
"design-system",
"automation/tech-news",
".github/workflows/foundation-gate.yml"
)

foreach ($RelativePath in $RequiredFiles) {

    $AbsolutePath = Join-Path $RepositoryRoot $RelativePath

    if (-not (Test-Path -LiteralPath $AbsolutePath)) {
        throw "Required Foundation item was not found: $RelativePath"
    }
}

$ForbiddenFileNames = @(
".env",
"wp-config.php",
"database.sql",
"dump.sql",
"id_rsa",
"id_ed25519"
)

$RepositoryFiles = Get-ChildItem `
-LiteralPath $RepositoryRoot `
-Recurse `
-File `
-Force |
Where-Object {
    $_.FullName -notmatch '[\\/].git[\\/]'
}

foreach ($RepositoryFile in $RepositoryFiles) {

    if ($RepositoryFile.Name -in $ForbiddenFileNames) {
        throw "Forbidden file was committed: $($RepositoryFile.FullName)"
    }

    if ($RepositoryFile.Extension -in @(".pem",".key",".p12",".pfx",".sql",".sqlite",".sqlite3")) {
        throw "Forbidden sensitive artifact was committed: $($RepositoryFile.FullName)"
    }
}

$GitStatus = (
    git -C $RepositoryRoot status --porcelain=v1 --untracked-files=all
) -join "`n"

if (-not [string]::IsNullOrWhiteSpace($GitStatus)) {
    throw "Repository working tree is not clean during Product Test."
}

Write-Host "Modern Foundation files: PASS"
Write-Host "Sensitive-file gate: PASS"
Write-Host "Working tree: CLEAN"
Write-Host "AMIRMOTEFAKER-MODERN-PRODUCT-TEST-PASS"
