# Patsy Lin — Whimsical Portfolio (Vite + React)

A colorful, whimsical portfolio starter with a living graffiti background, scribble reveal animation, and a cute mascot.

## Quick start

```bash
npm i
npm run dev
```

## Deploy (Vercel)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: init whimsical portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USER/whimsical-portfolio.git
   git push -u origin main
   ```
2. Go to Vercel → New Project → Import your repo → Framework: **Vite** → Build command: `npm run build` → Output: `dist`.

## Files

- `src/components/DesignKit.jsx` — the design system, floating graffiti layer, and mascot.
- `src/App.jsx` — renders the kit. Replace later with your real pages.
- `index.html` — minimal Vite entry.

## Customize

- Edit color tokens in `DesignKit.jsx` (the `:root` section).
- Add/remove SVG doodles in the `.graffiti-layer` div.
- Swap fonts by changing the Google Fonts import.
