/**
 * Home Page
 * Main landing page with hero section, services overview, stats, and CTAs
 * Designed to attract household business owners in Hyderabad
 */

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import LiveBackground from '../components/LiveBackground';
import {
    InvestmentIcon,
    MarketingIcon,
    ConsultingIcon,
    HomeIcon,
    CityIcon,
    PersonalizedIcon,
    GrowthIcon,
    ArrowRightIcon
} from '../components/Icons';

// Service highlights for the home page
const services = [
    {
        icon: <InvestmentIcon className={styles.iconMd} />,
        title: 'Investment Solutions',
        description: 'Strategic funding tailored for home-based businesses. From pickles to boutiques, we invest in your dream.',
        link: '/services#investment'
    },
    {
        icon: <MarketingIcon className={styles.iconMd} />,
        title: 'Marketing & Growth',
        description: 'Reach thousands of customers across Hyderabad with our proven digital and local marketing strategies.',
        link: '/services#marketing'
    },
    {
        icon: <ConsultingIcon className={styles.iconMd} />,
        title: 'Business Consulting',
        description: 'Expert guidance to navigate challenges, scale operations, and maximize your business potential.',
        link: '/services#consulting'
    }
];

// Statistics to display trust and impact
const stats = [
    { value: '3X', label: 'Average Growth' },
    { value: '100%', label: 'Commitment' },
    { value: '24/7', label: 'Support' }
];

// Why choose us points
const whyChoose = [
    {
        icon: <HomeIcon className={styles.iconSm} />,
        title: 'Home Business Specialists',
        description: 'We understand the unique challenges of running a business from home.'
    },
    {
        icon: <CityIcon className={styles.iconSm} />,
        title: 'Hyderabad Focused',
        description: 'Deep knowledge of the local market, culture, and customer preferences.'
    },
    {
        icon: <PersonalizedIcon className={styles.iconSm} />,
        title: 'Personalized Approach',
        description: 'No one-size-fits-all solutions. We create strategies just for you.'
    },
    {
        icon: <GrowthIcon className={styles.iconSm} />,
        title: 'Growth Partners',
        description: 'We succeed only when you succeed. Your growth is our mission.'
    }
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <LiveBackground />
                <div className={styles.heroBackground}>
                    <div className={styles.heroBgShape1}></div>
                    <div className={styles.heroBgShape2}></div>
                    <div className={styles.heroBgShape3}></div>
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/images/logo.jpg"
                            alt="LaunchPad Logo"
                            width={120}
                            height={120}
                            className={styles.heroLogo}
                            priority
                        />
                    </div>

                    <span className={styles.heroBadge}>
                        Empowering Hyderabad's Entrepreneurs
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
                            <ArrowRightIcon className={styles.btnIcon} />
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
                                <div className={styles.serviceIconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <Link href={service.link} className={styles.serviceLink}>
                                    Learn More <ArrowRightIcon className={styles.linkIcon} />
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
                                    <div className={styles.whyIconWrapper}>
                                        {item.icon}
                                    </div>
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
                            <ArrowRightIcon className={styles.btnIcon} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
