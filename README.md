# LaunchPad — Live-Deployed Full-Stack Web Platform

A production-grade, multi-page business website built with **Next.js** and deployed live to Vercel. Built for LaunchPad, a small business investment and marketing company based in Hyderabad, India.

**Live site:** [site.wwwlaunchpad.com](https://site.wwwlaunchpad.com)

This isn't a mockup or a school exercise — it's a functioning, deployed product with a real domain, live API integrations, server-side security, and responsive design across all screen sizes.

---

## Technical Highlights

- **Next.js App Router** — multi-page architecture with dedicated routes for Home, Services, About, and Contact
- **Server-side API route** — contact form submissions are processed through a Next.js API route (`/api/contact`), keeping the API key off the client entirely
- **Environment variable management** — credentials handled via `.env.local`, with `.env.example` provided for clean contributor setup
- **Responsive design** — mobile, tablet, and desktop layouts tested across breakpoints
- **Modern UI** — CSS animations, glassmorphism effects, smooth transitions
- **SEO optimization** — proper meta tags and page titles configured for the target market
- **ESLint** — linting configured and passing
- **Vercel deployment** — CI/CD via GitHub integration; pushes to main deploy automatically

---

## Features

- Home page with hero section, value proposition, and CTAs
- Services page outlining offerings
- About page with company background
- Contact page with a working form (submissions delivered via Web3Forms API)
- Shared Header and Footer components across all pages
- CSS design system in `globals.css` for consistent styling

---

## Project Structure

```
launchpad/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout — shared header/footer
│   │   ├── globals.css         # Design system and global styles
│   │   ├── page.js             # Home page
│   │   ├── services/           # Services page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   └── api/
│   │       └── contact/        # Server-side API route (handles form + API key)
│   └── components/
│       ├── Header.js           # Navigation component
│       └── Footer.js           # Footer component
├── public/images/              # Static assets
├── .env.example                # Environment variable template
├── .eslintrc.json              # Linting configuration
├── next.config.js              # Next.js configuration
└── package.json
```

---

## Tech Stack

- **Next.js 14** (App Router)
- **React** — component-based UI
- **JavaScript (ES6+)**
- **CSS** — custom design system, no UI library
- **Web3Forms API** — contact form email delivery
- **Vercel** — hosting and deployment
- **Git/GitHub** — version control

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repo
git clone https://github.com/Abdallah72730/launchpad.git
cd launchpad

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local — add your Web3Forms API key

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

Deployed via Vercel with GitHub integration. Pushing to `main` triggers an automatic redeploy.

To deploy your own instance:
1. Fork this repo
2. Import it into [Vercel](https://vercel.com)
3. Add `WEB3FORMS_ACCESS_KEY` in Vercel's environment variable settings
4. Deploy

---

## What I Learned

- Building a full multi-page app with Next.js App Router from scratch
- Writing server-side API routes to handle form submissions without exposing credentials
- Managing environment variables properly across local dev and production
- Deploying a real app with a custom domain and CI/CD pipeline
- Designing a CSS system from scratch without relying on a component library

---

## Author

**Abdallah Najmudin Syed** — Computer Programming Student, Red Deer Polytechnic  
