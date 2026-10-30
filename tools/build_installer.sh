#!/usr/bin/env bash
# Builds the public Windows downloads (an installer and a portable zip) from dist/site.
# Runs electron-builder on the Windows side (through WSL) so the .exe gets its icon and version info.
#   tools/build_installer.sh       -> out/installer/Cage-Career-3D-Setup-<version>.exe and -portable.zip
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WINTMP="$(wslpath "$(cmd.exe /c 'echo %TEMP%' 2>/dev/null | tr -d '\r')")/cc3d-build"
mkdir -p "$WINTMP"
rm -rf "$WINTMP/site" "$WINTMP/release"
cp "$ROOT/desktop/main.js" "$ROOT/desktop/package.json" "$WINTMP/"
cp -r "$ROOT/dist/site" "$WINTMP/site"
WIN="$(wslpath -w "$WINTMP")"
powershell.exe -NoProfile -Command "Set-Location '$WIN'; npm.cmd install --no-audit --no-fund; if (\$LASTEXITCODE) { exit 1 }; npx.cmd electron-builder --win --x64 --publish never"
mkdir -p "$ROOT/out/installer"
cp "$WINTMP"/release/Cage-Career-3D-* "$ROOT/out/installer/"
ls -la "$ROOT/out/installer"
