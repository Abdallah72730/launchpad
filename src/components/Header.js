/**
 * Header Component
 * Responsive navigation with mobile hamburger menu
 * Features: Sticky header, glass-morphism effect, active page indicator
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

// Navigation links configuration
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.jpg"
                        alt="LaunchPad - Invest. Market. Grow."
                        width={160}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button - Desktop */}
                <Link href="/contact" className={styles.ctaButton}>
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Mobile Menu Drawer */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <ul className={styles.mobileNavLinks}>
                        {navLinks.map((link, index) => (
                            <li
                                key={link.href}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        className={styles.mobileCta}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
