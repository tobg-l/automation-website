import { NextRequest, NextResponse } from "next/server";

// Example API route for form submission
// Replace with your preferred form backend (FormSpree, Basin, etc.)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, process, frequency, timeSpent, budget } = body;

    // Validate required fields
    if (!name || !email || !process) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Replace with your form backend
    // Example: FormSpree
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     company,
    //     process,
    //     frequency,
    //     timeSpent,
    //     budget,
    //   }),
    // });

    // Example: Send email notification
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\n...`,
    // });

    // For now, return success (replace with actual backend call)
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

