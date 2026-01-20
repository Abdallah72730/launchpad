/**
 * Contact Form API Route
 * Securely handles form submissions using Web3Forms
 * API key is stored server-side in environment variables
 */

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the incoming request body
        const body = await request.json();

        // Validate required fields
        const { name, email, businessName, businessType, message } = body;

        if (!name || !email || !businessName || !businessType || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Get the API key from environment variables
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY is not set');
            return NextResponse.json(
                { error: 'Server configuration error. Please try again later.' },
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
            phone: body.phone || 'Not provided',
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
                { success: true, message: 'Form submitted successfully!' },
                { status: 200 }
            );
        } else {
            console.error('Web3Forms error:', result);
            return NextResponse.json(
                { error: 'Failed to submit form. Please try again.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
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
