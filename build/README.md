# Build — Tailwind lokal erzeugen

Die Seite lädt kein Tailwind-CDN mehr. `tailwind.css` im Repo-Root ist ein einmalig
gebautes, gepurgtes Stylesheet (~20 KB statt ~400 KB Runtime-JS im Browser).

**Nach jeder Änderung an den HTML-Dateien neu bauen** — sonst fehlen neu verwendete
Utility-Klassen im CSS und die Stelle bleibt ungestylt:

```bash
cd build
npx tailwindcss@3 -c tailwind.config.js -i input.css -o ../tailwind.css --minify
```

`tailwind.config.js` spiegelt exakt die frühere Inline-Config (Farben `ink`/`paper`/
`mute`/`accent`/`accent2`/`accentDeep`/`navy`/`line`, Fonts sans/mono/display).
`content` zeigt auf die drei HTML-Dateien — kommt eine neue Seite dazu, dort eintragen.
