/**
 * Footer Component
 * Contains company info, quick links, contact details, and social placeholder
 */

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

// Quick links for footer navigation
const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logo.jpg"
                                alt="LaunchPad"
                                width={50}
                                height={50}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.description}>
                            Empowering small household businesses in Hyderabad to reach new heights.
                            Your success is our mission.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksSection}>
                        <h3 className={styles.sectionTitle}>Quick Links</h3>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.footerLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>Contact Us</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <a href="mailto:launchpad@wwwlaunchpad.com" className={styles.contactLink}>
                                    launchpad@wwwlaunchpad.com
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span>Hyderabad, India</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <h3 className={styles.sectionTitle}>Ready to Grow?</h3>
                        <p className={styles.ctaText}>
                            Take the first step towards transforming your business today.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} LaunchPad. All rights reserved.
                    </p>
                    <p className={styles.tagline}>
                        Proudly serving entrepreneurs in Hyderabad 🇮🇳
                    </p>
                </div>
            </div>
        </footer>
    );
}
