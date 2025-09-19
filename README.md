# React + Tailwind Portfolio (Vite)

A simple one‑page portfolio scaffold built with **React**, **Vite**, and **Tailwind CSS**.

It has:
- A sticky navbar with anchor links (About, Projects, Skills, Contact me)
- Four sections ready to edit
- Smooth scrolling
- Clean, responsive layout you can restyle later

> **What’s Vite?**  
> Vite is a fast dev server and build tool (not a React framework). It powers local development and bundles your app for production.

## Quick start

1. Ensure you have **Node.js LTS (18+ recommended)** installed:  
   ```bash
   node -v
   ```

2. Unzip this project, open a terminal in the folder, then install dependencies:  
   ```bash
   npm install
   ```

3. Run the dev server:  
   ```bash
   npm run dev
   ```
   Open the URL it prints in your browser.

4. Build for production (optional):  
   ```bash
   npm run build
   npm run preview
   ```

## Where things live

```
react-tailwind-portfolio/
├─ index.html                # adds scroll-smooth + mounts React app
├─ tailwind.config.js        # Tailwind config (content paths, container)
├─ postcss.config.js         # PostCSS pipeline
├─ vite.config.js            # Vite config with React plugin
├─ src/
│  ├─ index.css              # Tailwind layers; keep classes in JSX
│  ├─ main.jsx               # React entry
│  ├─ App.jsx                # wires up sections + footer
│  ├─ components/
│  │  └─ Navbar.jsx
│  └─ sections/
│     ├─ About.jsx
│     ├─ Projects.jsx
│     ├─ Skills.jsx
│     └─ Contact.jsx
└─ package.json
```

## Personalise it

- **Navbar brand**: Edit `Your Name` in `Navbar.jsx`.
- **About text**: `src/sections/About.jsx`.
- **Projects**: Update the `projects` array in `Projects.jsx` (titles, tech, links).
- **Skills**: Edit the `skills` array in `Skills.jsx`.
- **Contact email**: Replace `you@example.com` in `Contact.jsx` (link + mailto handler).

## Tailwind gotchas (common when it “doesn’t work”)

- You must import `./index.css` in `src/main.jsx` (already done here).
- `tailwind.config.js` **content** paths must include both `index.html` and `src/**/*.{js,ts,jsx,tsx}` (already set).
- In React, use `className` (not `class`).
- VS Code may warn about `@tailwind` or `@apply`—the build still works. We avoid `@apply` here to keep it simple.
- Restart the dev server after adding new files so Tailwind can pick up new classes.

## Deploy (when you’re ready)

- Push to GitHub and connect the repo to Netlify or Vercel.  
- **Build command**: `npm run build`  
- **Publish directory**: `dist`

## Make it your own (ideas for later)

- Add your custom font via Google Fonts and extend Tailwind theme.  
- Replace Projects grid with real screenshots.  
- Add a light/dark toggle.  
- Animate section reveals with a small intersection observer or Framer Motion.
