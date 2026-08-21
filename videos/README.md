# VSL-Video

`vsl.mp4` ist der Hintergrund-Loop im Fullscreen-Hero (`index.html`, Sektion `#top`).

## Aktueller Stand

Echtes VSL, eingesetzt am 2026-08-21. 32 Sek, 1920×1080, 25 fps, 10,8 MB.
Quelle war `Vodeo_2.mp4` (127 MB, 50 fps) — komprimiert mit:

```bash
ffmpeg -y -i roh.mp4 -vf "fps=25,scale=1920:1080:flags=lanczos" \
       -c:v libx264 -preset slow -crf 24 -maxrate 6500k -bufsize 13000k \
       -profile:v high -level 4.1 -pix_fmt yuv420p \
       -c:a aac -b:a 128k -ac 2 -movflags +faststart videos/vsl.mp4
```

PSNR gegen das Original ~42 dB, visuell nicht unterscheidbar. **Obergrenze ~25 MB**,
sonst liefert GitHub Pages die Datei quälend langsam aus.

Das Poster (`images/vsl-poster.jpg`) ist ein separat geliefertes Thumbnail, **kein**
Frame aus dem Video. Wenn ein neues Video kommt und kein eigenes Thumbnail dabei ist:

```bash
ffmpeg -y -i videos/vsl.mp4 -vf "select=eq(n\,0)" -frames:v 1 -q:v 4 images/vsl-poster.jpg
```

## Verhalten auf der Seite

- Läuft **stumm im Loop** als Hintergrund, sobald die Seite offen ist.
- Klick auf den Play-Knopf: Ton an, Start von vorn, Text blendet weg.
- Klick auf „Ton aus", Escape, Video-Ende oder Wegscrollen: zurück in den stummen Loop.
- Die Laufzeit-Anzeige („VSL ansehen · 32 Sek") liest sich **automatisch** aus der Datei —
  nichts im HTML nachtragen. Der Fließtext daneben („Eine halbe Minute…") ist aber
  von Hand gesetzt: **bei deutlich anderer Videolänge dort mit anpassen** (index.html).
- Bei `prefers-reduced-motion` startet nichts von allein; es steht das Poster.
