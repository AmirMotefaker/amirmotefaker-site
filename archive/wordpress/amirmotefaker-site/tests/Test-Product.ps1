[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$WorkspaceRoot
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Read-WorkspaceFile {
    param(
        [Parameter(Mandatory = $true)]
        [string]$RelativePath
    )

    return Get-Content `
        -LiteralPath (Join-Path $WorkspaceRoot $RelativePath) `
        -Raw `
        -Encoding UTF8
}

function Assert-Contains {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Content,

        [Parameter(Mandatory = $true)]
        [string]$Marker,

        [Parameter(Mandatory = $true)]
        [string]$Context
    )

    if (-not $Content.Contains($Marker)) {
        throw "Required product marker was not found. Context=$Context; Marker=$Marker"
    }
}

$Hero = Read-WorkspaceFile "patterns/hero.php"
$Products = Read-WorkspaceFile "patterns/products.php"
$About = Read-WorkspaceFile "patterns/about-summary.php"
$News = Read-WorkspaceFile "patterns/technology-news.php"
$FrontPage = Read-WorkspaceFile "templates/front-page.html"
$ThemeToggle = Read-WorkspaceFile "assets/js/theme-toggle.js"
$DarkCss = Read-WorkspaceFile "assets/css/dark.css"
$LightCss = Read-WorkspaceFile "assets/css/light.css"
$RtlCss = Read-WorkspaceFile "assets/css/rtl.css"

foreach ($Marker in @(
    "بنیان‌گذار محصولات دیجیتال، مهندس نرم‌افزار و مدیر بازاریابی و فروش",
    "فناوری را می‌سازم، به بازار می‌برم و به کسب‌وکار تبدیل می‌کنم.",
    "درخواست همکاری",
    "مشاهده محصولات",
    "hello@amirmotefaker.ir"
)) {
    Assert-Contains `
        -Content $Hero `
        -Marker $Marker `
        -Context "Hero"
}

Assert-Contains `
    -Content $About `
    -Marker "بیش از سه دهه همراه فناوری" `
    -Context "About summary"

$LinkResanIndex = $Products.IndexOf("LinkResan")
$FarsiSmartIndex = $Products.IndexOf("Farsi Smart")
$AvaIndex = $Products.IndexOf("Ava")

if (
    $LinkResanIndex -lt 0 -or
    $FarsiSmartIndex -le $LinkResanIndex -or
    $AvaIndex -le $FarsiSmartIndex
) {
    throw "Approved product order was not preserved."
}

Assert-Contains `
    -Content $News `
    -Marker "اخبار فناوری" `
    -Context "Technology News"

Assert-Contains `
    -Content $News `
    -Marker "Draft-only" `
    -Context "Technology News"

Assert-Contains `
    -Content $FrontPage `
    -Marker "دیدگاه‌های امیر" `
    -Context "Front page"

Assert-Contains `
    -Content $FrontPage `
    -Marker 'amirmotefaker/technology-news' `
    -Context "Front page"

Assert-Contains `
    -Content $ThemeToggle `
    -Marker 'data-theme' `
    -Context "Theme toggle"

Assert-Contains `
    -Content $DarkCss `
    -Marker 'data-theme="dark"' `
    -Context "Dark CSS"

Assert-Contains `
    -Content $LightCss `
    -Marker 'data-theme="light"' `
    -Context "Light CSS"

Assert-Contains `
    -Content $RtlCss `
    -Marker 'direction: rtl' `
    -Context "RTL CSS"

$TextFiles = @(
    Get-ChildItem `
        -LiteralPath $WorkspaceRoot `
        -Recurse `
        -File |
    Where-Object {
        $_.Extension -in @(
            ".md",
            ".txt",
            ".css",
            ".js",
            ".html",
            ".php",
            ".json"
        )
    }
)

$CombinedText = (
    $TextFiles |
    ForEach-Object {
        Get-Content `
            -LiteralPath $_.FullName `
            -Raw `
            -Encoding UTF8
    }
) -join "`n"

foreach ($ForbiddenMarker in @(
    "Lorem ipsum",
    "lorem ipsum",
    "PLACEHOLDER_METRIC",
    "FAKE_TESTIMONIAL",
    "Blind Auto-publish"
)) {
    if ($CombinedText.Contains($ForbiddenMarker)) {
        throw "Forbidden product marker was found: $ForbiddenMarker"
    }
}

if ($CombinedText -match '(?<!\d)09\d{9}(?!\d)') {
    throw "A public Iranian mobile number was found."
}

Write-Output "Product order: LinkResan, Farsi Smart, Ava"
Write-Output "Dark theme contract: PASS"
Write-Output "Light theme contract: PASS"
Write-Output "RTL contract: PASS"
Write-Output "Technology News separation: PASS"
Write-Output "PASS_AMIRMOTEFAKER_IR_FOUNDATION_PRODUCT"
