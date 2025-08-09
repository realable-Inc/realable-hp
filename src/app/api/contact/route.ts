import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message, recaptchaToken } = body;

    // Verify reCAPTCHA token if provided
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Here you would typically:
    // 1. Save the form data to a database
    // 2. Send an email notification to admin
    // 3. Send a confirmation email to the user

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      company,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you might want to use a service like SendGrid, Mailgun, or AWS SES
    // to send email notifications

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}