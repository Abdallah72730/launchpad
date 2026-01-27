/**
 * LaunchPad Root Layout
 * Provides consistent header, footer, and meta tags across all pages
 */

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

// Metadata for SEO - optimized for Hyderabad market
export const metadata = {
    title: {
        default: 'launchpad - invest.market.grow | Hyderabad',
        template: '%s | LaunchPad Hyderabad',
    },
    description: 'LaunchPad empowers small household businesses in Hyderabad with strategic investment and marketing solutions. Transform your home business into a thriving enterprise.',
    keywords: ['small business investment', 'Hyderabad', 'home business', 'marketing', 'business growth', 'startup funding', 'household business'],
    authors: [{ name: 'LaunchPad' }],
    creator: 'LaunchPad',
    publisher: 'LaunchPad',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://launchpad.vercel.app'),
    openGraph: {
        title: 'launchpad - Invest.Market.Grow',
        description: 'Empowering small household businesses in Hyderabad with strategic investment and marketing solutions.',
        url: 'https://launchpad.vercel.app',
        siteName: 'LaunchPad',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LaunchPad - Invest.Market.Grow',
        description: 'Empowering small household businesses in Hyderabad with strategic investment and marketing solutions.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Viewport configuration
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#dc2626',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Fonts - Inter */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {/* Skip to main content link for accessibility */}
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>

                <Header />

                <main id="main-content">
                    {children}
                </main>

                <Analytics />

                <Footer />
            </body>
        </html>
    );
}
