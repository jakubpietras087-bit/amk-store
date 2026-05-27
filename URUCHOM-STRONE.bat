@echo off
chcp 65001 >nul
cd /d "%~dp0"
title AMK — Sklep

echo.
echo  ========================================
echo    AMK — Uruchamianie sklepu
echo  ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo  [BLAD] Node.js nie jest zainstalowany.
    echo  Pobierz i zainstaluj: https://nodejs.org
    echo.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo  Instalacja bibliotek (pierwsze uruchomienie)...
    echo  To moze potrwac kilka minut.
    echo.
    call npm install --no-fund --no-audit
    if errorlevel 1 (
        echo.
        echo  [BLAD] Instalacja nie powiodla sie.
        echo  Jesli widzisz blad SSL/certyfikat — w folderze jest plik .npmrc
        echo  (strict-ssl=false). Sprobuj ponownie lub sprawdz polaczenie z internetem.
        pause
        exit /b 1
    )
    echo.
)

echo  Start serwera...
echo  Strona otworzy sie w przegladarce za chwile.
echo  Aby zatrzymac sklep — zamknij to okno lub wcisnij Ctrl+C.
echo.

start "" cmd /c "timeout /t 6 /nobreak >nul && start http://localhost:3000"

call npm run dev

pause
