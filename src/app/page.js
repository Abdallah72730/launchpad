/**
 * Home Page
 * Main landing page with hero section, services overview, stats, and CTAs
 * Designed to attract household business owners in Hyderabad
 */

import Link from 'next/link';
import styles from './page.module.css';

// Service highlights for the home page
const services = [
    {
        icon: '💰',
        title: 'Investment Solutions',
        description: 'Strategic funding tailored for home-based businesses. From pickles to boutiques, we invest in your dream.',
        link: '/services#investment'
    },
    {
        icon: '📈',
        title: 'Marketing & Growth',
        description: 'Reach thousands of customers across Hyderabad with our proven digital and local marketing strategies.',
        link: '/services#marketing'
    },
    {
        icon: '🤝',
        title: 'Business Consulting',
        description: 'Expert guidance to navigate challenges, scale operations, and maximize your business potential.',
        link: '/services#consulting'
    }
];

// Statistics to display trust and impact
const stats = [
    { value: '₹50L+', label: 'Investment Pool' },
    { value: '3X', label: 'Average Growth' },
    { value: '100%', label: 'Commitment' },
    { value: '24/7', label: 'Support' }
];

// Why choose us points
const whyChoose = [
    {
        icon: '🏠',
        title: 'Home Business Specialists',
        description: 'We understand the unique challenges of running a business from home.'
    },
    {
        icon: '🌆',
        title: 'Hyderabad Focused',
        description: 'Deep knowledge of the local market, culture, and customer preferences.'
    },
    {
        icon: '💪',
        title: 'Personalized Approach',
        description: 'No one-size-fits-all solutions. We create strategies just for you.'
    },
    {
        icon: '🚀',
        title: 'Growth Partners',
        description: 'We succeed only when you succeed. Your growth is our mission.'
    }
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroBgShape1}></div>
                    <div className={styles.heroBgShape2}></div>
                    <div className={styles.heroBgShape3}></div>
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>
                        🚀 Empowering Hyderabad's Entrepreneurs
                    </span>

                    <h1 className={styles.heroTitle}>
                        Turn Your <span className={styles.highlight}>Home Business</span> Into a
                        <span className={styles.highlight}> Thriving Enterprise</span>
                    </h1>

                    <p className={styles.heroSubtitle}>
                        We invest in passionate home-based entrepreneurs, market their products,
                        and help them reach customers across Hyderabad and beyond.
                    </p>

                    <div className={styles.heroButtons}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            Start Your Journey
                            <span className={styles.btnArrow}>→</span>
                        </Link>
                        <Link href="/services" className={styles.secondaryBtn}>
                            Explore Services
                        </Link>
                    </div>

                    <div className={styles.heroTrust}>
                        <span>Trusted by home businesses across Hyderabad</span>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>What We Do</span>
                        <h2 className={styles.sectionTitle}>
                            Complete Business Growth Solutions
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            From funding to customer acquisition, we provide everything your
                            home business needs to succeed.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <span className={styles.serviceIcon}>{service.icon}</span>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <Link href={service.link} className={styles.serviceLink}>
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={styles.whyChoose}>
                <div className={styles.container}>
                    <div className={styles.whyContent}>
                        <div className={styles.whyText}>
                            <span className={styles.sectionLabel}>Why LaunchPad?</span>
                            <h2 className={styles.sectionTitle}>
                                Built For <span className={styles.textPrimary}>Hyderabad's</span> Home Entrepreneurs
                            </h2>
                            <p className={styles.whyDescription}>
                                Whether you're making authentic Hyderabadi pickles, running a tiffin service,
                                crafting handmade jewelry, or stitching boutique clothing — we understand
                                your passion and are here to help you grow.
                            </p>
                        </div>

                        <div className={styles.whyGrid}>
                            {whyChoose.map((item, index) => (
                                <div key={index} className={styles.whyCard}>
                                    <span className={styles.whyIcon}>{item.icon}</span>
                                    <h3 className={styles.whyCardTitle}>{item.title}</h3>
                                    <p className={styles.whyCardDescription}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Launch Your Business to New Heights?
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Join the growing community of successful home entrepreneurs in Hyderabad.
                            Book a free consultation today.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                            <span className={styles.ctaButtonIcon}>→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
