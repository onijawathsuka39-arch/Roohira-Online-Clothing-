@echo off
setlocal enabledelayedexpansion

echo ========================================
echo   ROOHIRA GITHUB AUTO-UPDATER
echo ========================================
echo.

:: Check if Git is installed and accessible
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not recognized. 
    echo Please restart your computer or VS Code if you just installed Git.
    echo.
    pause
    exit /b
)

:: Check if this is a Git repository
if not exist ".git" (
    echo [INFO] Initializing new Git repository...
    git init
    git remote add origin https://github.com/onijawathsuka39-arch/Roohira-Online-Clothing-.git
    echo.
)

:: Ensure the remote is correct
git remote set-url origin https://github.com/onijawathsuka39-arch/Roohira-Online-Clothing-.git

echo [1/3] Adding all new items and changes...
git add .

echo.
echo [2/3] Saving changes...
git commit -m "Auto Update: Products and Invoicing Logic"

echo.
echo [3/3] Uploading to GitHub (Main branch)...
echo (You might see a login popup, please sign in if asked)
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [RETRY] Trying 'master' branch instead of 'main'...
    git push -u origin master
)

echo.
echo ========================================
echo   UPLOAD COMPLETE! Your site is updated.
echo ========================================
echo.
pause
