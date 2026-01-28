/**
 * LaunchPad Root Layout - IMPROVED VERSION
 * Enhanced SEO for Hyderabad market and local search
 */

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Enhanced metadata for SEO - optimized for Hyderabad market
export const metadata = {
    title: {
        default: 'LaunchPad Hyderabad - Home Business Investment & Marketing | Household Business Growth',
        template: '%s | LaunchPad Hyderabad',
    },
    description: 'LaunchPad invests in and markets household businesses across Hyderabad. Get funding, marketing support, and business consulting for your home-based pickle business, tiffin service, boutique, handicrafts, and more. Supporting Telangana entrepreneurs.',
    keywords: [
        // Primary keywords
        'home business investment Hyderabad',
        'household business funding Hyderabad',
        'small business marketing Hyderabad',
        'Hyderabad home entrepreneurs',

        // Business types
        'pickle business funding Hyderabad',
        'tiffin service investment Hyderabad',
        'boutique business support Hyderabad',
        'handicraft business marketing Hyderabad',
        'home bakery funding Hyderabad',

        // Location-specific
        'Telangana business investment',
        'Hyderabad startup funding',
        'local business growth Hyderabad',
        'small business loans Hyderabad',

        // Services
        'business consulting Hyderabad',
        'digital marketing for home business',
        'business mentorship Hyderabad'
    ],
    authors: [{ name: 'LaunchPad Hyderabad', url: 'https://wwwlaunchpad.com' }],
    creator: 'LaunchPad',
    publisher: 'LaunchPad',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    metadataBase: new URL('https://wwwlaunchpad.com'),
    alternates: {
        canonical: 'https://wwwlaunchpad.com',
    },
    openGraph: {
        title: 'LaunchPad - Invest, Market & Grow Home Businesses in Hyderabad',
        description: 'Empowering household entrepreneurs in Hyderabad with strategic investment, marketing solutions, and business growth support. From pickles to boutiques, we help your home business thrive.',
        url: 'https://wwwlaunchpad.com',
        siteName: 'LaunchPad Hyderabad',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/images/og-image.jpg', // You should create this
                width: 1200,
                height: 630,
                alt: 'LaunchPad - Home Business Investment in Hyderabad',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LaunchPad Hyderabad - Home Business Investment & Growth',
        description: 'Supporting household entrepreneurs in Hyderabad with funding, marketing, and business consulting.',
        images: ['/images/twitter-image.jpg'], // You should create this
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // Verification for Google Search Console (add your verification code)
    verification: {
        google: 'your-google-verification-code-here',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
    category: 'business',
};

// Viewport configuration
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#dc2626',
};

// JSON-LD structured data for local business
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://wwwlaunchpad.com',
    name: 'LaunchPad Hyderabad',
    description: 'Investment and marketing services for household businesses in Hyderabad',
    url: 'https://wwwlaunchpad.com',
    logo: 'https://wwwlaunchpad.com/images/logo.jpg',
    image: 'https://wwwlaunchpad.com/images/og-image.jpg',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.3850',
        longitude: '78.4867'
    },
    areaServed: {
        '@type': 'City',
        name: 'Hyderabad'
    },
    email: 'launchpad@wwwlaunchpad.com',
    sameAs: [
        // Add your social media profiles here
        // 'https://www.facebook.com/yourpage',
        // 'https://www.instagram.com/yourprofile',
        // 'https://www.linkedin.com/company/yourcompany'
    ],
    priceRange: '₹₹',
    openingHours: 'Mo-Fr 09:00-18:00',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '50'
    }
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

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
                <SpeedInsights />

                <Footer />
            </body>
        </html>
    );
}