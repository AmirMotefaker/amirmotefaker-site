[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$RepositoryRoot = (
    Split-Path `
        -Parent `
        (Split-Path -Parent $PSCommandPath)
)

$RequiredFiles = @(
    "README.md",
    ".gitignore",
    ".editorconfig",
    "SECURITY.md",
    "docs/governance/foundation-execution-authorization.md",
    "docs/architecture/ADR-001-wordpress-native-architecture.md",
    "docs/operations/staging-preview-and-rollback-plan-v1.md",
    "docs/design/02-design-system-v1.md",
    "docs/design/03-information-architecture-v1.md",
    "docs/design/09-design-tokens-v1.json",
    "prototype/index.html",
    "prototype/styles.css",
    "prototype/site.js",
    "src/wp-content/themes/amirmotefaker-v1/style.css",
    "src/wp-content/themes/amirmotefaker-v1/theme.json",
    "src/wp-content/themes/amirmotefaker-v1/functions.php",
    "src/wp-content/themes/amirmotefaker-v1/templates/index.html",
    "src/wp-content/themes/amirmotefaker-v1/parts/header.html",
    "src/wp-content/themes/amirmotefaker-v1/parts/footer.html",
    "src/wp-content/plugins/amirmotefaker-core/amirmotefaker-core.php",
    ".github/workflows/foundation-gate.yml"
)

foreach ($RelativePath in $RequiredFiles) {
    $AbsolutePath = Join-Path $RepositoryRoot $RelativePath

    if (-not (Test-Path -LiteralPath $AbsolutePath -PathType Leaf)) {
        throw "Required Foundation file was not found: $RelativePath"
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

$RepositoryFiles = @(
    Get-ChildItem `
        -LiteralPath $RepositoryRoot `
        -Recurse `
        -File `
        -Force |
        Where-Object {
            $_.FullName -notmatch '[\\/]\.git[\\/]'
        }
)

foreach ($RepositoryFile in $RepositoryFiles) {
    if ($RepositoryFile.Name -in $ForbiddenFileNames) {
        throw "Forbidden file was committed: $($RepositoryFile.FullName)"
    }

    if (
        $RepositoryFile.Extension -in @(
            ".pem",
            ".key",
            ".p12",
            ".pfx",
            ".sql",
            ".sqlite",
            ".sqlite3"
        )
    ) {
        throw "Forbidden sensitive artifact was committed: $($RepositoryFile.FullName)"
    }
}

$PrototypeHtml = Get-Content `
    -LiteralPath (Join-Path $RepositoryRoot "prototype\index.html") `
    -Raw `
    -Encoding UTF8

$PrototypeCss = Get-Content `
    -LiteralPath (Join-Path $RepositoryRoot "prototype\styles.css") `
    -Raw `
    -Encoding UTF8

$PrototypeJs = Get-Content `
    -LiteralPath (Join-Path $RepositoryRoot "prototype\site.js") `
    -Raw `
    -Encoding UTF8

if ($PrototypeHtml -notmatch '<html\s+lang="fa"\s+dir="rtl"') {
    throw "Prototype Persian RTL marker is missing."
}

if ($PrototypeCss -notmatch 'prefers-reduced-motion') {
    throw "Prototype reduced-motion behavior is missing."
}

if ($PrototypeJs -match '(?i)\b(fetch|XMLHttpRequest|WebSocket)\s*\(') {
    throw "Prototype contains an unexpected network-call primitive."
}

$ThemeStyle = Get-Content `
    -LiteralPath (
        Join-Path `
            $RepositoryRoot `
            "src\wp-content\themes\amirmotefaker-v1\style.css"
    ) `
    -Raw `
    -Encoding UTF8

foreach ($Marker in @(
    "Theme Name: AmirMotefaker V1",
    "Version: 0.1.0",
    "Text Domain: amirmotefaker-v1"
)) {
    if (-not $ThemeStyle.Contains($Marker)) {
        throw "WordPress Theme header marker is missing: $Marker"
    }
}

$ThemeJsonPath = Join-Path `
    $RepositoryRoot `
    "src\wp-content\themes\amirmotefaker-v1\theme.json"

$ThemeJson = Get-Content `
    -LiteralPath $ThemeJsonPath `
    -Raw `
    -Encoding UTF8 |
    ConvertFrom-Json

if ([int]$ThemeJson.version -ne 3) {
    throw "Unexpected WordPress theme.json version."
}

$PluginSource = Get-Content `
    -LiteralPath (
        Join-Path `
            $RepositoryRoot `
            "src\wp-content\plugins\amirmotefaker-core\amirmotefaker-core.php"
    ) `
    -Raw `
    -Encoding UTF8

foreach ($Marker in @(
    "Plugin Name: AmirMotefaker Core",
    "Version: 0.1.0",
    "if (! defined('ABSPATH'))"
)) {
    if (-not $PluginSource.Contains($Marker)) {
        throw "WordPress Core Plugin marker is missing: $Marker"
    }
}

$TextFilesForSecretScan = @(
    $RepositoryFiles |
        Where-Object {
            $_.FullName -ne $PSCommandPath -and
            $_.Extension -in @(
                ".md",
                ".txt",
                ".json",
                ".csv",
                ".yml",
                ".yaml",
                ".php",
                ".css",
                ".js",
                ".html"
            )
        }
)

$SecretPatterns = [ordered]@{
    "Private key block" = '-----BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----'
    "GitHub token" = 'gh[pousr]_[A-Za-z0-9_]{20,}'
    "AWS access key" = 'AKIA[0-9A-Z]{16}'
    "OpenAI-style secret" = 'sk-[A-Za-z0-9_-]{20,}'
    "Groq key" = 'gsk_[A-Za-z0-9_-]{16,}'
    "Google API key" = 'AIza[A-Za-z0-9_-]{20,}'
}

foreach ($TextFile in $TextFilesForSecretScan) {
    $Content = Get-Content `
        -LiteralPath $TextFile.FullName `
        -Raw `
        -Encoding UTF8

    foreach ($Entry in $SecretPatterns.GetEnumerator()) {
        if (
            [regex]::IsMatch(
                $Content,
                [string]$Entry.Value
            )
        ) {
            throw (
                "Potential secret found: " +
                "$($Entry.Key) in $($TextFile.FullName)"
            )
        }
    }
}

$GitStatus = (
    git -C $RepositoryRoot status --porcelain=v1 --untracked-files=all
) -join "`n"

if ($LASTEXITCODE -ne 0) {
    throw "Could not inspect final Git status."
}

if (-not [string]::IsNullOrWhiteSpace($GitStatus)) {
    throw "Repository working tree is not clean during Product Test."
}

Write-Host "Required files: PASS"
Write-Host "Persian RTL prototype: PASS"
Write-Host "Reduced-motion behavior: PASS"
Write-Host "Prototype network boundary: PASS"
Write-Host "WordPress Theme scaffold: PASS"
Write-Host "WordPress Core Plugin scaffold: PASS"
Write-Host "Sensitive-file gate: PASS"
Write-Host "Secret-pattern scan: PASS"
Write-Host "Working tree: CLEAN"
Write-Host "AMIRMOTEFAKER-SITE-FOUNDATION-PRODUCT-TEST-PASS"
