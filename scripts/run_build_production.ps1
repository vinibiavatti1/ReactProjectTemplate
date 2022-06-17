Set-Location ".."
Invoke-Expression "npm run build:production"
Set-Location ".\scripts"
Read-Host -Prompt "Press Enter to exit"
