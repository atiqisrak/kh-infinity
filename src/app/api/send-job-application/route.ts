import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const {
      name,
      email,
      phone,
      country,
      resumeUrl,
      coverLetter,
      portfolio,
      availability,
      salaryExpectation,
      noticePeriod,
      jobTitle,
      jobId,
    } = formData;

    // Get API key from environment variable
    const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured" },
        { status: 500 }
      );
    }

    // Format email content
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Job Application: ${jobTitle}</h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #ea580c; margin-top: 0;">Personal Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Country:</strong> ${country}</p>
        </div>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #ea580c; margin-top: 0;">Application Details</h3>
          <p><strong>Resume/CV URL:</strong> <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer">${resumeUrl}</a></p>
          ${portfolio ? `<p><strong>Portfolio:</strong> <a href="${portfolio}" target="_blank" rel="noopener noreferrer">${portfolio}</a></p>` : ''}
          <p><strong>Availability:</strong> ${getAvailabilityText(availability)}</p>
          ${noticePeriod ? `<p><strong>Notice Period:</strong> ${noticePeriod}</p>` : ''}
          ${salaryExpectation ? `<p><strong>Expected Salary:</strong> ${salaryExpectation}</p>` : ''}
        </div>

        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #ea580c; margin-top: 0;">Cover Letter</h3>
          <div style="white-space: pre-wrap; color: #333;">${coverLetter}</div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This application was submitted for Job ID: ${jobId}</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "K.H. Infinity Careers <career@khi.com.bd>",
        to: "career@khi.com.bd",
        reply_to: email,
        subject: `New Job Application: ${jobTitle} - ${name}`,
        html: emailHTML,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json(
        { error: "Failed to send email", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending job application email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function getAvailabilityText(availability: string): string {
  const availabilityMap: { [key: string]: string } = {
    immediate: "Immediately Available",
    "1month": "Within 1 Month",
    "2weeks": "Within 2 Weeks",
    "3months": "Within 3 Months",
    negotiable: "Negotiable",
  };
  return availabilityMap[availability] || availability;
}

