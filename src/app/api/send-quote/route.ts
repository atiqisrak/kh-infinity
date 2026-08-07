import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, phone, company, product, quantity, destination, specifications } = formData;

    const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone ?? "N/A"}</p>
          <p><strong>Company:</strong> ${company ?? "N/A"}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Quantity:</strong> ${quantity ?? "N/A"}</p>
          <p><strong>Destination:</strong> ${destination ?? "N/A"}</p>
          ${specifications ? `<p><strong>Specifications:</strong> ${specifications}</p>` : ""}
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">Submitted: ${new Date().toLocaleString()}</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "K.H. Infinity <info@khi.com.bd>",
        to: "info@khi.com.bd",
        reply_to: email,
        subject: `Quote Request: ${product} — ${name}`,
        html: emailHTML,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send email", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
