/**
 * Contact Form API Route - SECURED VERSION
 * Enhanced with rate limiting, bot prevention, input sanitization
 * and proper environment variable handling
 */

import { NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map();

// Simple rate limiter
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 5; // Max 5 requests per 15 minutes

    if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, []);
    }

    const requests = rateLimitMap.get(ip);
    const recentRequests = requests.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
        return false;
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    return true;
}

// Input sanitization
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential XSS characters
        .slice(0, 1000); // Limit length
}

// Honeypot field check (add this to your form as a hidden field)
function isBot(body) {
    // If honeypot field is filled, it's a bot
    if (body.honeypot && body.honeypot !== '') {
        return true;
    }

    // Check submission speed (if timestamp is sent from client)
    if (body.formStartTime) {
        const submissionTime = Date.now() - body.formStartTime;
        // If form was submitted in less than 3 seconds, likely a bot
        if (submissionTime < 3000) {
            return true;
        }
    }

    return false;
}

export async function POST(request) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Bot detection
        if (isBot(body)) {
            console.log('Bot detected from IP:', ip);
            // Return success to fool bots, but don't actually send email
            return NextResponse.json(
                { success: true, message: 'Form submitted successfully!' },
                { status: 200 }
            );
        }

        // Validate and sanitize required fields
        const name = sanitizeInput(body.name);
        const email = sanitizeInput(body.email);
        const businessName = sanitizeInput(body.businessName);
        const businessType = sanitizeInput(body.businessType);
        const message = sanitizeInput(body.message);
        const phone = sanitizeInput(body.phone || '');

        if (!name || !email || !businessName || !businessType || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Enhanced email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Phone validation (optional but if provided, should be valid)
        if (phone && phone.length > 0) {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                return NextResponse.json(
                    { error: 'Please enter a valid phone number.' },
                    { status: 400 }
                );
            }
        }

        // Get the API key from environment variables (SECURE!)
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY is not set in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error. Please contact support.' },
                { status: 500 }
            );
        }

        // Prepare the data for Web3Forms
        const formData = {
            access_key: accessKey,
            subject: `New LaunchPad Inquiry from ${businessName}`,
            from_name: name,
            name: name,
            email: email,
            phone: phone || 'Not provided',
            business_name: businessName,
            business_type: businessType,
            message: message,
        };

        // Submit to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { success: true, message: 'Form submitted successfully! We\'ll get back to you within 24 hours.' },
                { status: 200 }
            );
        } else {
            console.error('Web3Forms error:', result);
            return NextResponse.json(
                { error: 'Failed to submit form. Please try again or contact us directly.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Contact form API error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}

// Handle unsupported methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}