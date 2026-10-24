#!/usr/bin/env bash
# Compile and start Cage Career 3D, then open http://localhost:8080
set -e
cd "$(dirname "$0")"
mkdir -p out
javac -d out src/mma/*.java
java -cp out mma.Main "${1:-8080}" web
