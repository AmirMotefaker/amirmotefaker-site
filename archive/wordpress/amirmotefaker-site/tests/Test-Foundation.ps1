[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$WorkspaceRoot
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Assert-True {
    param(
        [Parameter(Mandatory = $true)]
        [bool]$Condition,

        [Parameter(Mandatory = $true)]
        [string]$Message
    )

    if (-not $Condition) {
        throw $Message
    }
}

$ExpectedFiles = @(
    ".editorconfig",
    ".gitattributes",
    ".gitignore",
    "README.md",
    "LICENSE",
    "style.css",
    "theme.json",
    "functions.php",
    "screenshot.png",
    "assets/css/base.css",
    "assets/css/components.css",
    "assets/css/dark.css",
    "assets/css/light.css",
    "assets/css/rtl.css",
    "assets/js/theme-toggle.js",
    "assets/js/navigation.js",
    "parts/header.html",
    "parts/footer.html",
    "parts/sidebar.html",
    "templates/index.html",
    "templates/front-page.html",
    "templates/page.html",
    "templates/single.html",
    "templates/archive.html",
    "templates/search.html",
    "templates/404.html",
    "patterns/hero.php",
    "patterns/products.php",
    "patterns/about-summary.php",
    "patterns/technology-news.php",
    "patterns/writing.php",
    "patterns/collaboration-cta.php",
    "inc/setup.php",
    "inc/assets.php",
    "inc/patterns.php",
    "inc/security.php",
    "docs/ARCHITECTURE.md",
    "docs/CONTENT-MODEL.md",
    "docs/DESIGN-TOKENS.md",
    "docs/NEWS-WORKFLOW.md",
    "docs/SECURITY-BASELINE.md",
    "docs/RELEASE-RUNBOOK.md",
    "tests/Test-Foundation.ps1",
    "tests/Test-Product.ps1",
    "tests/Test-Security.ps1"
)

Assert-True `
    -Condition (Test-Path -LiteralPath $WorkspaceRoot -PathType Container) `
    -Message "Workspace root was not found."

Assert-True `
    -Condition (-not (Test-Path -LiteralPath (Join-Path $WorkspaceRoot ".git"))) `
    -Message "Git metadata must not exist in the offline workspace."

$ActualFiles = @(
    Get-ChildItem `
        -LiteralPath $WorkspaceRoot `
        -Recurse `
        -File |
    ForEach-Object {
        (
            [System.IO.Path]::GetRelativePath(
                $WorkspaceRoot,
                $_.FullName
            ) -replace "\\", "/"
        )
    } |
    Sort-Object -Unique
)

$MissingFiles = @(
    $ExpectedFiles |
    Where-Object {
        $_ -notin $ActualFiles
    }
)

$UnexpectedFiles = @(
    $ActualFiles |
    Where-Object {
        $_ -notin $ExpectedFiles
    }
)

Assert-True `
    -Condition (@($MissingFiles).Count -eq 0) `
    -Message ("Missing files: " + ($MissingFiles -join ", "))

Assert-True `
    -Condition (@($UnexpectedFiles).Count -eq 0) `
    -Message ("Unexpected files: " + ($UnexpectedFiles -join ", "))

$ThemeJsonPath = Join-Path $WorkspaceRoot "theme.json"
$ThemeJson = Get-Content `
    -LiteralPath $ThemeJsonPath `
    -Raw `
    -Encoding UTF8 |
    ConvertFrom-Json

Assert-True `
    -Condition ([int]$ThemeJson.version -eq 3) `
    -Message "theme.json version must be 3."

Assert-True `
    -Condition ($null -ne $ThemeJson.settings) `
    -Message "theme.json settings are missing."

Assert-True `
    -Condition ($null -ne $ThemeJson.styles) `
    -Message "theme.json styles are missing."

$StyleHeader = Get-Content `
    -LiteralPath (Join-Path $WorkspaceRoot "style.css") `
    -Raw `
    -Encoding UTF8

foreach ($Marker in @(
    "Theme Name: AmirMotefaker.ir Foundation",
    "Text Domain: amirmotefaker",
    "License: GPL-2.0-or-later"
)) {
    Assert-True `
        -Condition $StyleHeader.Contains($Marker) `
        -Message "Required style.css marker is missing: $Marker"
}

$Screenshot = Get-Item `
    -LiteralPath (Join-Path $WorkspaceRoot "screenshot.png")

Assert-True `
    -Condition ($Screenshot.Length -gt 1000) `
    -Message "Theme screenshot is missing or too small."

foreach ($TestScript in @(
    "tests/Test-Foundation.ps1",
    "tests/Test-Product.ps1",
    "tests/Test-Security.ps1"
)) {
    $TestPath = Join-Path $WorkspaceRoot $TestScript
    $Tokens = $null
    $Errors = $null

    [System.Management.Automation.Language.Parser]::ParseFile(
        $TestPath,
        [ref]$Tokens,
        [ref]$Errors
    ) | Out-Null

    Assert-True `
        -Condition (@($Errors).Count -eq 0) `
        -Message "PowerShell parser failed for $TestScript."
}

Write-Output "Expected files: $(@($ExpectedFiles).Count)"
Write-Output "Actual files: $(@($ActualFiles).Count)"
Write-Output "Missing files: $(@($MissingFiles).Count)"
Write-Output "Unexpected files: $(@($UnexpectedFiles).Count)"
Write-Output "Theme JSON version: $($ThemeJson.version)"
Write-Output "PASS_AMIRMOTEFAKER_IR_FOUNDATION_STRUCTURE"
