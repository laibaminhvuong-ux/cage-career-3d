#!/usr/bin/env bash
# Builds the Windows desktop app from the built website (run tools/build_site.py first).
#   tools/build_desktop.sh [output folder]     (default: out/desktop)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$ROOT/out/desktop}"
cd "$ROOT/desktop"
npm install --no-audit --no-fund
rm -rf site
cp -r "$ROOT/dist/site" site
npx @electron/packager . "Cage Career 3D" --platform=win32 --arch=x64 --out "$OUT" --overwrite --asar \
  --app-copyright="Cage Career 3D" --ignore='^/node_modules' --ignore='^/package-lock.json'
echo "Built: $OUT/Cage Career 3D-win32-x64/Cage Career 3D.exe"
