# MinuteMatters — Next.js Website

A Next.js replication of the MinuteMatters landing page, with Privacy Policy and Terms of Service pages.

---

## 📁 Project Structure

```
minutematters/
├── app/
│   ├── layout.tsx          ← Root layout (applies to ALL pages)
│   ├── globals.css         ← Global CSS variables & base styles
│   ├── page.tsx            ← Home page (/)
│   ├── page.module.css     ← Styles for home page
│   ├── privacy/
│   │   └── page.tsx        ← Privacy Policy page (/privacy)
│   └── terms/
│       └── page.tsx        ← Terms of Service page (/terms)
├── components/
│   ├── LegalLayout.tsx     ← Shared layout for Privacy & Terms pages
│   └── LegalLayout.module.css
├── public/
│   └── logo.jpeg           ← Put your logo here
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Step-by-Step Setup (First Time)

### Step 1 — Install Node.js

Next.js requires Node.js. Download and install it from:
👉 https://nodejs.org  (pick the "LTS" version)

To confirm it's installed, open your terminal and run:
```bash
node -v
```
You should see something like `v20.x.x`.

---

### Step 2 — Set Up the Project

**Option A: Use this code directly**

1. Copy this entire `minutematters` folder to wherever you keep your projects (e.g., your Desktop or `~/projects/`)
2. Open your terminal and navigate into the folder:
```bash
cd path/to/minutematters
```

3. Install dependencies:
```bash
npm install
```

---

**Option B: Create a brand-new Next.js project from scratch**

Run this in your terminal (choose a folder location first):
```bash
npx create-next-app@latest minutematters
```

You'll be asked some questions — answer like this:
```
✔ Would you like to use TypeScript? → Yes
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → No
✔ Would you like to use `src/` directory? → No
✔ Would you like to use App Router? → Yes
✔ Would you like to customize the default import alias? → No
```

Then replace the files inside the new project with the ones provided.

---

### Step 3 — Add Your Logo (optional)

Place your `logo.jpeg` inside the `public/` folder:
```
minutematters/public/logo.jpeg
```

---

### Step 4 — Run the Development Server

```bash
npm run dev
```

Then open your browser and go to:
```
http://localhost:3000
```

You should see your MinuteMatters landing page! 🎉

---

### Step 5 — View All Pages

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| Privacy Policy | http://localhost:3000/privacy |
| Terms of Service | http://localhost:3000/terms |

---

## 🌐 Deploying to the Internet (Free)

The easiest way to deploy a Next.js site is **Vercel** (made by the same team as Next.js):

1. Push your code to GitHub
2. Go to https://vercel.com and sign in with GitHub
3. Click "New Project" → import your repository
4. Click "Deploy" — done!

Your site will be live at a `.vercel.app` URL within minutes.

---

## 📦 Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies (run once) |
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm start` | Run production build locally |

---

## ✏️ How to Edit Content

- **Home page text** → edit `app/page.tsx`
- **Home page styles** → edit `app/page.module.css`
- **Privacy policy** → edit `app/privacy/page.tsx`
- **Terms of service** → edit `app/terms/page.tsx`
- **Shared legal page design** → edit `components/LegalLayout.tsx` and `components/LegalLayout.module.css`
- **Site title/metadata** → edit `app/layout.tsx`
- **Global colors/fonts** → edit `app/globals.css` (CSS variables at the top)

---

## 🎨 Changing Colors

All colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --cream: #F5F0E8;       /* page background */
  --charcoal: #1C1C1A;    /* dark text */
  --amber: #C8873A;       /* accent color (italic text, highlights) */
  --sage: #5C7A5E;        /* green accent */
  --muted: #8C8880;       /* secondary text */
}
```

Change these values to retheme the entire site instantly.
