# Abdulahad Mahmudjonov - Portfolio Backend Runner (PowerShell)
$Host.UI.RawUI.WindowTitle = "Abdulahad Mahmudjonov - Java Backend Server"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Abdulahad Mahmudjonov - Portfolio Backend Server" -ForegroundColor Green
Write-Host "  Java 21 REST API & Static Web Server" -ForegroundColor Yellow
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

$javaPath = "C:\Program Files\Java\jdk-21.0.10\bin\java.exe"
$javacPath = "C:\Program Files\Java\jdk-21.0.10\bin\javac.exe"

if (-not (Test-Path $javaPath)) { $javaPath = "java" }
if (-not (Test-Path $javacPath)) { $javacPath = "javac" }

Write-Host "[1/2] Kompilyatsiya qilinmoqda (Compiling)..." -ForegroundColor White
if (-not (Test-Path "backend\bin")) {
    New-Item -ItemType Directory -Path "backend\bin" -Force | Out-Null
}

& $javacPath -encoding UTF-8 -d backend\bin backend\src\com\abdulahad\portfolio\BackendServer.java

if ($LASTEXITCODE -ne 0) {
    Write-Host "[XATO] Kompilyatsiya muvaffaqiyatsiz bo'ldi." -ForegroundColor Red
    Read-Host "Davom etish uchun Enter bosing..."
    exit $LASTEXITCODE
}

Write-Host "[2/2] Server ishga tushirilmoqda (Starting server on port 8080)..." -ForegroundColor Green
Write-Host "PC brauzerida:      http://localhost:8080" -ForegroundColor Cyan
Write-Host "Telifonda ochish:   Bir xil Wi-Fi tarmog'ida server chiqargan IP orqali ochiladi" -ForegroundColor Yellow
Write-Host ""

& $javaPath -cp backend\bin com.abdulahad.portfolio.BackendServer 8080
