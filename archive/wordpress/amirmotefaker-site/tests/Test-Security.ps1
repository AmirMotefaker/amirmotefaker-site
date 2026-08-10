[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$WorkspaceRoot
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

if (Test-Path -LiteralPath (Join-Path $WorkspaceRoot ".git")) {
    throw "Git metadata exists in the offline workspace."
}

$CredentialEnvironmentNames = @(
    "GITHUB_TOKEN",
    "GH_TOKEN",
    "OPENAI_API_KEY",
    "ANTHROPIC_API_KEY",
    "AZURE_CLIENT_SECRET",
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "DATABASE_URL"
)

$PresentCredentialEnvironmentNames = @(
    foreach ($Name in $CredentialEnvironmentNames) {
        $Value = [Environment]::GetEnvironmentVariable($Name)

        if (-not [string]::IsNullOrWhiteSpace($Value)) {
            $Name
        }
    }
)

if (@($PresentCredentialEnvironmentNames).Count -gt 0) {
    throw (
        "Credential-like environment variables reached the isolated test: " +
        ($PresentCredentialEnvironmentNames -join ", ")
    )
}

$RuntimeRoots = @(
    "assets",
    "inc",
    "parts",
    "patterns",
    "templates"
)

$RuntimeFiles = @(
    foreach ($RuntimeRoot in $RuntimeRoots) {
        Get-ChildItem `
            -LiteralPath (Join-Path $WorkspaceRoot $RuntimeRoot) `
            -Recurse `
            -File
    }

    Get-Item `
        -LiteralPath (Join-Path $WorkspaceRoot "functions.php")

    Get-Item `
        -LiteralPath (Join-Path $WorkspaceRoot "style.css")

    Get-Item `
        -LiteralPath (Join-Path $WorkspaceRoot "theme.json")
)

$Findings = [System.Collections.Generic.List[string]]::new()

foreach ($RuntimeFile in $RuntimeFiles) {
    if ($RuntimeFile.Extension -eq ".png") {
        continue
    }

    $Content = Get-Content `
        -LiteralPath $RuntimeFile.FullName `
        -Raw `
        -Encoding UTF8

    foreach ($Rule in @(
        [PSCustomObject]@{ Name = "PRIVATE_KEY"; Pattern = "BEGIN [A-Z ]*PRIVATE KEY" },
        [PSCustomObject]@{ Name = "TOKEN_ASSIGNMENT"; Pattern = '(?i)(api[_-]?key|access[_-]?token|client[_-]?secret|password)\s*[:=]\s*["''][^"'']+["'']' },
        [PSCustomObject]@{ Name = "PRIVATE_IPV4"; Pattern = "(?<!\d)(10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})(?!\d)" },
        [PSCustomObject]@{ Name = "DYNAMIC_EVALUATION"; Pattern = "(?i)\beval\s*\(|Invoke-Expression" },
        [PSCustomObject]@{ Name = "NETWORK_RUNTIME"; Pattern = "(?i)\bfetch\s*\(|XMLHttpRequest|Invoke-WebRequest|Invoke-RestMethod" },
        [PSCustomObject]@{ Name = "INSECURE_HTTP"; Pattern = "(?i)http://" }
    )) {
        if ($Content -match $Rule.Pattern) {
            $RelativePath = (
                [System.IO.Path]::GetRelativePath(
                    $WorkspaceRoot,
                    $RuntimeFile.FullName
                ) -replace "\\", "/"
            )

            $Findings.Add(
                "$($Rule.Name):$RelativePath"
            ) | Out-Null
        }
    }
}

if (@($Findings).Count -gt 0) {
    throw (
        "Security findings: " +
        ($Findings -join ", ")
    )
}

$NewsWorkflow = Get-Content `
    -LiteralPath (Join-Path $WorkspaceRoot "docs/NEWS-WORKFLOW.md") `
    -Raw `
    -Encoding UTF8

if (-not $NewsWorkflow.Contains("Draft-only")) {
    throw "Draft-only news workflow boundary was not found."
}

if (-not $NewsWorkflow.Contains("human review")) {
    throw "Human review news workflow boundary was not found."
}

Write-Output "Credential-like environment variables: 0"
Write-Output "Runtime credential findings: 0"
Write-Output "Private endpoint findings: 0"
Write-Output "Dynamic evaluation findings: 0"
Write-Output "Network runtime findings: 0"
Write-Output "Draft-only workflow: PASS"
Write-Output "PASS_AMIRMOTEFAKER_IR_FOUNDATION_SECURITY"
