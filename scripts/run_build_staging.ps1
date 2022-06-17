Set-Location ".."
Invoke-Expression "npm run build:staging"
Set-Location ".\scripts"
Read-Host -Prompt "Press Enter to exit"
