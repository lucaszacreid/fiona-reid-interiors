import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquirySchema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variables");
    return NextResponse.json({ error: "Enquiry service is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Fiona Reid Interiors <enquiries@fionareidinteriors.co.uk>",
    to: contactEmail,
    replyTo: data.email,
    subject: `New enquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Project type: ${data.projectType}`,
      `Project location: ${data.projectLocation}`,
      `Budget: ${data.budget || "—"}`,
      `How they heard about us: ${data.referral || "—"}`,
      "",
      "Description:",
      data.description,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend send failed", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
