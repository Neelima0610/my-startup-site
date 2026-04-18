import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const license = await prisma.license.findFirst({
      where: { email },
      orderBy: {
        createdAt: "desc",
      },
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

  } catch (err) {
    return NextResponse.json(
      { error: "Failed to resend" },
      { status: 500 }
    );
  }
}