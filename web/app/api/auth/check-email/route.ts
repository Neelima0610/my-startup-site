import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"

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
      select: { id: true }, // ✅ minimal data
    });

    // 🔐 Prevent user enumeration
    return NextResponse.json({
      success: true,
      message: user
        ? "If this email is registered, you can continue."
        : "If this email is registered, you can continue.",
    });

  } catch (error) {
    console.error("check-email error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}