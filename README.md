# DAZ Media & Marketing

Eine portable Website für die Social Media Marketing Agentur „DAZ Media & Marketing“. Die Seite ist mit Vite, TypeScript und klassischem CSS gebaut, damit du volle Kontrolle über Inhalt, Gestaltung und Hosting behältst.

## Voraussetzungen

- Node.js 20 LTS oder neuer
- pnpm 11 oder ein Hoster, der aus `pnpm-lock.yaml` installiert

## Lokale Entwicklung

```bash
pnpm install
pnpm dev
```

Vite zeigt anschließend eine lokale Adresse an, meistens `http://localhost:5173`.

## Produktionsversion

```bash
pnpm build
pnpm preview
```

Die fertige Website wird in `dist/` erzeugt.

## Hoster-Einstellungen

Für Netlify, Vercel, Cloudflare Pages, GitHub Pages und viele andere statische Hoster:

- Installationsbefehl: `pnpm install`
- Build-Befehl: `pnpm build`
- Veröffentlichungsordner: `dist`
- Node-Version: `20`

Wenn ein Hoster nur manuelle Uploads unterstützt, führe lokal `pnpm build` aus und lade den Inhalt von `dist/` hoch.

## Projektstruktur

```text
.
├── index.html
├── package.json
├── public
│   └── assets
│       └── daz-marketing-workspace.png
├── src
│   ├── main.ts
│   └── styles.css
└── tsconfig.json
```

## Inhalte anpassen

- Seiten, Texte und Navigation liegen in `src/main.ts`.
- Farben, Layouts und Responsive Design liegen in `src/styles.css`.
- Metadaten liegen in `index.html`.
- Das Hero-Bild liegt in `public/assets/`.
- Impressum und Datenschutz enthalten Platzhalter und müssen vor Veröffentlichung rechtlich vervollständigt werden.
