$sourceFolder = "./dist"
$targetFolder = "../dist"

if (Test-Path -Path $targetFolder) {
    Get-ChildItem -Path $targetFolder -Exclude client | Remove-Item -Recurse -Force
} else {
    mkdir $targetFolder
}
Copy-Item -Path $sourceFolder\* -Destination $targetFolder -Recurse  | Out-Null