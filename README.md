# LaunchPad - Invest.Market.Grow

A professional, multi-page website for LaunchPad, a business investment and marketing company helping small household-based businesses in Hyderabad, India.

## 🚀 Features

- **Multi-page architecture** with dedicated pages for Home, Services, About, and Contact
- **Responsive design** optimized for mobile, tablet, and desktop
- **Modern UI** with animations, glass-morphism effects, and premium aesthetics
- **Secure contact form** with server-side API key handling
- **SEO optimized** with proper meta tags for the Hyderabad market
- **Vercel-ready** deployment configuration

## 📁 Project Structure

```
launchpad-/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with header/footer
│   │   ├── globals.css        # Design system & global styles
│   │   ├── page.js            # Home page
│   │   ├── services/          # Services page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── api/contact/       # Contact form API route
│   └── components/
│       ├── Header.js          # Navigation component
│       └── Footer.js          # Footer component
├── .env.local                 # API keys (not in repo)
├── .env.example               # Environment template
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Web3Forms API key.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment (Vercel)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add `WEB3FORMS_ACCESS_KEY` environment variable in Vercel dashboard
4. Deploy!

### Environment Variables
Set these in your Vercel project settings:
- `WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key

## 📧 Contact Form

The contact form uses [Web3Forms](https://web3forms.com/) for email delivery. The API key is stored securely in environment variables and accessed only through a server-side API route, never exposed to the client.

## 🎨 Design

- **Primary Color**: Red (#DC2626)
- **Accent Color**: Gold/Amber for premium feel
- **Typography**: Inter (Google Fonts)
- **Animations**: Subtle fade-ins and hover effects

## 📝 License

© 2026 LaunchPad. All rights reserved.
