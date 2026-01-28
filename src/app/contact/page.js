/**
 * Contact Page - IMPROVED VERSION
 * Added bot prevention with honeypot field and timing checks
 */

'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { EmailIcon, LocationIcon, ClockIcon, CheckIcon, AlertIcon } from '../../components/Icons';

const businessTypes = [
    'Pickles & Preserves',
    'Tiffin & Catering',
    'Clothing & Boutique',
    'Handmade Jewelry',
    'Art & Handicrafts',
    'Home Baking',
    'Tailoring & Fashion',
    'Organic Products',
    'Beauty & Wellness',
    'Other'
];

const faqs = [
    {
        question: 'How much funding can I get?',
        answer: 'We offer flexible funding ranging from ₹10,000 to ₹5,00,000 depending on your business needs and growth potential.'
    },
    {
        question: 'Do I need collateral?',
        answer: 'No collateral is required for most of our funding programs. We believe in your potential, not just your assets.'
    },
    {
        question: 'How long does the process take?',
        answer: 'From initial consultation to funding, the process typically takes 7-14 days for eligible businesses.'
    },
    {
        question: 'What types of businesses do you support?',
        answer: 'We support all kinds of home-based businesses in Hyderabad — from food to fashion, handicrafts to services.'
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: '',
        message: '',
        honeypot: '' // Bot trap field
    });

    const [formStartTime, setFormStartTime] = useState(null);
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const [expandedFaq, setExpandedFaq] = useState(null);

    // Track when user starts interacting with form
    useEffect(() => {
        setFormStartTime(Date.now());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Include timing information for bot detection
            const submissionData = {
                ...formData,
                formStartTime: formStartTime
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    businessName: '',
                    businessType: '',
                    message: '',
                    honeypot: ''
                });
                // Reset timer
                setFormStartTime(Date.now());
            } else {
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setStatus({
                submitting: false,
                submitted: false,
                error: 'Network error. Please check your connection and try again.'
            });
        }
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Get In Touch</span>
                    <h1 className={styles.heroTitle}>
                        Let's <span className={styles.highlight}>Grow Together</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Ready to take your home business to the next level?
                        Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Form Section */}
                        <div className={styles.formSection}>
                            <h2 className={styles.formTitle}>Send Us a Message</h2>
                            <p className={styles.formSubtitle}>
                                Tell us about your business and how we can help you grow.
                            </p>

                            {status.submitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>
                                        <CheckIcon />
                                    </span>
                                    <h3>Thank You!</h3>
                                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                                    <button
                                        className={styles.resetButton}
                                        onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {/* Honeypot field - hidden from real users, visible to bots */}
                                    <div style={{ position: 'absolute', left: '-9999px' }}>
                                        <label htmlFor="honeypot">Leave this field empty</label>
                                        <input
                                            type="text"
                                            id="honeypot"
                                            name="honeypot"
                                            value={formData.honeypot}
                                            onChange={handleChange}
                                            tabIndex="-1"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name" className={styles.label}>Your Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                                placeholder="Enter your full name"
                                                maxLength="100"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email" className={styles.label}>Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                                placeholder="your.email@example.com"
                                                maxLength="100"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={styles.input}
                                                placeholder="+91 XXXXX XXXXX"
                                                maxLength="20"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="businessName" className={styles.label}>Business Name *</label>
                                            <input
                                                type="text"
                                                id="businessName"
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                                placeholder="Your business name"
                                                maxLength="100"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="businessType" className={styles.label}>Business Type *</label>
                                        <select
                                            id="businessType"
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            required
                                            className={styles.select}
                                        >
                                            <option value="">Select your business type</option>
                                            {businessTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>Tell Us About Your Business *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className={styles.textarea}
                                            rows={5}
                                            placeholder="Describe your business, current challenges, and how you'd like us to help..."
                                            maxLength="1000"
                                        />
                                    </div>

                                    {status.error && (
                                        <div className={styles.errorMessage}>
                                            <span className={styles.errorIcon}>
                                                <AlertIcon />
                                            </span>
                                            {status.error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={status.submitting}
                                    >
                                        {status.submitting ? (
                                            <>
                                                <span className={styles.spinner}></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <span className={styles.btnArrow}>→</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Contact Information</h3>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <EmailIcon />
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Email</p>
                                        <a href="mailto:launchpad@wwwlaunchpad.com" className={styles.infoValue}>
                                            launchpad@wwwlaunchpad.com
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <LocationIcon />
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Location</p>
                                        <p className={styles.infoValue}>Hyderabad, Telangana, India</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <ClockIcon />
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Response Time</p>
                                        <p className={styles.infoValue}>Within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.expectCard}>
                                <h3 className={styles.expectTitle}>What to Expect</h3>
                                <ol className={styles.expectList}>
                                    <li>We'll review your inquiry within 24 hours</li>
                                    <li>Schedule a consultation call</li>
                                    <li>Discuss your goals and challenges</li>
                                    <li>Create a customized growth plan</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faq}>
                <div className={styles.container}>
                    <div className={styles.faqHeader}>
                        <span className={styles.sectionLabel}>FAQ</span>
                        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    </div>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={expandedFaq === index}
                                >
                                    {faq.question}
                                    <span className={styles.faqIcon}>
                                        {expandedFaq === index ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedFaq === index && (
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}