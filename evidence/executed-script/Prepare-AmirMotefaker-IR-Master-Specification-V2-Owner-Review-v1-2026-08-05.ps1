[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("PREPARE_AMIRMOTEFAKER_IR_MASTER_SPECIFICATION_V2_OWNER_REVIEW_V1")]
    [string]$ReviewDeclaration,

    [string]$BundlePath = "C:\Projects-Admin\Inputs\AmirMotefaker-IR-Master-Specification-V2-Bundle.zip"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$ExpectedBundleHash = "ACB7EAAD620F04B1EB7345C5AC2CD690B04EE669BD0D2971AA6556FAD574E256"

$ExpectedFiles = [ordered]@{
    "00-AmirMotefaker-IR-Master-Specification-V2.md" = "F924359F9A4E7FFD929AEAFB93FC3A351FB859DDC4EEF82E0FB08388BEB4CCE6"
    "01-AmirMotefaker-IR-Daily-Tech-News-Workflow-V1.md" = "10406794792C68F55B90E02A7AFBC6A821E202BF07760BD5E740D8AEFE1847FB"
    "02-AmirMotefaker-IR-Decision-Register-V1.md" = "73E50FE00844839925B7EB53EC0F89B46E6F7727B4E8D14CBBEF8BD942C8A34F"
    "03-AmirMotefaker-IR-Product-Asset-Matrix-V1.csv" = "C2A67FDE55D639739DCEC8C95F590613EF972B29F28B190312894146E2A55E9F"
    "04-AmirMotefaker-IR-Source-Review-Notes-V1.md" = "8E193E718A20D9ADB4C3AB58323FB9048A19AE9BD4CF86C6BCC63B1117E889E2"
    "MANIFEST.txt" = "683E0887A05E61FE1781EB22ADA45F9C9E5FA84EBD417E33E71CB55BECE9FC6B"
}

$EvidenceRoot = "C:\Projects\AmirMotefaker-Audits\master-specification\2026-08-05-v2"
$SpecRoot = Join-Path $EvidenceRoot "specification"
$ReviewRoot = Join-Path $EvidenceRoot "owner-review"
$ExecutedScriptRoot = Join-Path $EvidenceRoot "executed-script"
$TempRoot = Join-Path $EvidenceRoot "_extracting"

$SummaryPath = Join-Path $EvidenceRoot "00-summary.txt"
$VerificationPath = Join-Path $EvidenceRoot "01-bundle-verification.txt"
$ResponseTemplatePath = Join-Path $ReviewRoot "01-owner-decision-response-template.md"
$ReviewChecklistPath = Join-Path $ReviewRoot "02-owner-review-checklist.md"
$FingerprintsPath = Join-Path $EvidenceRoot "03-evidence-fingerprints.txt"
$PostflightPath = Join-Path $EvidenceRoot "04-postflight.txt"

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

Write-Host "`n=== AmirMotefaker.ir Master Specification V2 owner review preparation ===" -ForegroundColor Cyan

if (
    $ReviewDeclaration -ne
    "PREPARE_AMIRMOTEFAKER_IR_MASTER_SPECIFICATION_V2_OWNER_REVIEW_V1"
) {
    throw "Required owner-review declaration was not supplied."
}

$StartedAt = [DateTimeOffset]::Now

if (-not (Test-Path -LiteralPath $BundlePath -PathType Leaf)) {
    throw "Master Specification bundle was not found: $BundlePath"
}

$ActualBundleHash = (
    Get-FileHash `
        -LiteralPath $BundlePath `
        -Algorithm SHA256
).Hash

if ($ActualBundleHash -ne $ExpectedBundleHash) {
    throw (
        "Master Specification bundle SHA256 failed. " +
        "Expected=$ExpectedBundleHash; Actual=$ActualBundleHash"
    )
}

Write-Host "[OK] Bundle SHA256 passed." -ForegroundColor Green

New-Item -ItemType Directory -Path $EvidenceRoot -Force | Out-Null
New-Item -ItemType Directory -Path $ReviewRoot -Force | Out-Null

foreach ($Path in @(
    $TempRoot,
    $SpecRoot
)) {
    if (Test-Path -LiteralPath $Path) {
        Remove-Item `
            -LiteralPath $Path `
            -Recurse `
            -Force
    }
}

New-Item -ItemType Directory -Path $TempRoot -Force | Out-Null

Expand-Archive `
    -LiteralPath $BundlePath `
    -DestinationPath $TempRoot `
    -Force

$VerificationLines = [System.Collections.Generic.List[string]]::new()

foreach ($Entry in $ExpectedFiles.GetEnumerator()) {
    $FileName = [string]$Entry.Key
    $ExpectedHash = [string]$Entry.Value
    $ExtractedPath = Join-Path $TempRoot $FileName

    if (-not (Test-Path -LiteralPath $ExtractedPath -PathType Leaf)) {
        throw "Required bundle file was not extracted: $FileName"
    }

    $ActualHash = (
        Get-FileHash `
            -LiteralPath $ExtractedPath `
            -Algorithm SHA256
    ).Hash

    if ($ActualHash -ne $ExpectedHash) {
        throw (
            "Extracted file SHA256 failed: $FileName; " +
            "Expected=$ExpectedHash; Actual=$ActualHash"
        )
    }

    $Bytes = (
        Get-Item `
            -LiteralPath $ExtractedPath
    ).Length

    $VerificationLines.Add(
        (
            "PASS" +
            " | SHA256=$ActualHash" +
            " | Bytes=$Bytes" +
            " | File=$FileName"
        )
    )
}

Move-Item `
    -LiteralPath $TempRoot `
    -Destination $SpecRoot `
    -Force

Write-Utf8File `
    -Path $VerificationPath `
    -Content ($VerificationLines -join "`n")

$MasterSpecPath = Join-Path $SpecRoot "00-AmirMotefaker-IR-Master-Specification-V2.md"
$NewsWorkflowPath = Join-Path $SpecRoot "01-AmirMotefaker-IR-Daily-Tech-News-Workflow-V1.md"
$DecisionRegisterPath = Join-Path $SpecRoot "02-AmirMotefaker-IR-Decision-Register-V1.md"
$AssetMatrixPath = Join-Path $SpecRoot "03-AmirMotefaker-IR-Product-Asset-Matrix-V1.csv"

$MasterSpec = Get-Content `
    -LiteralPath $MasterSpecPath `
    -Raw `
    -Encoding UTF8

foreach ($Marker in @(
    "DRAFT_MASTER_SPECIFICATION_V2_GENERATED",
    "Ready for owner review:",
    "True",
    "Ready for implementation:",
    "False",
    "Production change authorized:",
    "False",
    "اخبار فناوری",
    "Modern Native WordPress Architecture",
    "Dark Founder Technology System"
)) {
    if (-not $MasterSpec.Contains($Marker)) {
        throw "Required Master Specification marker was not found: $Marker"
    }
}

$ResponseTemplate = @'
# AmirMotefaker.ir — پاسخ مالک به Master Specification V2

## نحوه استفاده

برای هر تصمیم، یکی از این مقادیر را جایگزین کنید:

```text
APPROVE
CHANGE: توضیح دقیق
HOLD: دلیل
```

## تأیید کلی

```text
Master Specification V2:
[APPROVE / CHANGE / HOLD]
```

## تصمیم‌های اصلی

### O-01 — معماری نسخه اول

پیشنهاد:

```text
Modern Native WordPress Block Theme
```

تصمیم مالک:

```text
APPROVE
```

### O-02 — بررسی Headless / Next.js

پیشنهاد:

```text
فقط Feasibility Spike؛ معماری نسخه اول نباشد مگر تمام گیت‌ها PASS شوند.
```

تصمیم مالک:

```text
APPROVE
```

### O-03 — ایمیل عمومی سایت

پیشنهاد:

```text
یک ایمیل رسمی روی دامنه amirmotefaker.ir
```

تصمیم مالک:

```text
CHANGE: آدرس ایمیل را وارد کنید
```

### O-04 — شماره تماس عمومی

پیشنهاد:

```text
تا تأیید صریح مالک، در سایت عمومی نمایش داده نشود.
```

تصمیم مالک:

```text
APPROVE
```

### O-05 — ابزار رزرو جلسه

پیشنهاد:

```text
انتخاب پس از Privacy و Data Residency Review
```

تصمیم مالک:

```text
APPROVE
```

### O-06 — CRM

پیشنهاد:

```text
فرم‌ها با Interface مستقل از Provider پیاده‌سازی شوند.
```

تصمیم مالک:

```text
APPROVE
```

### O-07 — Analytics

پیشنهاد:

```text
انتخاب Provider پس از Privacy Review؛ Event Contract مستقل باقی بماند.
```

تصمیم مالک:

```text
APPROVE
```

### O-08 — عبارت سابقه

پیشنهاد:

```text
بیش از سه دهه همراه فناوری
```

تصمیم مالک:

```text
APPROVE
```

### O-09 — ادعاهای عددی رزومه

پیشنهاد:

```text
فقط با Evidence State معتبر منتشر شوند.
```

تصمیم مالک:

```text
APPROVE
```

### O-10 — Category اخبار فناوری

پیشنهاد:

```text
پس از Taxonomy Audit قطعی شود؛ مسیر /بلاگ/ فعلاً حفظ شود.
```

تصمیم مالک:

```text
APPROVE
```

### O-11 — زمان Workflow اخبار

Baseline فعلی:

```text
حدود 08:00 تا 08:30
```

تصمیم مالک:

```text
CHANGE: ساعت موردنظر را وارد کنید
```

### O-12 — انتشار خودکار اخبار

پیشنهاد:

```text
Pilot چهارده‌روزه Draft-only؛ سپس فقط خبرهای Low-risk با Quality Gate و مجوز جداگانه.
```

تصمیم مالک:

```text
APPROVE
```

### O-13 — نسخه انگلیسی

پیشنهاد:

```text
زیرساخت i18n در V1؛ محتوای کامل انگلیسی در V2
```

تصمیم مالک:

```text
APPROVE
```

### O-14 — Newsletter

پیشنهاد:

```text
Provider بعد از Privacy Review انتخاب شود.
```

تصمیم مالک:

```text
APPROVE
```

### O-15 — محصولات Tier 2

پیشنهاد:

```text
فقط پس از Asset و Evidence Review منتشر شوند.
```

تصمیم مالک:

```text
APPROVE
```

## مرز انتشار

```text
تغییر Production در این مرحله:
NOT AUTHORIZED
```

## عبارت نهایی تأیید

پس از تکمیل:

```text
Master Specification V2 و تصمیم‌های مالک تأیید است.
```
'@

Write-Utf8File `
    -Path $ResponseTemplatePath `
    -Content $ResponseTemplate

$ReviewChecklist = @'
# AmirMotefaker.ir — Owner Review Checklist V1

## بررسی جایگاه و محتوا

- [ ] پیام مرکزی دقیق است.
- [ ] معرفی حرفه‌ای با واقعیت مسیر امیر هماهنگ است.
- [ ] عبارت سابقه مورد تأیید است.
- [ ] ترتیب محصولات درست است.
- [ ] وضعیت LinkResan، Farsi Smart Assistant و Ava دقیق است.
- [ ] ادعای عددی بدون Evidence وجود ندارد.
- [ ] ساختار About مناسب است.
- [ ] سیاست پاک‌سازی رزومه مناسب است.

## بررسی طراحی

- [ ] Dark Mode پیش‌فرض مناسب است.
- [ ] Light Mode کامل لازم است.
- [ ] نسبت سبز و بنفش خسته‌کننده نیست.
- [ ] پالایش لوگوی فعلی مورد تأیید است.
- [ ] عکس واقعی امیر در Hero استفاده شود.
- [ ] هر محصول تصویر و لوگوی مستقل داشته باشد.
- [ ] طراحی اخبار برای مطالعه روزانه مناسب است.

## بررسی قابلیت‌های کسب‌وکار

- [ ] درخواست همکاری
- [ ] رزرو جلسه
- [ ] دانلود رزومه
- [ ] CRM
- [ ] Analytics
- [ ] Newsletter
- [ ] اخبار فناوری
- [ ] Case Study

## بررسی فنی

- [ ] WordPress Block Theme برای V1
- [ ] Headless فقط با Feasibility Spike
- [ ] Staging و Preview اجباری
- [ ] Git و PR اجباری
- [ ] Product Test اجباری
- [ ] انتشار با Exact SHA
- [ ] Rollback و Observation
- [ ] Tag و GitHub Release

## وضعیت فعلی

```text
Ready for owner decision review: True
Ready for implementation: False
Ready for Production: False
Production change authorized: False
```
'@

Write-Utf8File `
    -Path $ReviewChecklistPath `
    -Content $ReviewChecklist

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

$FingerprintFiles = @(
    $MasterSpecPath,
    $NewsWorkflowPath,
    $DecisionRegisterPath,
    $AssetMatrixPath,
    $ResponseTemplatePath,
    $ReviewChecklistPath,
    $VerificationPath
)

$FingerprintLines = [System.Collections.Generic.List[string]]::new()

foreach ($FilePath in $FingerprintFiles) {
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
    -Path $FingerprintsPath `
    -Content ($FingerprintLines -join "`n")

$CompletedAt = [DateTimeOffset]::Now

Write-Utf8File -Path $PostflightPath -Content @"
Started:
$($StartedAt.ToString("o"))

Completed:
$($CompletedAt.ToString("o"))

Bundle SHA256:
$ActualBundleHash

Expected files:
$($ExpectedFiles.Count)

Verified files:
$($VerificationLines.Count)

Owner response template created:
True

Owner checklist created:
True

Network request performed:
False

Production mutation performed:
False

WordPress mutation performed:
False

Deployment performed:
False
"@

$Summary = @"
AMIRMOTEFAKER.IR MASTER SPECIFICATION V2 OWNER REVIEW V1

Bundle:
$BundlePath

Bundle SHA256:
$ActualBundleHash

Verified specification files:
$($VerificationLines.Count) / $($ExpectedFiles.Count)

Master Specification:
$MasterSpecPath

Daily Tech News Workflow:
$NewsWorkflowPath

Decision Register:
$DecisionRegisterPath

Product Asset Matrix:
$AssetMatrixPath

Owner response template:
$ResponseTemplatePath

Owner review checklist:
$ReviewChecklistPath

Final classification:
PASS_MASTER_SPECIFICATION_V2_OWNER_REVIEW_PACK_PREPARED

Ready for owner decision review:
True

Ready for implementation:
False

Ready for Production:
False

Operations performed:
- Verified the Master Specification bundle SHA256
- Extracted the bundle into isolated audit evidence
- Verified every required file against its exact SHA256
- Verified Master Specification state and safety markers
- Created an owner decision response template
- Created an owner review checklist
- Fingerprinted the review evidence
- Archived the executed script

Operations not performed:
- No network request
- No WordPress, content, theme, plugin or database change
- No repository mutation
- No deployment or rollback
- No scheduled automation creation
- No tag or GitHub Release

Portfolio release gate:
BLOCKED_UNTIL_LINKRESAN_OBSERVATION_CLOSE

Production change authorized:
False

Decision:
AMIRMOTEFAKER-IR-MASTER-SPECIFICATION-V2-OWNER-REVIEW-V1-PASS-READY-FOR-OWNER-DECISIONS
"@

Write-Utf8File `
    -Path $SummaryPath `
    -Content $Summary

Write-Host "`n=== AmirMotefaker.ir Master Specification owner review summary ===" -ForegroundColor Cyan
Get-Content `
    -LiteralPath $SummaryPath `
    -Encoding UTF8

$CodeCommand = Get-Command `
    -Name "code" `
    -ErrorAction SilentlyContinue

if ($null -ne $CodeCommand) {
    Start-Process `
        -FilePath $CodeCommand.Source `
        -ArgumentList @(
            "--reuse-window",
            $MasterSpecPath,
            $ResponseTemplatePath,
            $ReviewChecklistPath
        )
}
else {
    Start-Process -FilePath $MasterSpecPath
    Start-Process -FilePath $ResponseTemplatePath
}

Write-Host "`n[OK] Owner review pack prepared and opened." -ForegroundColor Green
Write-Host "Evidence: $EvidenceRoot"
