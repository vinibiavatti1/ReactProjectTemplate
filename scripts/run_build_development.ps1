Set-Location ".."
Invoke-Expression "npm run build:development"
Set-Location ".\scripts"
Read-Host -Prompt "Press Enter to exit"
