Set-Location ".."
Invoke-Expression "npm run eslint:fix"
Set-Location ".\scripts"
Read-Host -Prompt "Press Enter to exit"
