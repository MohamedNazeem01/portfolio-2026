# Mohamed Naseem H — Portfolio Deployment & Customization Guide

This is a high-performance, single-page portfolio crafted with vanilla HTML5, CSS3, and JavaScript (no frameworks or build steps required).

---

## 📁 Project Structure

```text
mohamed-naseem-portfolio/
│
├── index.html          # Semantic HTML5 markup, meta tags, and structured sections
├── style.css           # Pure black/grayscale theme, bento grids, animations
├── script.js           # Project data array, modal logic, magnetic buttons, parallax
├── DEPLOYMENT.md       # Step-by-step deployment & customization manual
└── assets/
    ├── profile.jpg     # Professional headshot (220px display)
    ├── smoke-bg.jpg    # Ethereal grayscale silk/smoke wave background
    ├── smoke-bg.mp4    # (Optional) Looping muted video background
    ├── project-1.jpg   # Commercial Facility ELV Infrastructure image
    ├── project-2.jpg   # IoT Smart Parking & Telemetry image
    ├── project-3.jpg   # YOLOv8 Surveillance AI image
    ├── favicon.svg     # Sleek monochrome monogram favicon
    └── cv.pdf          # Your downloadable CV / Resume document
```

---

## 🚀 Step 1: Previewing Locally

Because this website uses vanilla web standards, you can preview it in seconds using any of the following methods:

### Option A: Double-Click
Double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

### Option B: Local Server (Recommended for full video/modal performance)
Open PowerShell in this folder and run:
```bash
npx serve .
```
or
```bash
python -m http.server 8000
```
Then visit `http://localhost:3000` (or `http://localhost:8000`).

---

## 🌐 Step 2: Deploying to GitHub Pages (Free Hosting with SSL)

### 1. Initialize Git & Commit
Open PowerShell inside `mohamed-naseem-portfolio`:
```bash
git init
git add .
git commit -m "Initial commit: Mohamed Naseem H portfolio"
```

### 2. Create a New Repository on GitHub
1. Log into your GitHub account ([github.com](https://github.com)).
2. Click **New Repository** (green button).
3. Name your repository (e.g. `mohamednaseem-portfolio` or `mohamednaseemh.github.io`).
4. Keep it **Public** and leave "Initialize with README" unchecked.
5. Click **Create repository**.

### 3. Push Your Code
Link your local project to GitHub and push:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/mohamednaseem-portfolio.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left navigation, click **Pages** (under "Code and automation").
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
5. Within 60 seconds, GitHub will generate your live URL (e.g., `https://<YOUR-GITHUB-USERNAME>.github.io/mohamednaseem-portfolio/`).

---

## 🔗 Step 3: Connecting Your Custom Domain (e.g., `mohamednaseemh.com`)

If you own a custom domain (purchased on GoDaddy, Namecheap, Cloudflare, Google Domains/Squarespace, etc.):

### 1. Configure GitHub Pages
1. Go to your repository's **Settings > Pages**.
2. In the **Custom domain** field, enter your domain name: `mohamednaseemh.com`.
3. Click **Save**. GitHub will create a `CNAME` file in your repository.
4. Check the box **Enforce HTTPS** (this provides a free automated SSL certificate; it may take 10–15 minutes to provision).

### 2. Configure DNS Records with Your Domain Registrar
Log into your domain provider's DNS Management panel and add the following records:

#### Apex Domain (`mohamednaseemh.com`):
Add **4 A Records** pointing to GitHub's global servers:
- **Type**: `A` | **Host/Name**: `@` | **Points to**: `185.199.108.153`
- **Type**: `A` | **Host/Name**: `@` | **Points to**: `185.199.109.153`
- **Type**: `A` | **Host/Name**: `@` | **Points to**: `185.199.110.153`
- **Type**: `A` | **Host/Name**: `@` | **Points to**: `185.199.111.153`

#### Subdomain (`www.mohamednaseemh.com`):
Add **1 CNAME Record**:
- **Type**: `CNAME` | **Host/Name**: `www` | **Points to**: `<YOUR-GITHUB-USERNAME>.github.io`

*Note: DNS propagation usually completes within 10 to 60 minutes worldwide.*

---

## ✏️ Step 4: How to Edit and Update Content

### 1. Adding or Modifying Projects
All project data lives inside **`script.js`** right at the top in the `PROJECTS` array:
```javascript
const PROJECTS = [
  {
    id: "project-elv-facility",
    title: "Commercial Facility ELV & Security Infrastructure",
    category: "ELV OPERATIONS & SITE FIT-OUT",
    siteType: "COMMERCIAL FACILITY",
    role: "ELV Operations & Site Installation",
    client: "Core Tech / Commercial Client",
    location: "Ras Al Khaimah, UAE",
    thumbnail: "assets/project-1.jpg",
    images: [
      "assets/project-1.jpg",
      "assets/smoke-bg.jpg"
    ],
    excerpt: "One-line summary for the card...",
    description: "Detailed description in the modal...",
    scope: "Field installation & execution details...",
    deliverables: [
      "Bullet point 1",
      "Bullet point 2"
    ],
    systems: [
      "IP CCTV SURVEILLANCE",
      "BIOMETRIC ACCESS CONTROL"
    ]
  },
  // Add new projects by duplicating this object!
];
```

### 2. Updating Your CV / Resume
Replace `assets/cv.pdf` with your actual updated PDF file. Ensure the file is named `cv.pdf`.

### 3. Adding an Optional Looping Smoke Video
To use a looping MP4 video for the hero background, place a lightweight compressed MP4 video into `assets/smoke-bg.mp4`. The `<video>` element in `index.html` will automatically detect and play it with the existing `assets/smoke-bg.jpg` as the fallback poster.

### 4. Updating Contact Links
In `index.html`, locate the `<section id="contact">` block to modify:
- **Email**: Update `href="mailto:..."` and text.
- **WhatsApp**: Update `href="https://wa.me/918883295888"`.
- **LinkedIn**: Update `href="https://linkedin.com/in/mohamednaseemh"`.
