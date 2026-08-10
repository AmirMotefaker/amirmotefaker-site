[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("FINALIZE_AMIRMOTEFAKER_IR_PERSONAL_PROFILE_AND_TECH_NEWS_BASELINE_V5")]
    [string]$FinalizationDeclaration
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$Origin = "https://amirmotefaker.ir"
$AboutUrl = "$Origin/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d9%86/"
$ResumeUrl = "$Origin/%d8%b1%d8%b2%d9%88%d9%85%d9%87-%d8%a7%d9%85%db%8c%d8%b1/"
$WpV2 = "$Origin/wp-json/wp/v2"

$EvidenceRoot = "C:\Projects\AmirMotefaker-Audits\personal-profile-news-baseline\2026-08-05-v5"
$SourceEvidenceRoot = "C:\Projects\AmirMotefaker-Audits\personal-profile-news-baseline\2026-08-05-v1"
$RawRoot = Join-Path $SourceEvidenceRoot "raw"
$ExecutedScriptRoot = Join-Path $EvidenceRoot "executed-script"

$SummaryPath = Join-Path $EvidenceRoot "00-summary.txt"
$HomepageHtmlPath = Join-Path $RawRoot "01-homepage.html"
$AboutHtmlPath = Join-Path $RawRoot "02-about-page.html"
$ResumeHtmlPath = Join-Path $RawRoot "03-resume-page.html"
$PagesJsonPath = Join-Path $RawRoot "04-public-pages.json"
$CategoriesJsonPath = Join-Path $RawRoot "05-public-categories.json"
$LatestPostsJsonPath = Join-Path $RawRoot "06-latest-public-posts.json"

$NavigationTextPath = Join-Path $EvidenceRoot "01-home-navigation.txt"
$NavigationJsonPath = Join-Path $EvidenceRoot "02-home-navigation.json"
$PageMatchTextPath = Join-Path $EvidenceRoot "03-page-match-candidates.txt"
$PageMatchJsonPath = Join-Path $EvidenceRoot "04-page-match-candidates.json"
$ProfileShapeTextPath = Join-Path $EvidenceRoot "05-profile-shape-validation.txt"
$ProfileShapeJsonPath = Join-Path $EvidenceRoot "06-profile-shape-validation.json"
$AboutProfileTextPath = Join-Path $EvidenceRoot "07-about-profile.txt"
$AboutProfileJsonPath = Join-Path $EvidenceRoot "08-about-profile.json"
$ResumeProfileTextPath = Join-Path $EvidenceRoot "09-resume-profile.txt"
$ResumeProfileJsonPath = Join-Path $EvidenceRoot "10-resume-profile.json"
$NewsCandidatesTextPath = Join-Path $EvidenceRoot "11-tech-news-candidates.txt"
$NewsCandidatesJsonPath = Join-Path $EvidenceRoot "12-tech-news-candidates.json"
$WorkflowInputPath = Join-Path $EvidenceRoot "13-tech-news-workflow-input-register.md"
$FingerprintPath = Join-Path $EvidenceRoot "14-evidence-fingerprints.txt"
$PostflightPath = Join-Path $EvidenceRoot "15-postflight.txt"

$RequestTimeoutSeconds = 90
$Utf8NoBom = [System.Text.UTF8Encoding]::new($false)

function Write-Utf8File {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,

        [AllowNull()]
        [AllowEmptyString()]
        [string]$Content
    )

    $Parent = Split-Path -Parent $Path

    if (-not [string]::IsNullOrWhiteSpace($Parent)) {
        New-Item -ItemType Directory -Path $Parent -Force | Out-Null
    }

    if ($null -eq $Content) {
        $Content = ""
    }

    [System.IO.File]::WriteAllText(
        $Path,
        $Content.TrimEnd() + "`n",
        $Utf8NoBom
    )
}

function Copy-Verified {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Source,

        [Parameter(Mandatory = $true)]
        [string]$Destination
    )

    $Parent = Split-Path -Parent $Destination
    New-Item -ItemType Directory -Path $Parent -Force | Out-Null

    Copy-Item -LiteralPath $Source -Destination $Destination -Force

    $SourceHash = (
        Get-FileHash `
            -LiteralPath $Source `
            -Algorithm SHA256
    ).Hash

    $DestinationHash = (
        Get-FileHash `
            -LiteralPath $Destination `
            -Algorithm SHA256
    ).Hash

    if ($SourceHash -ne $DestinationHash) {
        throw "Verified copy failed: $Source"
    }
}

function Get-HeaderValue {
    param(
        [Parameter(Mandatory = $true)]
        [System.Net.Http.HttpResponseMessage]$Response,

        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    $Values = $null

    if ($Response.Headers.TryGetValues($Name, [ref]$Values)) {
        return (@($Values) -join ", ")
    }

    if ($Response.Content.Headers.TryGetValues($Name, [ref]$Values)) {
        return (@($Values) -join ", ")
    }

    return ""
}

function Invoke-PublicGet {
    param(
        [Parameter(Mandatory = $true)]
        [System.Net.Http.HttpClient]$Client,

        [Parameter(Mandatory = $true)]
        [string]$Name,

        [Parameter(Mandatory = $true)]
        [string]$Url
    )

    $Stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
    $Response = $null

    try {
        $Response = $Client.GetAsync($Url).GetAwaiter().GetResult()
        $Stopwatch.Stop()

        $Body = $Response.Content.ReadAsStringAsync().GetAwaiter().GetResult()

        $Result = [PSCustomObject]@{
            Name = $Name
            RequestedUrl = $Url
            FinalUrl = [string]$Response.RequestMessage.RequestUri
            StatusCode = [int]$Response.StatusCode
            ContentType = [string]$Response.Content.Headers.ContentType
            BodyLength = $Body.Length
            DurationMs = $Stopwatch.ElapsedMilliseconds
            WpTotal = Get-HeaderValue -Response $Response -Name "X-WP-Total"
            WpTotalPages = Get-HeaderValue -Response $Response -Name "X-WP-TotalPages"
            Body = $Body
            Error = ""
        }
    }
    catch {
        $Stopwatch.Stop()

        $Result = [PSCustomObject]@{
            Name = $Name
            RequestedUrl = $Url
            FinalUrl = ""
            StatusCode = 0
            ContentType = ""
            BodyLength = 0
            DurationMs = $Stopwatch.ElapsedMilliseconds
            WpTotal = ""
            WpTotalPages = ""
            Body = ""
            Error = $_.Exception.Message
        }
    }
    finally {
        if ($null -ne $Response) {
            $Response.Dispose()
        }
    }

    Write-Output -NoEnumerate $Result
}

function ConvertFrom-JsonArray {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Json,

        [Parameter(Mandatory = $true)]
        [string]$Label
    )

    try {
        $Items = @(
            $Json |
            ConvertFrom-Json
        )
    }
    catch {
        throw (
            "JSON parse failed for ${Label}: " +
            $_.Exception.Message
        )
    }

    foreach ($Item in $Items) {
        Write-Output $Item
    }
}

function Convert-HtmlToText {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Html
    )

    if ([string]::IsNullOrWhiteSpace($Html)) {
        return ""
    }

    $Text = [regex]::Replace(
        $Html,
        "(?is)<(script|style|noscript|svg)\b[^>]*>.*?</\1>",
        " "
    )

    $Text = [regex]::Replace(
        $Text,
        "(?is)<br\s*/?>",
        "`n"
    )

    $Text = [regex]::Replace(
        $Text,
        "(?is)</(p|div|section|article|li|h1|h2|h3|h4|h5|h6)>",
        "`n"
    )

    $Text = [regex]::Replace(
        $Text,
        "(?is)<[^>]+>",
        " "
    )

    $Text = [System.Net.WebUtility]::HtmlDecode($Text)
    $Text = $Text -replace "`r", ""
    $Text = [regex]::Replace($Text, "[\t ]+", " ")
    $Text = [regex]::Replace($Text, "\n\s*\n+", "`n")
    $Text = $Text.Trim()

    return $Text
}

function Get-RenderedValue {
    param(
        [AllowNull()]
        [object]$Value
    )

    if ($null -eq $Value) {
        return ""
    }

    if ($Value.PSObject.Properties.Name -contains "rendered") {
        return [string]$Value.rendered
    }

    return [string]$Value
}

function Get-WordCount {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Text
    )

    if ([string]::IsNullOrWhiteSpace($Text)) {
        return 0
    }

    return @(
        [regex]::Matches(
            $Text,
            "\S+"
        )
    ).Count
}

function Get-HeadingRows {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Html
    )

    $Rows = [System.Collections.Generic.List[object]]::new()

    if ([string]::IsNullOrWhiteSpace($Html)) {
        return
    }

    $Matches = [regex]::Matches(
        $Html,
        "(?is)<h(?<level>[1-6])\b[^>]*>(?<content>.*?)</h\k<level>>"
    )

    foreach ($Match in $Matches) {
        $Text = Convert-HtmlToText `
            -Html $Match.Groups["content"].Value

        if (-not [string]::IsNullOrWhiteSpace($Text)) {
            $Rows.Add(
                [PSCustomObject]@{
                    Level = [int]$Match.Groups["level"].Value
                    Text = $Text
                }
            )
        }
    }

    foreach ($Row in $Rows) {
        Write-Output $Row
    }
}

function Get-ImageRows {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Html
    )

    $Rows = [System.Collections.Generic.List[object]]::new()

    if ([string]::IsNullOrWhiteSpace($Html)) {
        return
    }

    $Matches = [regex]::Matches(
        $Html,
        "(?is)<img\b(?<attrs>[^>]+)>"
    )

    foreach ($Match in $Matches) {
        $Attrs = $Match.Groups["attrs"].Value

        $SrcMatch = [regex]::Match(
            $Attrs,
            "(?is)\bsrc\s*=\s*['""](?<value>[^'""]+)['""]"
        )

        $AltMatch = [regex]::Match(
            $Attrs,
            "(?is)\balt\s*=\s*['""](?<value>[^'""]*)['""]"
        )

        $Rows.Add(
            [PSCustomObject]@{
                Src = if ($SrcMatch.Success) {
                    [System.Net.WebUtility]::HtmlDecode(
                        $SrcMatch.Groups["value"].Value
                    )
                }
                else {
                    ""
                }
                Alt = if ($AltMatch.Success) {
                    [System.Net.WebUtility]::HtmlDecode(
                        $AltMatch.Groups["value"].Value
                    )
                }
                else {
                    ""
                }
            }
        )
    }

    foreach ($Row in $Rows) {
        Write-Output $Row
    }
}

function Get-LinkRows {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Html
    )

    $Rows = [System.Collections.Generic.List[object]]::new()

    if ([string]::IsNullOrWhiteSpace($Html)) {
        return
    }

    $Matches = [regex]::Matches(
        $Html,
        "(?is)<a\b[^>]*\bhref\s*=\s*['""](?<href>[^'""]+)['""][^>]*>(?<text>.*?)</a>"
    )

    foreach ($Match in $Matches) {
        $Href = [System.Net.WebUtility]::HtmlDecode(
            $Match.Groups["href"].Value
        ).Trim()

        $Text = Convert-HtmlToText `
            -Html $Match.Groups["text"].Value

        if (
            -not [string]::IsNullOrWhiteSpace($Href) -and
            -not $Href.StartsWith("#")
        ) {
            $Rows.Add(
                [PSCustomObject]@{
                    Text = $Text
                    Href = $Href
                }
            )
        }
    }

    foreach ($Row in $Rows) {
        Write-Output $Row
    }
}

function Get-NavigationRows {
    param(
        [Parameter(Mandatory = $true)]
        [string]$HomepageHtml
    )

    $NavMatches = [regex]::Matches(
        $HomepageHtml,
        "(?is)<nav\b[^>]*>(?<body>.*?)</nav>"
    )

    $CandidateHtml = if ($NavMatches.Count -gt 0) {
        @(
            $NavMatches |
            ForEach-Object {
                $_.Groups["body"].Value
            }
        ) -join "`n"
    }
    else {
        $HomepageHtml
    }

    $Rows = @(
        Get-LinkRows `
            -Html $CandidateHtml
    )

    $Unique = @(
        $Rows |
        Group-Object {
            "$($_.Text)`n$($_.Href)"
        } |
        ForEach-Object {
            $_.Group |
            Select-Object -First 1
        }
    )

    foreach ($Row in $Unique) {
        Write-Output $Row
    }
}

function Convert-ToComparableWordPressText {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Value
    )

    if ([string]::IsNullOrWhiteSpace($Value)) {
        return ""
    }

    $Decoded = [System.Net.WebUtility]::HtmlDecode($Value)

    for ($Attempt = 1; $Attempt -le 3; $Attempt++) {
        try {
            $NextDecoded = [System.Uri]::UnescapeDataString($Decoded)
        }
        catch {
            break
        }

        if ($NextDecoded -eq $Decoded) {
            break
        }

        $Decoded = $NextDecoded
    }

    $Decoded = $Decoded.Normalize(
        [System.Text.NormalizationForm]::FormC
    )

    $Decoded = $Decoded.Replace(
        [char]0x064A,
        [char]0x06CC
    )

    $Decoded = $Decoded.Replace(
        [char]0x0649,
        [char]0x06CC
    )

    $Decoded = $Decoded.Replace(
        [char]0x0643,
        [char]0x06A9
    )

    foreach ($CodePoint in @(
        0x200C,
        0x200D,
        0x200E,
        0x200F
    )) {
        $Decoded = $Decoded.Replace(
            [char]$CodePoint,
            [char]0x0020
        )
    }

    $Decoded = $Decoded.ToLowerInvariant()

    $Decoded = [regex]::Replace(
        $Decoded,
        "[^\p{L}\p{Nd}]+",
        " "
    )

    $Decoded = [regex]::Replace(
        $Decoded,
        "\s+",
        " "
    ).Trim()

    return $Decoded
}

function Get-UrlPathComparableText {
    param(
        [AllowNull()]
        [AllowEmptyString()]
        [string]$Url
    )

    if ([string]::IsNullOrWhiteSpace($Url)) {
        return ""
    }

    try {
        $Uri = [System.Uri]::new(
            $Url,
            [System.UriKind]::Absolute
        )

        return Convert-ToComparableWordPressText `
            -Value $Uri.AbsolutePath
    }
    catch {
        return Convert-ToComparableWordPressText `
            -Value $Url
    }
}

function Resolve-WordPressPage {
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Pages,

        [Parameter(Mandatory = $true)]
        [string]$Label,

        [Parameter(Mandatory = $true)]
        [string]$ExpectedUrl,

        [Parameter(Mandatory = $true)]
        [string[]]$ExpectedPhrases
    )

    $ExpectedUrlComparable = Convert-ToComparableWordPressText `
        -Value $ExpectedUrl

    $ExpectedPathComparable = Get-UrlPathComparableText `
        -Url $ExpectedUrl

    $ComparablePhrases = @(
        $ExpectedPhrases |
        ForEach-Object {
            Convert-ToComparableWordPressText `
                -Value $_
        } |
        Where-Object {
            -not [string]::IsNullOrWhiteSpace($_)
        } |
        Sort-Object -Unique
    )

    $Candidates = [System.Collections.Generic.List[object]]::new()

    foreach ($Page in $Pages) {
        $Title = Convert-HtmlToText `
            -Html (
                Get-RenderedValue `
                    -Value $Page.title
            )

        $Link = [string]$Page.link
        $Slug = [string]$Page.slug

        $TitleComparable = Convert-ToComparableWordPressText `
            -Value $Title

        $LinkComparable = Convert-ToComparableWordPressText `
            -Value $Link

        $LinkPathComparable = Get-UrlPathComparableText `
            -Url $Link

        $SlugComparable = Convert-ToComparableWordPressText `
            -Value $Slug

        $Score = 0
        $Reasons = [System.Collections.Generic.List[string]]::new()

        if (
            -not [string]::IsNullOrWhiteSpace($ExpectedUrlComparable) -and
            $LinkComparable -eq $ExpectedUrlComparable
        ) {
            $Score += 140
            $Reasons.Add("EXACT_NORMALIZED_URL")
        }

        if (
            -not [string]::IsNullOrWhiteSpace($ExpectedPathComparable) -and
            $LinkPathComparable -eq $ExpectedPathComparable
        ) {
            $Score += 130
            $Reasons.Add("EXACT_NORMALIZED_PATH")
        }

        foreach ($Phrase in $ComparablePhrases) {
            if (
                -not [string]::IsNullOrWhiteSpace($TitleComparable) -and
                $TitleComparable -eq $Phrase
            ) {
                $Score += 100
                $Reasons.Add("EXACT_TITLE:$Phrase")
            }
            elseif (
                -not [string]::IsNullOrWhiteSpace($TitleComparable) -and
                $TitleComparable.Contains($Phrase)
            ) {
                $Score += 70
                $Reasons.Add("TITLE_CONTAINS:$Phrase")
            }

            if (
                -not [string]::IsNullOrWhiteSpace($SlugComparable) -and
                $SlugComparable -eq $Phrase
            ) {
                $Score += 90
                $Reasons.Add("EXACT_SLUG:$Phrase")
            }
            elseif (
                -not [string]::IsNullOrWhiteSpace($SlugComparable) -and
                $SlugComparable.Contains($Phrase)
            ) {
                $Score += 65
                $Reasons.Add("SLUG_CONTAINS:$Phrase")
            }

            if (
                -not [string]::IsNullOrWhiteSpace($LinkPathComparable) -and
                $LinkPathComparable.Contains($Phrase)
            ) {
                $Score += 50
                $Reasons.Add("PATH_CONTAINS:$Phrase")
            }
        }

        $Candidates.Add(
            [PSCustomObject]@{
                Label = $Label
                Id = [long]$Page.id
                Title = $Title
                Slug = $Slug
                Link = $Link
                Status = [string]$Page.status
                Score = $Score
                Reasons = @($Reasons)
                TitleComparable = $TitleComparable
                SlugComparable = $SlugComparable
                LinkPathComparable = $LinkPathComparable
                Page = $Page
            }
        )
    }

    $Ranked = @(
        $Candidates |
        Sort-Object `
            -Property @{
                Expression = {
                    [int]$_.Score
                }
                Descending = $true
            }, @{
                Expression = {
                    [long]$_.Id
                }
                Descending = $false
            }
    )

    $Top = @($Ranked) |
        Select-Object -First 1

    $Second = @($Ranked) |
        Select-Object -Skip 1 -First 1

    $TopScore = if ($null -eq $Top) {
        0
    }
    else {
        [int]$Top.Score
    }

    $SecondScore = if ($null -eq $Second) {
        -1
    }
    else {
        [int]$Second.Score
    }

    $Pass = (
        $null -ne $Top -and
        $TopScore -ge 70 -and
        $TopScore -gt $SecondScore
    )

    $Resolution = [PSCustomObject]@{
        Label = $Label
        Pass = $Pass
        SelectedId = if ($Pass) {
            [long]$Top.Id
        }
        else {
            0
        }
        SelectedTitle = if ($Pass) {
            [string]$Top.Title
        }
        else {
            ""
        }
        SelectedSlug = if ($Pass) {
            [string]$Top.Slug
        }
        else {
            ""
        }
        SelectedLink = if ($Pass) {
            [string]$Top.Link
        }
        else {
            ""
        }
        SelectedScore = $TopScore
        RunnerUpScore = $SecondScore
        SelectedReasons = if ($Pass) {
            @($Top.Reasons)
        }
        else {
            @()
        }
        CandidateCount = $Ranked.Count
        Candidates = @(
            $Ranked |
            Select-Object -First 14 |
            ForEach-Object {
                [PSCustomObject]@{
                    Id = $_.Id
                    Title = $_.Title
                    Slug = $_.Slug
                    Link = $_.Link
                    Score = $_.Score
                    Reasons = @($_.Reasons)
                    TitleComparable = $_.TitleComparable
                    SlugComparable = $_.SlugComparable
                    LinkPathComparable = $_.LinkPathComparable
                }
            }
        )
        Page = if ($Pass) {
            $Top.Page
        }
        else {
            $null
        }
    }

    Write-Output -NoEnumerate $Resolution
}

function Get-PageProfile {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Page,

        [Parameter(Mandatory = $true)]
        [string]$PublicHtml
    )

    $TitleHtml = Get-RenderedValue -Value $Page.title
    $ExcerptHtml = Get-RenderedValue -Value $Page.excerpt
    $ContentHtml = Get-RenderedValue -Value $Page.content

    $TitleText = Convert-HtmlToText -Html $TitleHtml
    $ExcerptText = Convert-HtmlToText -Html $ExcerptHtml
    $ContentText = Convert-HtmlToText -Html $ContentHtml

    $Headings = @(
        Get-HeadingRows `
            -Html $ContentHtml
    )

    $Images = @(
        Get-ImageRows `
            -Html $ContentHtml
    )

    $Links = @(
        Get-LinkRows `
            -Html $ContentHtml
    )

    $ExternalLinks = @(
        $Links |
        Where-Object {
            $PropertyNames = @(
                $_.PSObject.Properties.Name
            )

            (
                "Href" -in $PropertyNames -and
                [string]$_.Href -match "^https?://" -and
                [string]$_.Href -notmatch "^https?://(www\.)?amirmotefaker\.ir"
            )
        } |
        ForEach-Object {
            [PSCustomObject]@{
                Text = if (
                    "Text" -in @($_.PSObject.Properties.Name)
                ) {
                    [string]$_.Text
                }
                else {
                    ""
                }
                Href = [string]$_.Href
            }
        }
    )

    $PublicH1 = @(
        Get-HeadingRows `
            -Html $PublicHtml |
        Where-Object {
            (
                "Level" -in @($_.PSObject.Properties.Name)
            ) -and
            [int]$_.Level -eq 1
        }
    )

    $MissingAltCount = @(
        $Images |
        Where-Object {
            (
                "Alt" -notin @($_.PSObject.Properties.Name)
            ) -or
            [string]::IsNullOrWhiteSpace(
                [string]$_.Alt
            )
        }
    ).Count

    $Profile = [PSCustomObject][ordered]@{
        Id = [long]$Page.id
        Slug = [string]$Page.slug
        Status = [string]$Page.status
        Link = [string]$Page.link
        Date = [string]$Page.date
        Modified = [string]$Page.modified
        Template = [string]$Page.template
        Parent = [long]$Page.parent
        MenuOrder = [int]$Page.menu_order
        Title = $TitleText
        Excerpt = $ExcerptText
        ContentText = $ContentText
        ContentWordCount = Get-WordCount -Text $ContentText
        ContentCharacterCount = $ContentText.Length
        HeadingCount = $Headings.Count
        Headings = [object[]]@($Headings)
        PublicPageH1Count = $PublicH1.Count
        ImagesCount = $Images.Count
        ImagesMissingAltCount = $MissingAltCount
        Images = [object[]]@($Images)
        LinkCount = $Links.Count
        ExternalLinkCount = $ExternalLinks.Count
        ExternalLinks = [object[]]@($ExternalLinks)
    }

    return $Profile
}

function Resolve-SinglePageProfile {
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Outputs,

        [Parameter(Mandatory = $true)]
        [string]$Label
    )

    $RequiredProperties = @(
        "Id",
        "Slug",
        "Status",
        "Link",
        "Title",
        "ContentText",
        "ContentWordCount",
        "HeadingCount",
        "Headings",
        "ImagesCount",
        "ImagesMissingAltCount",
        "Images",
        "LinkCount",
        "ExternalLinkCount",
        "ExternalLinks"
    )

    $Rows = @(
        $Outputs |
        ForEach-Object {
            $PropertyNames = @(
                $_.PSObject.Properties.Name
            )

            $MissingProperties = @(
                $RequiredProperties |
                Where-Object {
                    $_ -notin $PropertyNames
                }
            )

            [PSCustomObject]@{
                TypeName = if ($null -eq $_) {
                    "NULL"
                }
                else {
                    $_.GetType().FullName
                }
                IsProfileCandidate = ($MissingProperties.Count -eq 0)
                MissingProperties = @($MissingProperties)
                Value = $_
            }
        }
    )

    $Candidates = @(
        $Rows |
        Where-Object {
            [bool]$_.IsProfileCandidate
        }
    )

    if ($Candidates.Count -ne 1) {
        $Details = @(
            $Rows |
            ForEach-Object {
                (
                    "Type=$($_.TypeName)" +
                    "; Candidate=$($_.IsProfileCandidate)" +
                    "; Missing=$(@($_.MissingProperties) -join ',')"
                )
            }
        ) -join " | "

        throw (
            "$Label profile output validation failed. " +
            "Outputs=$($Rows.Count); " +
            "Candidates=$($Candidates.Count); " +
            $Details
        )
    }

    $NoiseRows = @(
        $Rows |
        Where-Object {
            -not [bool]$_.IsProfileCandidate
        }
    )

    $NoiseDetails = @(
        $NoiseRows |
        ForEach-Object {
            [PSCustomObject]@{
                TypeName = $_.TypeName
                MissingProperties = [object[]]@(
                    $_.MissingProperties
                )
            }
        }
    )

    $Resolution = [PSCustomObject][ordered]@{
        Label = $Label
        Pass = $true
        OutputCount = $Rows.Count
        CandidateCount = $Candidates.Count
        NoiseCount = $NoiseRows.Count
        OutputTypes = [object[]]@(
            $Rows |
            ForEach-Object {
                [string]$_.TypeName
            }
        )
        NoiseDetails = [object[]]@($NoiseDetails)
        Profile = $Candidates[0].Value
    }

    return $Resolution
}

function Resolve-SingleResolutionObject {
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Outputs,

        [Parameter(Mandatory = $true)]
        [string]$Label
    )

    $RequiredProperties = @(
        "Label",
        "Pass",
        "OutputCount",
        "CandidateCount",
        "NoiseCount",
        "OutputTypes",
        "Profile"
    )

    $Candidates = @(
        $Outputs |
        Where-Object {
            $PropertyNames = @(
                $_.PSObject.Properties.Name
            )

            @(
                $RequiredProperties |
                Where-Object {
                    $_ -notin $PropertyNames
                }
            ).Count -eq 0
        }
    )

    if ($Candidates.Count -ne 1) {
        $OutputTypes = @(
            $Outputs |
            ForEach-Object {
                if ($null -eq $_) {
                    "NULL"
                }
                else {
                    $_.GetType().FullName
                }
            }
        ) -join ","

        throw (
            "$Label resolution output validation failed. " +
            "Outputs=$($Outputs.Count); " +
            "Candidates=$($Candidates.Count); " +
            "Types=$OutputTypes"
        )
    }

    $Resolution = $Candidates[0]
    $ResolutionProperties = @(
        $Resolution.PSObject.Properties.Name
    )

    $SafeNoiseDetails = if (
        "NoiseDetails" -in $ResolutionProperties -and
        $null -ne $Resolution.PSObject.Properties["NoiseDetails"].Value
    ) {
        [object[]]@(
            $Resolution.PSObject.Properties["NoiseDetails"].Value
        )
    }
    else {
        [object[]]@()
    }

    $Normalized = [PSCustomObject][ordered]@{
        Label = [string]$Resolution.Label
        Pass = [bool]$Resolution.Pass
        OutputCount = [int]$Resolution.OutputCount
        CandidateCount = [int]$Resolution.CandidateCount
        NoiseCount = [int]$Resolution.NoiseCount
        OutputTypes = [object[]]@($Resolution.OutputTypes)
        NoiseDetails = [object[]]@($SafeNoiseDetails)
        Profile = $Resolution.Profile
        RawResolutionOutputCount = $Outputs.Count
        NoiseDetailsWasPresent = (
            "NoiseDetails" -in $ResolutionProperties
        )
    }

    return $Normalized
}

New-Item -ItemType Directory -Path $EvidenceRoot -Force | Out-Null

Write-Host "`n=== AmirMotefaker.ir personal profile and tech-news baseline finalizer V5 ===" -ForegroundColor Cyan

if (
    $FinalizationDeclaration -ne
    "FINALIZE_AMIRMOTEFAKER_IR_PERSONAL_PROFILE_AND_TECH_NEWS_BASELINE_V5"
) {
    throw "Required offline finalization declaration was not supplied."
}

$FinalizationStartedAt = [DateTimeOffset]::Now

foreach ($RequiredPath in @(
    $HomepageHtmlPath,
    $AboutHtmlPath,
    $ResumeHtmlPath,
    $PagesJsonPath,
    $CategoriesJsonPath,
    $LatestPostsJsonPath
)) {
    if (-not (Test-Path -LiteralPath $RequiredPath -PathType Leaf)) {
        throw "Required archived V1 evidence was not found: $RequiredPath"
    }
}

Write-Host "`n=== Archived V1 evidence verification ===" -ForegroundColor Cyan

$HomepageBody = Get-Content `
    -LiteralPath $HomepageHtmlPath `
    -Raw `
    -Encoding UTF8

$AboutBody = Get-Content `
    -LiteralPath $AboutHtmlPath `
    -Raw `
    -Encoding UTF8

$ResumeBody = Get-Content `
    -LiteralPath $ResumeHtmlPath `
    -Raw `
    -Encoding UTF8

$PagesJson = Get-Content `
    -LiteralPath $PagesJsonPath `
    -Raw `
    -Encoding UTF8

$CategoriesJson = Get-Content `
    -LiteralPath $CategoriesJsonPath `
    -Raw `
    -Encoding UTF8

$LatestPostsJson = Get-Content `
    -LiteralPath $LatestPostsJsonPath `
    -Raw `
    -Encoding UTF8

$Pages = @(
    ConvertFrom-JsonArray `
        -Json $PagesJson `
        -Label "archived public pages"
)

$Categories = @(
    ConvertFrom-JsonArray `
        -Json $CategoriesJson `
        -Label "archived public categories"
)

$LatestPosts = @(
    ConvertFrom-JsonArray `
        -Json $LatestPostsJson `
        -Label "archived latest public posts"
)

$HomepageResult = [PSCustomObject]@{
    Name = "homepage-archived"
    FinalUrl = "$Origin/"
    StatusCode = 200
    BodyLength = $HomepageBody.Length
    Body = $HomepageBody
}

$AboutResult = [PSCustomObject]@{
    Name = "about-page-archived"
    FinalUrl = "$Origin/درباره-من/"
    StatusCode = 200
    BodyLength = $AboutBody.Length
    Body = $AboutBody
}

$ResumeResult = [PSCustomObject]@{
    Name = "resume-page-archived"
    FinalUrl = "$Origin/رزومه-امیر/"
    StatusCode = 200
    BodyLength = $ResumeBody.Length
    Body = $ResumeBody
}

Write-Host (
    "homepage" +
    " | Archived=True" +
    " | Bytes=$($HomepageBody.Length)"
)

Write-Host (
    "about-page" +
    " | Archived=True" +
    " | Bytes=$($AboutBody.Length)"
)

Write-Host (
    "resume-page" +
    " | Archived=True" +
    " | Bytes=$($ResumeBody.Length)"
)

Write-Host (
    "public-pages" +
    " | Archived=True" +
    " | Records=$($Pages.Count)"
)

Write-Host (
    "public-categories" +
    " | Archived=True" +
    " | Records=$($Categories.Count)"
)

Write-Host (
    "latest-public-posts" +
    " | Archived=True" +
    " | Records=$($LatestPosts.Count)"
)

if ($Pages.Count -lt 2) {
    throw "Public page inventory is unexpectedly small."
}

$NavigationRows = @(
    Get-NavigationRows `
        -HomepageHtml $HomepageResult.Body
)

$NavigationLines = @(
    $NavigationRows |
    ForEach-Object {
        "$($_.Text) | $($_.Href)"
    }
)

Write-Utf8File `
    -Path $NavigationTextPath `
    -Content ($NavigationLines -join "`n")

Write-Utf8File `
    -Path $NavigationJsonPath `
    -Content (
        $NavigationRows |
        ConvertTo-Json `
            -Depth 10
    )

$AboutResolution = Resolve-WordPressPage `
    -Pages $Pages `
    -Label "ABOUT" `
    -ExpectedUrl $AboutResult.FinalUrl `
    -ExpectedPhrases @(
        "درباره من",
        "درباره",
        "about"
    )

$ResumeResolution = Resolve-WordPressPage `
    -Pages $Pages `
    -Label "RESUME" `
    -ExpectedUrl $ResumeResult.FinalUrl `
    -ExpectedPhrases @(
        "رزومه امیر",
        "رزومه",
        "resume",
        "cv"
    )

$PageMatchBundle = [PSCustomObject]@{
    About = [PSCustomObject]@{
        Pass = $AboutResolution.Pass
        SelectedId = $AboutResolution.SelectedId
        SelectedTitle = $AboutResolution.SelectedTitle
        SelectedSlug = $AboutResolution.SelectedSlug
        SelectedLink = $AboutResolution.SelectedLink
        SelectedScore = $AboutResolution.SelectedScore
        RunnerUpScore = $AboutResolution.RunnerUpScore
        SelectedReasons = @($AboutResolution.SelectedReasons)
        CandidateCount = $AboutResolution.CandidateCount
        Candidates = @($AboutResolution.Candidates)
    }
    Resume = [PSCustomObject]@{
        Pass = $ResumeResolution.Pass
        SelectedId = $ResumeResolution.SelectedId
        SelectedTitle = $ResumeResolution.SelectedTitle
        SelectedSlug = $ResumeResolution.SelectedSlug
        SelectedLink = $ResumeResolution.SelectedLink
        SelectedScore = $ResumeResolution.SelectedScore
        RunnerUpScore = $ResumeResolution.RunnerUpScore
        SelectedReasons = @($ResumeResolution.SelectedReasons)
        CandidateCount = $ResumeResolution.CandidateCount
        Candidates = @($ResumeResolution.Candidates)
    }
}

$PageMatchLines = @(
    (
        "ABOUT" +
        " | Pass=$($AboutResolution.Pass)" +
        " | ID=$($AboutResolution.SelectedId)" +
        " | Title=$($AboutResolution.SelectedTitle)" +
        " | Slug=$($AboutResolution.SelectedSlug)" +
        " | Score=$($AboutResolution.SelectedScore)" +
        " | RunnerUp=$($AboutResolution.RunnerUpScore)" +
        " | Reasons=$(@($AboutResolution.SelectedReasons) -join ',')"
    ),
    (
        "RESUME" +
        " | Pass=$($ResumeResolution.Pass)" +
        " | ID=$($ResumeResolution.SelectedId)" +
        " | Title=$($ResumeResolution.SelectedTitle)" +
        " | Slug=$($ResumeResolution.SelectedSlug)" +
        " | Score=$($ResumeResolution.SelectedScore)" +
        " | RunnerUp=$($ResumeResolution.RunnerUpScore)" +
        " | Reasons=$(@($ResumeResolution.SelectedReasons) -join ',')"
    ),
    "",
    "ABOUT TOP CANDIDATES"
)

$PageMatchLines += @(
    $AboutResolution.Candidates |
    ForEach-Object {
        (
            "ID=$($_.Id)" +
            " | Score=$($_.Score)" +
            " | Title=$($_.Title)" +
            " | Slug=$($_.Slug)" +
            " | Link=$($_.Link)" +
            " | Reasons=$(@($_.Reasons) -join ',')"
        )
    }
)

$PageMatchLines += @(
    "",
    "RESUME TOP CANDIDATES"
)

$PageMatchLines += @(
    $ResumeResolution.Candidates |
    ForEach-Object {
        (
            "ID=$($_.Id)" +
            " | Score=$($_.Score)" +
            " | Title=$($_.Title)" +
            " | Slug=$($_.Slug)" +
            " | Link=$($_.Link)" +
            " | Reasons=$(@($_.Reasons) -join ',')"
        )
    }
)

Write-Utf8File `
    -Path $PageMatchTextPath `
    -Content ($PageMatchLines -join "`n")

Write-Utf8File `
    -Path $PageMatchJsonPath `
    -Content (
        $PageMatchBundle |
        ConvertTo-Json `
            -Depth 30
    )

Write-Host "`n=== WordPress page resolution ===" -ForegroundColor Cyan

Write-Host (
    "About" +
    " | Pass=$($AboutResolution.Pass)" +
    " | ID=$($AboutResolution.SelectedId)" +
    " | Title=$($AboutResolution.SelectedTitle)" +
    " | Score=$($AboutResolution.SelectedScore)"
)

Write-Host (
    "Resume" +
    " | Pass=$($ResumeResolution.Pass)" +
    " | ID=$($ResumeResolution.SelectedId)" +
    " | Title=$($ResumeResolution.SelectedTitle)" +
    " | Score=$($ResumeResolution.SelectedScore)"
)

if (-not $AboutResolution.Pass) {
    throw (
        "The public About page could not be resolved uniquely. " +
        "See: $PageMatchTextPath"
    )
}

if (-not $ResumeResolution.Pass) {
    throw (
        "The public Resume page could not be resolved uniquely. " +
        "See: $PageMatchTextPath"
    )
}

$AboutPage = $AboutResolution.Page
$ResumePage = $ResumeResolution.Page

$AboutProfileOutputs = @(
    Get-PageProfile `
        -Page $AboutPage `
        -PublicHtml $AboutResult.Body
)

$ResumeProfileOutputs = @(
    Get-PageProfile `
        -Page $ResumePage `
        -PublicHtml $ResumeResult.Body
)

$AboutProfileResolutionOutputs = @(
    Resolve-SinglePageProfile `
        -Outputs $AboutProfileOutputs `
        -Label "ABOUT"
)

$ResumeProfileResolutionOutputs = @(
    Resolve-SinglePageProfile `
        -Outputs $ResumeProfileOutputs `
        -Label "RESUME"
)

$AboutProfileResolution = Resolve-SingleResolutionObject `
    -Outputs $AboutProfileResolutionOutputs `
    -Label "ABOUT"

$ResumeProfileResolution = Resolve-SingleResolutionObject `
    -Outputs $ResumeProfileResolutionOutputs `
    -Label "RESUME"

$AboutProfile = $AboutProfileResolution.Profile
$ResumeProfile = $ResumeProfileResolution.Profile

$ProfileShapeBundle = [PSCustomObject]@{
    About = [PSCustomObject]@{
        Pass = $AboutProfileResolution.Pass
        OutputCount = $AboutProfileResolution.OutputCount
        CandidateCount = $AboutProfileResolution.CandidateCount
        NoiseCount = $AboutProfileResolution.NoiseCount
        OutputTypes = @($AboutProfileResolution.OutputTypes)
        NoiseDetails = [object[]]@($AboutProfileResolution.NoiseDetails)
        NoiseDetailsWasPresent = $AboutProfileResolution.NoiseDetailsWasPresent
        RawResolutionOutputCount = $AboutProfileResolution.RawResolutionOutputCount
        ProfileProperties = @(
            $AboutProfile.PSObject.Properties.Name
        )
    }
    Resume = [PSCustomObject]@{
        Pass = $ResumeProfileResolution.Pass
        OutputCount = $ResumeProfileResolution.OutputCount
        CandidateCount = $ResumeProfileResolution.CandidateCount
        NoiseCount = $ResumeProfileResolution.NoiseCount
        OutputTypes = @($ResumeProfileResolution.OutputTypes)
        NoiseDetails = [object[]]@($ResumeProfileResolution.NoiseDetails)
        NoiseDetailsWasPresent = $ResumeProfileResolution.NoiseDetailsWasPresent
        RawResolutionOutputCount = $ResumeProfileResolution.RawResolutionOutputCount
        ProfileProperties = @(
            $ResumeProfile.PSObject.Properties.Name
        )
    }
}

$ProfileShapeLines = @(
    (
        "ABOUT" +
        " | Pass=$($AboutProfileResolution.Pass)" +
        " | Outputs=$($AboutProfileResolution.OutputCount)" +
        " | Candidates=$($AboutProfileResolution.CandidateCount)" +
        " | Noise=$($AboutProfileResolution.NoiseCount)" +
        " | Types=$(@($AboutProfileResolution.OutputTypes) -join ',')" +
        " | RawResolutionOutputs=$($AboutProfileResolution.RawResolutionOutputCount)" +
        " | NoiseDetailsPresent=$($AboutProfileResolution.NoiseDetailsWasPresent)"
    ),
    (
        "RESUME" +
        " | Pass=$($ResumeProfileResolution.Pass)" +
        " | Outputs=$($ResumeProfileResolution.OutputCount)" +
        " | Candidates=$($ResumeProfileResolution.CandidateCount)" +
        " | Noise=$($ResumeProfileResolution.NoiseCount)" +
        " | Types=$(@($ResumeProfileResolution.OutputTypes) -join ',')" +
        " | RawResolutionOutputs=$($ResumeProfileResolution.RawResolutionOutputCount)" +
        " | NoiseDetailsPresent=$($ResumeProfileResolution.NoiseDetailsWasPresent)"
    )
)

Write-Utf8File `
    -Path $ProfileShapeTextPath `
    -Content ($ProfileShapeLines -join "`n")

Write-Utf8File `
    -Path $ProfileShapeJsonPath `
    -Content (
        $ProfileShapeBundle |
        ConvertTo-Json `
            -Depth 30
    )

Write-Host "`n=== Profile object validation ===" -ForegroundColor Cyan

Write-Host $ProfileShapeLines[0]
Write-Host $ProfileShapeLines[1]

$AboutHeadingText = @(
    $AboutProfile.Headings |
    ForEach-Object {
        "H$($_.Level): $($_.Text)"
    }
) -join "`n"

$ResumeHeadingText = @(
    $ResumeProfile.Headings |
    ForEach-Object {
        "H$($_.Level): $($_.Text)"
    }
) -join "`n"

$AboutExternalLinksText = @(
    $AboutProfile.ExternalLinks |
    ForEach-Object {
        "$($_.Text) | $($_.Href)"
    }
) -join "`n"

$ResumeExternalLinksText = @(
    $ResumeProfile.ExternalLinks |
    ForEach-Object {
        "$($_.Text) | $($_.Href)"
    }
) -join "`n"

Write-Utf8File -Path $AboutProfileTextPath -Content @"
AMIRMOTEFAKER.IR ABOUT PAGE PUBLIC PROFILE V5

Page ID:
$($AboutProfile.Id)

Title:
$($AboutProfile.Title)

Slug:
$($AboutProfile.Slug)

Link:
$($AboutProfile.Link)

Modified:
$($AboutProfile.Modified)

Status:
$($AboutProfile.Status)

Template:
$($AboutProfile.Template)

Content word count:
$($AboutProfile.ContentWordCount)

Content character count:
$($AboutProfile.ContentCharacterCount)

Content heading count:
$($AboutProfile.HeadingCount)

Public page H1 count:
$($AboutProfile.PublicPageH1Count)

Image count:
$($AboutProfile.ImagesCount)

Images missing alt:
$($AboutProfile.ImagesMissingAltCount)

External link count:
$($AboutProfile.ExternalLinkCount)

Headings:
$AboutHeadingText

External links:
$AboutExternalLinksText

Extracted public content:
$($AboutProfile.ContentText)
"@

Write-Utf8File `
    -Path $AboutProfileJsonPath `
    -Content (
        $AboutProfile |
        ConvertTo-Json `
            -Depth 30
    )

Write-Utf8File -Path $ResumeProfileTextPath -Content @"
AMIRMOTEFAKER.IR RESUME PAGE PUBLIC PROFILE V5

Page ID:
$($ResumeProfile.Id)

Title:
$($ResumeProfile.Title)

Slug:
$($ResumeProfile.Slug)

Link:
$($ResumeProfile.Link)

Modified:
$($ResumeProfile.Modified)

Status:
$($ResumeProfile.Status)

Template:
$($ResumeProfile.Template)

Content word count:
$($ResumeProfile.ContentWordCount)

Content character count:
$($ResumeProfile.ContentCharacterCount)

Content heading count:
$($ResumeProfile.HeadingCount)

Public page H1 count:
$($ResumeProfile.PublicPageH1Count)

Image count:
$($ResumeProfile.ImagesCount)

Images missing alt:
$($ResumeProfile.ImagesMissingAltCount)

External link count:
$($ResumeProfile.ExternalLinkCount)

Headings:
$ResumeHeadingText

External links:
$ResumeExternalLinksText

Extracted public content:
$($ResumeProfile.ContentText)
"@

Write-Utf8File `
    -Path $ResumeProfileJsonPath `
    -Content (
        $ResumeProfile |
        ConvertTo-Json `
            -Depth 30
    )

$NewsRegex = "(?i)(اخبار|خبر|فناوری|تکنولوژی|هوش\s*مصنوعی|\bAI\b|\bTech\b)"

$NewsNavigation = @(
    $NavigationRows |
    Where-Object {
        $_.Text -match $NewsRegex -or
        $_.Href -match "(?i)(news|tech|technology|ai|اخبار|فناوری)"
    }
)

$NewsCategories = @(
    $Categories |
    Where-Object {
        [string]$_.name -match $NewsRegex -or
        [string]$_.slug -match "(?i)(news|tech|technology|ai|اخبار|فناوری)"
    } |
    Sort-Object `
        -Property @{
            Expression = {
                [int]$_.count
            }
            Descending = $true
        }
)

$CategoryMap = @{}

foreach ($Category in $Categories) {
    $CategoryMap[[string]$Category.id] = [string]$Category.name
}

$NewsCategoryIds = @(
    $NewsCategories |
    ForEach-Object {
        [long]$_.id
    }
)

$NewsPostCandidates = @(
    $LatestPosts |
    ForEach-Object {
        $Title = Convert-HtmlToText `
            -Html (
                Get-RenderedValue `
                    -Value $_.title
            )

        $Excerpt = Convert-HtmlToText `
            -Html (
                Get-RenderedValue `
                    -Value $_.excerpt
            )

        $PostCategoryIds = @(
            $_.categories |
            ForEach-Object {
                [long]$_
            }
        )

        $PostCategoryNames = @(
            $PostCategoryIds |
            ForEach-Object {
                $Key = [string]$_

                if ($CategoryMap.ContainsKey($Key)) {
                    $CategoryMap[$Key]
                }
            }
        )

        $CategoryMatch = @(
            $PostCategoryIds |
            Where-Object {
                $_ -in $NewsCategoryIds
            }
        ).Count -gt 0

        $KeywordMatch = (
            $Title -match $NewsRegex -or
            $Excerpt -match $NewsRegex
        )

        if ($CategoryMatch -or $KeywordMatch) {
            [PSCustomObject]@{
                Id = [long]$_.id
                Date = [string]$_.date
                Modified = [string]$_.modified
                Title = $Title
                Slug = [string]$_.slug
                Link = [string]$_.link
                CategoryIds = @($PostCategoryIds)
                CategoryNames = @($PostCategoryNames)
                CategoryMatch = $CategoryMatch
                KeywordMatch = $KeywordMatch
                FeaturedMedia = [long]$_.featured_media
                Excerpt = $Excerpt
            }
        }
    } |
    Sort-Object `
        -Property @{
            Expression = {
                [DateTimeOffset]$_.Date
            }
            Descending = $true
        }
)

$LatestNewsSample = @(
    $NewsPostCandidates |
    Select-Object -First 30
)

$NewsNavigationLines = @(
    $NewsNavigation |
    ForEach-Object {
        "$($_.Text) | $($_.Href)"
    }
) -join "`n"

$NewsCategoryLines = @(
    $NewsCategories |
    ForEach-Object {
        (
            "ID=$($_.id)" +
            " | Name=$($_.name)" +
            " | Slug=$($_.slug)" +
            " | Count=$($_.count)" +
            " | Link=$($_.link)"
        )
    }
) -join "`n"

$NewsPostLines = @(
    $LatestNewsSample |
    ForEach-Object {
        (
            "$($_.Date)" +
            " | ID=$($_.Id)" +
            " | $($_.Title)" +
            " | Categories=$(@($_.CategoryNames) -join ', ')" +
            " | $($_.Link)"
        )
    }
) -join "`n"

Write-Utf8File -Path $NewsCandidatesTextPath -Content @"
AMIRMOTEFAKER.IR PUBLIC TECH-NEWS CANDIDATES V5

Navigation matches:
$($NewsNavigation.Count)

$NewsNavigationLines

Category matches:
$($NewsCategories.Count)

$NewsCategoryLines

Latest 100 posts analyzed:
$($LatestPosts.Count)

News-like post candidates:
$($NewsPostCandidates.Count)

Latest news-like sample:
$NewsPostLines
"@

$NewsCandidateBundle = [PSCustomObject]@{
    NavigationMatches = @($NewsNavigation)
    CategoryMatches = @(
        $NewsCategories |
        ForEach-Object {
            [PSCustomObject]@{
                Id = [long]$_.id
                Name = [string]$_.name
                Slug = [string]$_.slug
                Count = [int]$_.count
                Link = [string]$_.link
                Description = Convert-HtmlToText `
                    -Html ([string]$_.description)
            }
        }
    )
    LatestPostsAnalyzed = $LatestPosts.Count
    NewsLikePostCandidateCount = $NewsPostCandidates.Count
    LatestNewsLikePosts = @($LatestNewsSample)
}

Write-Utf8File `
    -Path $NewsCandidatesJsonPath `
    -Content (
        $NewsCandidateBundle |
        ConvertTo-Json `
            -Depth 30
    )

$PreferredNewsMenu = @(
    $NewsNavigation |
    Where-Object {
        $_.Text -match "اخبار\s*فناوری"
    }
) |
Select-Object -First 1

$PreferredNewsCategory = @(
    $NewsCategories |
    Where-Object {
        [string]$_.name -match "اخبار\s*فناوری"
    }
) |
Select-Object -First 1

$PreferredNewsMenuText = if ($null -eq $PreferredNewsMenu) {
    "NOT_CONCLUSIVELY_IDENTIFIED"
}
else {
    "$($PreferredNewsMenu.Text) | $($PreferredNewsMenu.Href)"
}

$PreferredNewsCategoryText = if ($null -eq $PreferredNewsCategory) {
    "NOT_CONCLUSIVELY_IDENTIFIED"
}
else {
    (
        "ID=$($PreferredNewsCategory.id)" +
        " | Name=$($PreferredNewsCategory.name)" +
        " | Slug=$($PreferredNewsCategory.slug)" +
        " | Count=$($PreferredNewsCategory.count)" +
        " | Link=$($PreferredNewsCategory.link)"
    )
}

$WorkflowInput = @"
# AmirMotefaker.ir — Tech News Workflow Input Register V5

## Capture status

- Capture method: Offline finalization of archived public HTML and WordPress REST evidence from V1
- Login used: No
- WordPress mutation: No
- Production mutation: No
- Latest public posts sampled: $($LatestPosts.Count)

## Current menu candidate

$PreferredNewsMenuText

## Current category candidate

$PreferredNewsCategoryText

## Other matching navigation entries

$NewsNavigationLines

## Other matching taxonomy entries

$NewsCategoryLines

## Existing public news-like content sample

$NewsPostLines

## Required workflow behavior

1. Search approved primary and secondary public sources every day.
2. Build a candidate pool larger than five items.
3. Cluster duplicate reports about the same event.
4. Require traceable source URLs.
5. Separate reported facts from analysis.
6. Reject unsupported numeric claims.
7. Generate Persian summaries with original wording.
8. Preserve attribution and publication timestamps.
9. Create exactly five publishable candidates only when five items pass the quality gate.
10. Save as WordPress Draft during the initial pilot.
11. Require human approval during the pilot.
12. Publish through a dedicated least-privilege WordPress Application Password only after authorization.
13. Record correction status and source changes.
14. Do not fabricate images, quotes, metrics or an author's opinion.
15. Keep the top-level menu label **اخبار فناوری**.

## V5 publication policy

- Pilot duration: 14 days
- Initial state: Draft only
- Daily target: Up to five qualified items
- Blind auto-publish: Not authorized
- Production credential creation: Not authorized in this capture stage
- Production change authorized: False

## Evidence still required before implementation

- Exact WordPress category and page relationship for اخبار فناوری
- Existing article template and required custom fields
- Approved source registry
- Approved duplicate-detection window
- Approved publishing times
- Legal and copyright policy
- Image sourcing policy
- Human review owner
- WordPress Preview/Staging endpoint
- Rollback and correction procedure
"@

Write-Utf8File `
    -Path $WorkflowInputPath `
    -Content $WorkflowInput

$FinalizationCompletedAt = [DateTimeOffset]::Now

$EvidenceFiles = @(
    $HomepageHtmlPath,
    $AboutHtmlPath,
    $ResumeHtmlPath,
    $PagesJsonPath,
    $CategoriesJsonPath,
    $LatestPostsJsonPath,
    $NavigationTextPath,
    $NavigationJsonPath,
    $PageMatchTextPath,
    $PageMatchJsonPath,
    $ProfileShapeTextPath,
    $ProfileShapeJsonPath,
    $AboutProfileTextPath,
    $AboutProfileJsonPath,
    $ResumeProfileTextPath,
    $ResumeProfileJsonPath,
    $NewsCandidatesTextPath,
    $NewsCandidatesJsonPath,
    $WorkflowInputPath
)

$FingerprintLines = [System.Collections.Generic.List[string]]::new()

foreach ($FilePath in $EvidenceFiles) {
    if (-not (Test-Path -LiteralPath $FilePath -PathType Leaf)) {
        throw "Required evidence file was not created: $FilePath"
    }

    $Hash = (
        Get-FileHash `
            -LiteralPath $FilePath `
            -Algorithm SHA256
    ).Hash

    $Bytes = (
        Get-Item `
            -LiteralPath $FilePath
    ).Length

    $FingerprintLines.Add(
        (
            "SHA256=$Hash" +
            " | Bytes=$Bytes" +
            " | Path=$FilePath"
        )
    )
}

Write-Utf8File `
    -Path $FingerprintPath `
    -Content ($FingerprintLines -join "`n")

if (
    -not [string]::IsNullOrWhiteSpace($PSCommandPath) -and
    (Test-Path -LiteralPath $PSCommandPath -PathType Leaf)
) {
    Copy-Verified `
        -Source $PSCommandPath `
        -Destination (
            Join-Path `
                $ExecutedScriptRoot `
                (Split-Path -Leaf $PSCommandPath)
        )
}

$Classification = if (
    $HomepageResult.StatusCode -eq 200 -and
    $AboutResult.StatusCode -eq 200 -and
    $ResumeResult.StatusCode -eq 200 -and
    $Pages.Count -ge 2 -and
    $Categories.Count -ge 1 -and
    $LatestPosts.Count -ge 1 -and
    $AboutResolution.Pass -and
    $ResumeResolution.Pass -and
    $AboutProfileResolution.Pass -and
    $ResumeProfileResolution.Pass -and
    $AboutProfile.ContentWordCount -gt 0 -and
    $ResumeProfile.ContentWordCount -gt 0
) {
    "PASS_ARCHIVED_PUBLIC_PROFILE_AND_NEWS_BASELINE_FINALIZED"
}
else {
    "HOLD_PUBLIC_PROFILE_OR_NEWS_BASELINE_INCOMPLETE"
}

$ReadyForProfileAnalysis = (
    $Classification -eq
    "PASS_ARCHIVED_PUBLIC_PROFILE_AND_NEWS_BASELINE_FINALIZED"
)

$Decision = if ($ReadyForProfileAnalysis) {
    "AMIRMOTEFAKER-IR-PERSONAL-PROFILE-NEWS-BASELINE-V5-PASS-READY-FOR-MASTER-SPECIFICATION-V2"
}
else {
    "AMIRMOTEFAKER-IR-PERSONAL-PROFILE-NEWS-BASELINE-V5-HOLD"
}

Write-Utf8File -Path $PostflightPath -Content @"
Finalization started:
$($FinalizationStartedAt.ToString("o"))

Finalization completed:
$($FinalizationCompletedAt.ToString("o"))

Homepage HTTP:
$($HomepageResult.StatusCode)

About HTTP:
$($AboutResult.StatusCode)

Resume HTTP:
$($ResumeResult.StatusCode)

Public pages:
$($Pages.Count)

Public categories:
$($Categories.Count)

Latest public posts sampled:
$($LatestPosts.Count)

Navigation links:
$($NavigationRows.Count)

About page resolution:
$($AboutResolution.Pass)

About selected page ID:
$($AboutResolution.SelectedId)

About selected score:
$($AboutResolution.SelectedScore)

Resume page resolution:
$($ResumeResolution.Pass)

Resume selected page ID:
$($ResumeResolution.SelectedId)

Resume selected score:
$($ResumeResolution.SelectedScore)

About profile output count:
$($AboutProfileResolution.OutputCount)

About profile candidate count:
$($AboutProfileResolution.CandidateCount)

About profile noise count:
$($AboutProfileResolution.NoiseCount)

About raw resolution output count:
$($AboutProfileResolution.RawResolutionOutputCount)

About NoiseDetails property present:
$($AboutProfileResolution.NoiseDetailsWasPresent)

Resume profile output count:
$($ResumeProfileResolution.OutputCount)

Resume profile candidate count:
$($ResumeProfileResolution.CandidateCount)

Resume profile noise count:
$($ResumeProfileResolution.NoiseCount)

Resume raw resolution output count:
$($ResumeProfileResolution.RawResolutionOutputCount)

Resume NoiseDetails property present:
$($ResumeProfileResolution.NoiseDetailsWasPresent)

News navigation candidates:
$($NewsNavigation.Count)

News taxonomy candidates:
$($NewsCategories.Count)

News-like post candidates:
$($NewsPostCandidates.Count)

About content words:
$($AboutProfile.ContentWordCount)

Resume content words:
$($ResumeProfile.ContentWordCount)

Navigation nested arrays:
0

Network request performed:
False

Login performed:
False

Credential access:
False

Mutation performed:
False
"@

$Summary = @"
AMIRMOTEFAKER.IR PERSONAL PROFILE AND TECH-NEWS BASELINE V5

Domain:
$Origin

Homepage:
HTTP $($HomepageResult.StatusCode)

About page:
HTTP $($AboutResult.StatusCode)
ID $($AboutProfile.Id)
Title $($AboutProfile.Title)
Words $($AboutProfile.ContentWordCount)
Headings $($AboutProfile.HeadingCount)
Images $($AboutProfile.ImagesCount)
Images missing alt $($AboutProfile.ImagesMissingAltCount)

Resume page:
HTTP $($ResumeResult.StatusCode)
ID $($ResumeProfile.Id)
Title $($ResumeProfile.Title)
Words $($ResumeProfile.ContentWordCount)
Headings $($ResumeProfile.HeadingCount)
Images $($ResumeProfile.ImagesCount)
Images missing alt $($ResumeProfile.ImagesMissingAltCount)

WordPress page resolution:
About Pass $($AboutResolution.Pass)
About ID $($AboutResolution.SelectedId)
About Score $($AboutResolution.SelectedScore)
About Reasons $(@($AboutResolution.SelectedReasons) -join ',')

Resume Pass $($ResumeResolution.Pass)
Resume ID $($ResumeResolution.SelectedId)
Resume Score $($ResumeResolution.SelectedScore)
Resume Reasons $(@($ResumeResolution.SelectedReasons) -join ',')

Profile object validation:
About Pass $($AboutProfileResolution.Pass)
About Outputs $($AboutProfileResolution.OutputCount)
About Candidates $($AboutProfileResolution.CandidateCount)
About Noise $($AboutProfileResolution.NoiseCount)
About Raw Resolution Outputs $($AboutProfileResolution.RawResolutionOutputCount)
About NoiseDetails Present $($AboutProfileResolution.NoiseDetailsWasPresent)

Resume Pass $($ResumeProfileResolution.Pass)
Resume Outputs $($ResumeProfileResolution.OutputCount)
Resume Candidates $($ResumeProfileResolution.CandidateCount)
Resume Noise $($ResumeProfileResolution.NoiseCount)
Resume Raw Resolution Outputs $($ResumeProfileResolution.RawResolutionOutputCount)
Resume NoiseDetails Present $($ResumeProfileResolution.NoiseDetailsWasPresent)

Public WordPress inventory:
Pages $($Pages.Count)
Categories $($Categories.Count)
Latest posts sampled $($LatestPosts.Count)

Navigation links captured:
$($NavigationRows.Count)

Tech-news navigation candidates:
$($NewsNavigation.Count)

Tech-news taxonomy candidates:
$($NewsCategories.Count)

News-like post candidates in latest sample:
$($NewsPostCandidates.Count)

Prior failures resolved:
- Nested navigation array flattened before Text/Href access
- Percent-encoded and Unicode Persian WordPress URLs, slugs and titles normalized
- About and Resume pages selected by deterministic scoring with ambiguity rejection
- About and Resume profile outputs validated against a required property schema
- Resolution pipeline outputs filtered to exactly one required-schema object
- Optional NoiseDetails diagnostics normalized to an empty array when absent
- ExternalLinks, Headings and Images properties always materialized as arrays

Network request performed by V5:
False

Preferred اخبار فناوری menu:
$PreferredNewsMenuText

Preferred اخبار فناوری category:
$PreferredNewsCategoryText

Final classification:
$Classification

Ready for Master Specification V2:
$ReadyForProfileAnalysis

Operations performed:
- Verified and read the archived public homepage HTML from V1
- Verified and read the archived public About page from V1
- Verified and read the archived public Resume page from V1
- Verified and read the archived public WordPress page inventory from V1
- Verified and read the archived public WordPress category inventory from V1
- Verified and read the archived latest 100 public posts from V1
- Extracted current navigation links
- Normalized percent-encoded and Unicode Persian page identifiers
- Resolved About and Resume pages with deterministic scoring and ambiguity rejection
- Archived the complete page-match candidate table
- Built schema-stable About and Resume profile objects
- Normalized the profile-resolution object before reading optional diagnostics
- Validated each profile output and archived its property shape
- Materialized empty and non-empty ExternalLinks, Headings and Images collections consistently
- Extracted About and Resume content, headings, images and external links
- Identified current اخبار فناوری navigation and taxonomy candidates
- Built the initial daily news workflow input register
- Fingerprinted the evidence
- Archived the executed script

Operations not performed:
- No WordPress or hosting login
- No LinkedIn login or automated LinkedIn extraction
- No credential, secret or private-content access
- No WordPress, content, theme, plugin or database change
- No DNS, SSL, registrar or nameserver change
- No deployment or rollback
- No scheduled automation creation
- No tag or GitHub Release

Production change authorized:
False

Decision:
$Decision
"@

Write-Utf8File `
    -Path $SummaryPath `
    -Content $Summary

Write-Host "`n=== AmirMotefaker.ir profile-news baseline summary ===" -ForegroundColor Cyan
Get-Content `
    -LiteralPath $SummaryPath `
    -Encoding UTF8

Write-Host "`n[OK] Offline personal profile and tech-news baseline finalization completed." -ForegroundColor Green
Write-Host "Evidence: $EvidenceRoot"
