import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey || !recipient) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (
      !name ||
      !email ||
      !phone ||
      !message ||
      name.length > 100 ||
      email.length > 254 ||
      phone.length > 25 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please complete all fields correctly." },
        { status: 400 },
      );
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validPhone = /^\+?[0-9\s()-]{7,20}$/.test(phone);

    if (!validEmail || !validPhone) {
      return NextResponse.json(
        { error: "Enter a valid email and phone number." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Wrap & Wow <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        "New enquiry from the Wrap & Wow website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error.message);

      return NextResponse.json(
        { error: "Email could not be sent. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
