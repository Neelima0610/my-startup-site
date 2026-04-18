import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email?.toLowerCase().trim();

    // ✅ Validate input
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });

    // 🔐 Always return same response (prevent enumeration)
    if (!user) {
      return NextResponse.json({ message: "If email exists, reset link sent" });
    }

    // 🔒 Generate token
    const rawToken = crypto.randomBytes(32).toString("hex");

    // 🔐 Hash token before storing
    const hashedToken = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    const expiry = new Date(Date.now() + 1000 * 60 * 30); // 30 mins

    await prisma.user.update({
      where: { email },
      data: {
        resetToken: hashedToken,
        resetTokenExpiry: expiry,
      },
    });

    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${rawToken}`;

    // 🚀 TODO: Replace with real email service
    console.log("RESET LINK:", resetLink);

    return NextResponse.json({
      message: "If email exists, reset link sent",
    });

  } catch (error) {
    console.error("forgot-password error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}