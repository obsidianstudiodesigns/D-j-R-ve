# Déjà Rêve — Bespoke Laser Cutting & Luxury Event Designs

> *"Once a dream, now reality"*

A high-end, responsive web application for **Déjà Rêve**, specialized in artisanal laser cutting, precision printing, luxury wedding stationery, bespoke celebration favor boxes, and executive corporate branding based in Witbank (eMalahleni), Mpumalanga.

---

## 📍 Studio Details
- **Physical Address:** 33 B, Barlow Road, Witbank, 1035, Mpumalanga, South Africa
- **Phone / WhatsApp:** [076 983 2759](tel:+27769832759)
- **Direct Orders & Artwork Email:** [orders@DejaRêve.co.za](mailto:orders@DejaRêve.co.za)
- **Live URL (GitHub Pages):** [https://obsidianstudiodesigns.github.io/DejaRêve/](https://obsidianstudiodesigns.github.io/DejaRêve/)

---

## ✨ Features & Architecture

- **Luxury Brand Aesthetics:** High-contrast noir and champagne metallic gold palette derived directly from the Déjà Rêve brand emblem.
- **Microscopic Vector Typography:** Paired *Cinzel* display serif with *Cormorant Garamond* and *Plus Jakarta Sans*, featuring authentic calligraphy flourishes.
- **Dynamic Déjà Rêve Emblem:** Vector-calibrated SVG & Canvas rendering of the gold glitter halo badge with ambient luminous glow.
- **Interactive Quote & Brief Estimator:** Real-time calculator for wedding signs, cake toppers, favor boxes, corporate boxes, and 3D signage with automatic WhatsApp & Email brief dispatch.
- **Filterable Showcase Gallery:** Curated portfolio across Weddings, Party Boxes, Corporate Branding, and 3D Event Signage with detailed material specifications and turnaround metrics.
- **5-Step Bespoke Workflow:** Clear customer pathway from vector CAD proofing to laser cutting, flame polishing, and nationwide courier.
- **Mobile Native Navigation:** Dedicated sticky mobile action dock for instant 1-tap WhatsApp chat, phone calls, Google Maps directions to 33 B Barlow Road, and quote requests.
- **SEO & Social Sharing:** Fully synchronized OpenGraph tags, semantic schema, and responsive viewport optimization.

---

## 🚀 Pushing to GitHub & Auto-Building on GitHub Pages

This project is pre-configured with **GitHub Actions** (`.github/workflows/deploy.yml`) and relative asset resolution (`base: './'` in `vite.config.ts`), ensuring smooth zero-configuration deployment to `https://obsidianstudiodesigns.github.io/DejaRêve/`.

### 1. Initialize and Push to your GitHub Repository
Run the following commands in your terminal:

```bash
# Initialize git (if not already initialized)
git init

# Stage all files
git add .

# Create initial commit
git commit -m "feat: Déjà Rêve luxury website release"

# Rename default branch to main
git branch -M main

# Link your GitHub repository
git remote add origin https://github.com/obsidianstudiodesigns/DejaRêve.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages Deployment
1. On GitHub, navigate to your repository: `https://github.com/obsidianstudiodesigns/DejaRêve`
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, choose: **GitHub Actions**.
5. That's it! Every time you push changes to `main`, GitHub will automatically trigger the workflow, build the site, and publish it live to:
   **`https://obsidianstudiodesigns.github.io/DejaRêve/`**

---

## 🛠️ Local Development & Scripts

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build for production
npm run build

# Typecheck and lint
npm run lint
```
