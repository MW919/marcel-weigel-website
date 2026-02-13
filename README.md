# 🌐 Marcel Weigel — Personal Website

Your personal brand website with the "Architecture Experience" blog.
Hosted on IONOS Deploy Now (German hosting, DSGVO-compliant).

---

## 📋 Before You Start

You'll need:
- A computer with internet
- About 30–45 minutes
- Your email address

---

## Step 1: Create a GitHub Account

1. Go to **https://github.com/signup**
2. Enter your email, create a password, pick a username
3. Verify your email
4. Done!

---

## Step 2: Download Fonts (one-time step)

The site uses the "Outfit" font, self-hosted for DSGVO compliance.

1. Go to **https://fonts.google.com/specimen/Outfit**
2. Click **"Get font"** → **"Download all"**
3. Unzip the downloaded file
4. You need these files placed in the `public/fonts/` folder:
   - `Outfit-Light.woff2`
   - `Outfit-Regular.woff2`
   - `Outfit-Medium.woff2`
   - `Outfit-SemiBold.woff2`
   - `Outfit-Bold.woff2`
   - `Outfit-ExtraBold.woff2`

> **Note:** Google Fonts provides .ttf files. You may need to convert them to .woff2 using https://cloudconvert.com/ttf-to-woff2 (free, no account needed). Or just ask me and I'll handle it.

---

## Step 3: Fill in Your Legal Details

**IMPORTANT: Do this BEFORE going live!**

Open `lib/siteConfig.js` and update the `impressum` section:

```javascript
impressum: {
  fullName: 'Marcel Weigel',
  address: 'YOUR REAL STREET ADDRESS\nYOUR PLZ CITY\nDeutschland',
  email: 'your-real@email.com',
  phone: '+49 XXX XXXXXXX',
  vatId: '',  // Your USt-IdNr if you have one
  responsibleForContent: 'Marcel Weigel',
},
```

Also update the `email` field under `contact`.

---

## Step 4: Upload to GitHub

1. Log in to GitHub
2. Click **"+"** (top-right) → **"New repository"**
3. Name: `marcel-weigel-website`
4. Select **Public**
5. Click **"Create repository"**
6. Click **"Add file"** → **"Upload files"**
7. Drag ALL project files/folders into the upload area
8. Click **"Commit changes"**

---

## Step 5: Deploy with IONOS Deploy Now

1. Go to **https://www.ionos.de/hosting/deploy-now** (or .com for English)
2. Sign up / Log in with your IONOS account
3. Click **"New project"**
4. Connect your GitHub account
5. Select your `marcel-weigel-website` repository
6. IONOS will detect it as a Next.js project
7. Set the **build command** to: `npm run build`
8. Set the **output directory** to: `out`
9. Click **"Deploy"**
10. Wait 2–3 minutes — your site will be live!

---

## Step 6: Connect Your Domain

### In IONOS:
1. Go to your IONOS account → **Domains**
2. Find `marcelweigel.com` (or purchase it in IONOS)
3. In Deploy Now project settings, add your custom domain
4. IONOS will handle the DNS automatically if the domain is also at IONOS

### If domain is at a different provider:
IONOS will give you DNS records to add. Typically:
- A record: `@` → (IP provided by IONOS)
- CNAME record: `www` → (value provided by IONOS)

---

## 📁 What's What

```
├── app/                      ← Website pages
│   ├── page.js              ← Homepage
│   ├── about/               ← About page
│   ├── read/                ← Blog listing (Architecture Experience)
│   ├── contact/             ← Contact page
│   ├── impressum/           ← ⚖️ Legal notice (REQUIRED)
│   └── datenschutz/         ← 🔒 Privacy policy (REQUIRED)
├── components/               ← Building blocks
├── content/posts/            ← 📝 Your blog posts (Markdown)
├── lib/
│   └── siteConfig.js        ← ⭐ YOUR CONTENT — edit this!
├── public/
│   ├── fonts/               ← 🔤 Put font files here
│   └── images/              ← 🖼️ Put images here
└── .deploy-now.yaml          ← IONOS config
```

---

## 🔄 How to Update

**Change text, stats, events:** Edit `lib/siteConfig.js` (or send me the changes)

**Add a blog post:** Send me title + text + categories → I create a file in `content/posts/`

**Replace photos:** Send me the image → I place it in `public/images/`

---

## ⚖️ Legal Checklist Before Going Live

- [ ] Fill in real address in `lib/siteConfig.js` → `impressum` section
- [ ] Fill in real email in `lib/siteConfig.js` → `impressum.email`
- [ ] Fill in phone number (recommended)
- [ ] Review Impressum page at `/impressum`
- [ ] Review Datenschutz page at `/datenschutz`
- [ ] Both pages must be reachable from every page (they're in the footer ✓)

---

## 🚀 Next Steps

- [ ] Get `marcelweigel.com` domain
- [ ] Replace photo placeholders with real photos
- [ ] Add your animated GIF logo
- [ ] Download & place Outfit font files
- [ ] Fill in Impressum details
- [ ] Connect contact form to real email
- [ ] Optional: Add analytics (update Datenschutz if you do!)

---

Built with Next.js • Tailwind CSS • Hosted on IONOS Deploy Now 🇩🇪



