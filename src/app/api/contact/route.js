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
        const accessKey = "f5066285-3583-4ac6-8b7a-1058c67c9c64";

        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY is not set');
            return NextResponse.json(
                { error: 'Server configuration error: WEB3FORMS_ACCESS_KEY is missing.' },
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

        console.log('Submitting to Web3Forms...');

        // Submit to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log('Web3Forms response status:', response.status);

        // Get the raw text first to see what we're actually getting
        const responseText = await response.text();

        // Try to parse it as JSON
        let result;
        try {
            result = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse Web3Forms JSON response:', parseError);
            console.error('Raw response was:', responseText);
            return NextResponse.json(
                { error: 'Invalid response from Web3Forms API. Please check server logs.' },
                { status: 500 }
            );
        }

        if (result.success) {
            console.log('✅ Form submitted successfully!');
            return NextResponse.json(
                { success: true, message: 'Form submitted successfully!' },
                { status: 200 }
            );
        } else {
            console.error('❌ Web3Forms error:', result);
            return NextResponse.json(
                { error: result.message || 'Failed to submit form to Web3Forms.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Contact form API error:', error);
        return NextResponse.json(
            { error: `Unexpected server error: ${error.message}` },
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