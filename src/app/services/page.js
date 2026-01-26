/**
 * Services Page
 * Detailed information about LaunchPad's services
 * Designed to show value proposition to potential clients
 */

import Link from 'next/link';
import styles from './page.module.css';
import {
    InvestmentIcon,
    MarketingIcon,
    ConsultingIcon,
    TargetIcon,
    CheckIcon,
    ArrowRightIcon
} from '../../components/Icons';

// SEO metadata for services page
export const metadata = {
    title: 'Our Services',
    description: 'Comprehensive business growth services for home-based entrepreneurs in Hyderabad. Investment solutions, marketing, consulting, and client acquisition.',
};

// Detailed service offerings
const services = [
    {
        id: 'investment',
        icon: <InvestmentIcon className={styles.iconLg} />,
        title: 'Investment Solutions',
        subtitle: 'Fuel Your Growth',
        description: 'Access strategic funding designed specifically for home-based businesses. We believe in your potential and invest in your success.',
        features: [
            'Flexible funding from ₹50,000 to ₹10,00,000',
            'No collateral required for eligible businesses',
            'Revenue-based repayment options',
            'Quick approval within 7 days',
            'Mentorship included with investment'
        ],
        cta: 'Apply for Funding'
    },
    {
        id: 'marketing',
        icon: <MarketingIcon className={styles.iconLg} />,
        title: 'Marketing & Growth',
        subtitle: 'Reach More Customers',
        description: 'Our expert marketing team helps you build brand awareness, attract customers, and grow sales across Hyderabad and beyond.',
        features: [
            'Social media marketing & management',
            'Local SEO & Google Business optimization',
            'Professional product photography',
            'WhatsApp & digital catalog creation',
            'Influencer partnerships & collaborations'
        ],
        cta: 'Grow Your Brand'
    },
    {
        id: 'consulting',
        icon: <ConsultingIcon className={styles.iconLg} />,
        title: 'Business Consulting',
        subtitle: 'Expert Guidance',
        description: 'Get personalized advice from experienced business mentors who understand the unique challenges of running a home-based enterprise.',
        features: [
            'One-on-one mentorship sessions',
            'Business plan development',
            'Pricing & profitability analysis',
            'Operations optimization',
            'Scaling strategy roadmap'
        ],
        cta: 'Book Consultation'
    },
    {
        id: 'acquisition',
        icon: <TargetIcon className={styles.iconLg} />,
        title: 'Client Acquisition',
        subtitle: 'Connect with Buyers',
        description: 'We actively connect your products with interested buyers, helping you build a steady stream of customers and repeat business.',
        features: [
            'Access to our buyer network',
            'Corporate gifting connections',
            'Event & exhibition opportunities',
            'B2B marketplace listings',
            'Referral program management'
        ],
        cta: 'Find Customers'
    }
];

// Process steps
const process = [
    {
        step: '01',
        title: 'Initial Consultation',
        description: 'Share your business story, goals, and challenges with our team.'
    },
    {
        step: '02',
        title: 'Custom Strategy',
        description: 'We create a personalized growth plan tailored to your needs.'
    },
    {
        step: '03',
        title: 'Execution',
        description: 'Our team implements the strategy while you focus on your craft.'
    },
    {
        step: '04',
        title: 'Growth & Support',
        description: 'Watch your business grow with our ongoing support and guidance.'
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Our Services</span>
                    <h1 className={styles.heroTitle}>
                        Everything Your Business Needs to <span className={styles.highlight}>Succeed</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        From funding to customer acquisition, we provide comprehensive solutions
                        designed specifically for Hyderabad's home-based entrepreneurs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.services}>
                <div className={styles.container}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`${styles.serviceBlock} ${index % 2 === 1 ? styles.reversed : ''}`}
                        >
                            <div className={styles.serviceContent}>
                                <div className={styles.serviceIconWrapper}>
                                    {service.icon}
                                </div>
                                <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                                <h2 className={styles.serviceTitle}>{service.title}</h2>
                                <p className={styles.serviceDescription}>{service.description}</p>

                                <ul className={styles.featureList}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} className={styles.featureItem}>
                                            <span className={styles.checkIcon}>
                                                <CheckIcon className={styles.iconSm} />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className={styles.serviceBtn}>
                                    {service.cta}
                                    <ArrowRightIcon className={styles.btnArrow} />
                                </Link>
                            </div>

                            <div className={styles.serviceVisual}>
                                <div className={styles.visualCard}>
                                    <div className={styles.visualIconWrapper}>
                                        {service.icon}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>How It Works</span>
                        <h2 className={styles.sectionTitle}>Your Journey to Growth</h2>
                        <p className={styles.sectionSubtitle}>
                            A simple, transparent process designed to get your business growing fast.
                        </p>
                    </div>

                    <div className={styles.processGrid}>
                        {process.map((item, index) => (
                            <div key={index} className={styles.processCard}>
                                <span className={styles.processStep}>{item.step}</span>
                                <h3 className={styles.processTitle}>{item.title}</h3>
                                <p className={styles.processDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Transform Your Business?
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Schedule a free consultation and let's discuss how we can help you grow.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                            <ArrowRightIcon className={styles.ctaArrow} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
