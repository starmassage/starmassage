# Star Massage - Landing Page (Vite + React + Tailwind)

## Setup (local)
1. Unzip the project and `cd` into the folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Install Tailwind CLI (if not already):
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   (The repository already includes tailwind.config.js and postcss.config.js.)
4. Start dev server:
   ```
   npm run dev
   ```
5. Open the local URL shown by Vite.

## Deploy (GitHub → Vercel)
1. Create a GitHub repo and push this project.
2. Login to Vercel (https://vercel.com) with GitHub and click "Add New Project".
3. Select the repository and deploy. Vercel will run `npm install` and `npm run build`.

## Notes
- WhatsApp booking opens a pre-filled Hindi-English message to +91 6206225329.
- Change email inside `src/StarMassageLanding.jsx` if needed.
- Images are loaded from Unsplash URLs (no local images required).
