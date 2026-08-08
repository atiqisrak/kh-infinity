import { NextRequest, NextResponse } from "next/server";
import { Binary } from "mongodb";
import { getDb } from "@/lib/mongodb";

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const partnerName = String(formData.get("partnerName") ?? "");
    const capitalAllocation = String(formData.get("capitalAllocation") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const partnerType = String(formData.get("partnerType") ?? "");
    const kycFile = formData.get("kycFile");

    if (!partnerName || !capitalAllocation || !phone || !email || !partnerType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let kycAttachment:
      | { filename: string; contentType: string; buffer: Buffer }
      | null = null;

    if (kycFile instanceof File && kycFile.size > 0) {
      if (kycFile.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { error: "KYC file must be smaller than 8MB" },
          { status: 400 }
        );
      }
      kycAttachment = {
        filename: kycFile.name || "kyc-documents.zip",
        contentType: kycFile.type || "application/zip",
        buffer: Buffer.from(await kycFile.arrayBuffer()),
      };
    }

    // Persist first — this is the durable record of the inquiry.
    const db = await getDb();
    const inquiryDoc: Record<string, unknown> = {
      partnerName,
      capitalAllocation,
      phone,
      email: email.toLowerCase().trim(),
      partnerType,
      status: "new",
      createdAt: new Date(),
    };
    if (kycAttachment) {
      inquiryDoc.kycFile = {
        filename: kycAttachment.filename,
        contentType: kycAttachment.contentType,
        size: kycAttachment.buffer.length,
        data: new Binary(kycAttachment.buffer),
      };
    }
    await db.collection("investor_inquiries").insertOne(inquiryDoc);

    // Email is a best-effort notification — the inquiry is already saved
    // even if the email service is unavailable.
    const apiKey =
      process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;

    if (apiKey) {
      try {
        const emailHTML = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Investor Partnership Inquiry</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
              <p><strong>Partner/Entity Name:</strong> ${partnerName}</p>
              <p><strong>Partner Type:</strong> ${partnerType}</p>
              <p><strong>Target Capital Allocation:</strong> ${capitalAllocation}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">Submitted: ${new Date().toLocaleString()}</p>
          </div>
        `;

        const payload: Record<string, unknown> = {
          from: "K.H. Infinity Investor Relations <info@khi.com.bd>",
          to: "info@khi.com.bd",
          reply_to: email,
          subject: `Investor Partnership Inquiry: ${partnerName}`,
          html: emailHTML,
        };

        if (kycAttachment) {
          payload.attachments = [
            {
              filename: kycAttachment.filename,
              content: kycAttachment.buffer.toString("base64"),
            },
          ];
        }

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          console.error("Resend API error:", await response.json());
        }
      } catch (emailError) {
        console.error("Investor inquiry email notification failed:", emailError);
      }
    } else {
      console.warn(
        "RESEND_API_KEY not configured — investor inquiry saved without email notification"
      );
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Investor inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
