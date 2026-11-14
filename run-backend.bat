@echo off
chcp 65001 >nul
title Abdulahad Mahmudjonov - Java Backend Server
echo ============================================================
echo   Abdulahad Mahmudjonov - Portfolio Backend Server
echo   Java 21 Virtual Threads REST & Static Web Server
echo ============================================================
echo.

set JAVA_BIN="C:\Program Files\Java\jdk-21.0.10\bin\java.exe"
if not exist %JAVA_BIN% (
    set JAVA_BIN=java
)

set JAVAC_BIN="C:\Program Files\Java\jdk-21.0.10\bin\javac.exe"
if not exist %JAVAC_BIN% (
    set JAVAC_BIN=javac
)

echo [1/2] Kompilyatsiya qilinmoqda (Compiling)...
if not exist "backend\bin" mkdir "backend\bin"
%JAVAC_BIN% -encoding UTF-8 -d backend\bin backend\src\com\abdulahad\portfolio\BackendServer.java

if %ERRORLEVEL% NEQ 0 (
    echo [XATO] Kompilyatsiyada xatolik yuz berdi!
    pause
    exit /b %ERRORLEVEL%
)

echo [2/2] Server ishga tushirilmoqda (Starting server)...
echo.
%JAVA_BIN% -cp backend\bin com.abdulahad.portfolio.BackendServer 8080

pause
