import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // ✅ Validate input
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    // ✅ Basic email format check
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // ❗ Ensure API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const license = await prisma.license.findFirst({
      where: { email },
      orderBy: { createdAt: "desc" },
    });

    if (!license) {
      return NextResponse.json(
        { error: "No license found" },
        { status: 404 }
      );
    }

    await resend.emails.send({
      from: "IdeaVault <onboarding@resend.dev>",
      to: email,
      subject: "Your IdeaVault License Key",
      html: `
        <h2>Your License Key</h2>
        <h3>${license.key}</h3>
        <p>Use this in your VS Extension to unlock Pro.</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err: unknown) {
    console.error("Resend license error:", err);

    return NextResponse.json(
      { error: "Failed to resend" },
      { status: 500 }
    );
  }
}