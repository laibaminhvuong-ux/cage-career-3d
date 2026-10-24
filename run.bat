@echo off
rem Compile and start Cage Career 3D, then open http://localhost:8080
cd /d "%~dp0"
if not exist out mkdir out
javac -d out src\mma\*.java || exit /b 1
java -cp out mma.Main 8080 web
