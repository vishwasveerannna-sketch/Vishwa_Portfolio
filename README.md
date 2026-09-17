# Vishwas — Portfolio

A personal portfolio site built with React, Vite and Tailwind CSS. Dark theme,
an amber "signal" accent, and a small canvas-based node-network visual in the
hero. Content lives in one data file so it's easy to keep up to date.

## Features

- Sticky nav with smooth scrolling and a mobile menu
- Animated node-network visual in the hero (pauses for `prefers-reduced-motion`)
- Skills grouped into categories as chips (no fake percentage bars)
- Large project cards with a "View details" modal (problem / solution / features / contribution / outcome)
- Certifications section with certificate-link placeholders
- Vertical education timeline
- Contact form that opens the visitor's email client with the message
  pre-filled (no backend — see [Wiring up the contact form](#wiring-up-the-contact-form-optional))
- Responsive from 375px mobile up to desktop, keyboard-accessible, respects reduced motion
- Configured for GitHub Pages deployment via GitHub Actions

## Tech stack

React 19 · Vite · Tailwind CSS · lucide-react (icons) · Framer Motion (installed, available if you want to extend the animations)

## Project structure

```
src/
 ├── components/       # Reusable UI: Navbar, Reveal (scroll-in), NodeNetwork, ProjectModal, BrandIcons
 ├── sections/          # One file per page section (Hero, About, Skills, Projects, ...)
 ├── data/
 │   └── portfolioData.js   # ALL content lives here — edit this file to update the site
 ├── App.jsx
 └── main.jsx
public/
 ├── favicon.svg
 └── resume.pdf         # Your résumé — replace this file to update the download
```

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To check the production build locally:

```bash
npm run build
npm run preview
```

## Customizing content

Almost everything on the site is driven by **`src/data/portfolioData.js`**.
Open that file and edit:

- `profile` — name, role, location, email, phone, résumé filename
- `summary` — the About/hero blurb
- `aboutPoints`, `skillGroups`, `projects`, `certifications`, `education`, `languages`

### Adding your GitHub URL

In `src/data/portfolioData.js`:

```js
github: 'https://github.com/YOUR_GITHUB_USERNAME',
```

### Adding your LinkedIn URL

Same file:

```js
linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
```

### Adding project links

Each project in the `projects` array has `githubUrl` and `demoUrl` fields.
Fill either in and the matching button appears automatically; leave one empty
and that button is replaced with a disabled "coming soon" label (never a fake link).

```js
githubUrl: 'https://github.com/you/your-repo',
demoUrl: 'https://your-demo-url.com',
```

### Adding certificate links

Same idea, on each entry in `certifications`:

```js
certificateUrl: 'https://your-certificate-link.com',
```

### Replacing your résumé

Drop your PDF in `public/resume.pdf` (replacing the existing file). The
"Download résumé" button in the hero always points at that file, so no code
changes are needed. If you rename the file, update `resumeFile` in
`portfolioData.js` to match.

## Wiring up the contact form (optional)

By default, the contact form has **no backend** — submitting it opens the
visitor's email client with their message pre-filled (`src/sections/Contact.jsx`,
`handleSubmit`). Nothing is silently stored or sent.

If you'd rather have messages land directly in your inbox without opening a
mail client, swap that handler for one of:

- **[Formspree](https://formspree.io/)** — point the form's `action` at your
  Formspree endpoint and switch the `<form>` to a normal POST.
- **[EmailJS](https://www.emailjs.com/)** — call `emailjs.send()` inside
  `handleSubmit` with your service/template IDs.

Both have a generous free tier and a few lines of setup — their docs walk
through it directly.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and deploys it to GitHub Pages automatically on every
push to `main`.

### 1. Set the base path

GitHub Pages serves a project repository at `https://<username>.github.io/<repo-name>/`,
so Vite needs to know the site isn't at the domain root. Open **`vite.config.js`**
and set `base` to match your repository name:

```js
base: '/your-repo-name/',
```

If you're deploying to a **user/organization Pages site** instead (a repo
literally named `<username>.github.io`) or to a **custom domain**, set:

```js
base: '/',
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL (e.g.
`https://github.com/your-username/your-repo-name.git`) — this project doesn't
assume one for you.

### 3. Turn on GitHub Pages

In your repository on GitHub: **Settings → Pages → Build and deployment → Source**,
select **GitHub Actions**. The workflow will run automatically on your next
push (or trigger it manually from the **Actions** tab).

Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Custom domain (optional)

To use a custom domain, add a `CNAME` file to the `public/` folder containing
your domain name, set `base: '/'` in `vite.config.js`, and configure your
domain's DNS as described in [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Building for other hosts

The `npm run build` output in `dist/` is a static site and works on any static
host (Netlify, Vercel, Cloudflare Pages, etc.) — just set `base: '/'` in
`vite.config.js` if you're not serving from a sub-path.
