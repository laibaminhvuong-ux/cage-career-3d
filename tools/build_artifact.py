#!/usr/bin/env python3
"""Builds dist/cage-career-3d.html: the whole game (three.js included) as one self-contained page
for publishing as a claude.ai artifact. Needs esbuild: set ESBUILD=/path/to/esbuild or have it on PATH."""
import os, re, subprocess, sys

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
web = os.path.join(root, "web")
dist = os.path.join(root, "dist")
os.makedirs(dist, exist_ok=True)
esbuild = os.environ.get("ESBUILD", "esbuild")

bundle = subprocess.run(
    [esbuild, os.path.join(web, "app.js"), "--bundle", "--format=esm", "--minify-syntax", "--minify-whitespace",
     "--target=es2020", "--legal-comments=none"],
    check=True, capture_output=True, text=True).stdout
bundle = bundle.replace("</script", "<\\/script")

html = open(os.path.join(web, "index.html"), encoding="utf-8").read()
body = html[html.index("<body>") + len("<body>"):html.index('<script type="module"')]
css = open(os.path.join(web, "style.css"), encoding="utf-8").read()

page = (
    "<title>Cage Career 3D</title>\n"
    "<style>\n" + css + "\n</style>\n"
    + body.strip() + "\n"
    "<script type=\"module\">\n" + bundle + "\n</script>\n"
)
out = os.path.join(dist, "cage-career-3d.html")
open(out, "w", encoding="utf-8").write(page)
print(out, f"{len(page.encode()) / 1024:.0f} KB")
