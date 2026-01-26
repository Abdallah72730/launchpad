/**
 * About Page
 * Company story, mission, values, and Hyderabad focus
 */

import Link from 'next/link';
import styles from './page.module.css';
import {
    HandshakeIcon,
    SproutIcon,
    CommunityIcon,
    BulbIcon,
    JarIcon,
    UtensilsIcon,
    ShirtIcon,
    GemIcon,
    PaletteIcon,
    CakeIcon,
    ScissorsIcon,
    LeafIcon,
    RocketIcon,
    TargetIcon,
    TelescopeIcon,
    CityIcon,
    BuildingIcon,
    ArrowRightIcon
} from '../../components/Icons';

// SEO metadata
export const metadata = {
    title: 'About Us',
    description: 'Learn about LaunchPad - Hyderabad\'s partner for small business growth. Our mission, values, and commitment to empowering home-based entrepreneurs.',
};

// Company values
const values = [
    {
        icon: <HandshakeIcon className={styles.iconLg} />,
        title: 'Trust',
        description: 'We build lasting relationships based on transparency, honesty, and mutual respect.'
    },
    {
        icon: <SproutIcon className={styles.iconLg} />,
        title: 'Growth',
        description: 'We\'re committed to helping every partner business reach its full potential.'
    },
    {
        icon: <CommunityIcon className={styles.iconLg} />,
        title: 'Community',
        description: 'We believe in strengthening Hyderabad\'s local business ecosystem together.'
    },
    {
        icon: <BulbIcon className={styles.iconLg} />,
        title: 'Innovation',
        description: 'We embrace creative solutions to help small businesses compete and win.'
    }
];

// What we support
const businessTypes = [
    { icon: <JarIcon className={styles.iconMd} />, label: 'Pickles & Preserves' },
    { icon: <UtensilsIcon className={styles.iconMd} />, label: 'Tiffin Services' },
    { icon: <ShirtIcon className={styles.iconMd} />, label: 'Boutique Clothing' },
    { icon: <GemIcon className={styles.iconMd} />, label: 'Handmade Jewelry' },
    { icon: <PaletteIcon className={styles.iconMd} />, label: 'Art & Handicrafts' },
    { icon: <CakeIcon className={styles.iconMd} />, label: 'Home Bakers' },
    { icon: <ScissorsIcon className={styles.iconMd} />, label: 'Tailoring & Fashion' },
    { icon: <LeafIcon className={styles.iconMd} />, label: 'Organic Products' }
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>About LaunchPad</span>
                    <h1 className={styles.heroTitle}>
                        Empowering Dreams, <span className={styles.highlight}>One Business at a Time</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We're on a mission to transform home-based businesses in Hyderabad
                        into thriving enterprises that create value for families and communities.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <span className={styles.sectionLabel}>Our Story</span>
                            <h2 className={styles.storyTitle}>
                                Born from a Belief in <span className={styles.textPrimary}>Local Potential</span>
                            </h2>
                            <p className={styles.storyPara}>
                                LaunchPad was founded with a simple observation: Hyderabad is home to
                                thousands of talented entrepreneurs running incredible businesses from their
                                homes. From authentic Hyderabadi pickles to beautiful handcrafted jewelry,
                                these businesses represent passion, skill, and tradition.
                            </p>
                            <p className={styles.storyPara}>
                                Yet, most of these entrepreneurs struggle with the same challenges —
                                limited capital, lack of marketing expertise, and difficulty reaching
                                customers beyond their immediate circle.
                            </p>
                            <p className={styles.storyPara}>
                                We created LaunchPad to bridge this gap. We provide the investment,
                                marketing power, and business expertise that these talented entrepreneurs
                                need to scale their operations and reach customers across Hyderabad and beyond.
                            </p>
                        </div>
                        <div className={styles.storyVisual}>
                            <div className={styles.storyCard}>
                                <div className={styles.storyIconWrapper}>
                                    <RocketIcon className={styles.iconXl} />
                                </div>
                                <p className={styles.storyQuote}>
                                    "Every great business starts with a dream. We're here to help you make that dream a reality."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.mission}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIconWrapper}>
                                <TargetIcon className={styles.iconLg} />
                            </div>
                            <h3 className={styles.missionTitle}>Our Mission</h3>
                            <p className={styles.missionText}>
                                To empower 1000+ home-based entrepreneurs in Hyderabad with the capital,
                                marketing support, and guidance they need to build sustainable,
                                profitable businesses.
                            </p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIconWrapper}>
                                <TelescopeIcon className={styles.iconLg} />
                            </div>
                            <h3 className={styles.missionTitle}>Our Vision</h3>
                            <p className={styles.missionText}>
                                To create a thriving ecosystem where home-based businesses are recognized,
                                supported, and celebrated as vital contributors to Hyderabad's economy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>What We Stand For</span>
                        <h2 className={styles.sectionTitle}>Our Core Values</h2>
                    </div>

                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIconWrapper}>
                                    {value.icon}
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Types Section */}
            <section className={styles.businesses}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Who We Support</span>
                        <h2 className={styles.sectionTitle}>Businesses We Love to Partner With</h2>
                        <p className={styles.sectionSubtitle}>
                            If you're running a home-based business in any of these areas, we'd love to hear from you!
                        </p>
                    </div>

                    <div className={styles.businessGrid}>
                        {businessTypes.map((business, index) => (
                            <div key={index} className={styles.businessCard}>
                                <div className={styles.businessIconWrapper}>
                                    {business.icon}
                                </div>
                                <span className={styles.businessLabel}>{business.label}</span>
                            </div>
                        ))}
                    </div>

                    <p className={styles.businessNote}>
                        Don't see your business type? <Link href="/contact" className={styles.businessLink}>Contact us</Link> —
                        we're always looking to support new kinds of home entrepreneurs!
                    </p>
                </div>
            </section>

            {/* Hyderabad Focus */}
            <section className={styles.hyderabad}>
                <div className={styles.container}>
                    <div className={styles.hyderabadContent}>
                        <span className={styles.sectionLabel}>Proudly Hyderabadi</span>
                        <h2 className={styles.hyderabadTitle}>
                            Built For Hyderabad, By Hyderabadis
                        </h2>
                        <p className={styles.hyderabadText}>
                            We understand the unique culture, tastes, and preferences of our city.
                            From the bustling lanes of Charminar to the tech corridors of Hitech City,
                            we know how to connect your products with the right customers.
                        </p>
                        <p className={styles.hyderabadText}>
                            Our local expertise means we can help you navigate everything from
                            sourcing materials to finding the best local markets and events for your products.
                        </p>
                        <div className={styles.hyderabadIconWrapper}>
                            <BuildingIcon className={styles.iconXl} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Join the LaunchPad Family?
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Take the first step towards transforming your home business.
                            Let's grow together!
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Start Your Journey
                            <ArrowRightIcon className={styles.ctaArrow} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
