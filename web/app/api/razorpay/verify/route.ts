import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

// ✅ Strong license key generator
function generateLicenseKey() {
  return (
    "VSX-" +
    crypto.randomBytes(5).toString("hex").toUpperCase() // 10 chars secure
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // ✅ Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay secret");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    // 🔐 Verify signature
    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // 🔁 Idempotency check (VERY IMPORTANT)
    const existingLicense = await prisma.license.findUnique({
      where: { orderId: razorpay_order_id },
    });

    if (existingLicense) {
      return NextResponse.json({ success: true });
    }

    // 🔍 Fetch order
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = (await razorpay.orders.fetch(razorpay_order_id)) as {
      notes?: { email?: string };
    };

    const email = order.notes?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email not found in order" },
        { status: 400 }
      );
    }

    // 🔑 Generate license
    const licenseKey = generateLicenseKey();

    // 💾 Save (with unique constraint safety)
    await prisma.license.create({
      data: {
        key: licenseKey,
        email,
        orderId: razorpay_order_id,
      },
    });

    // 📩 Send email
    await resend.emails.send({
      from: "IdeaVault <onboarding@resend.dev>",
      to: email,
      subject: "Your IdeaVault Pro License Key 🚀",
      html: `
        <h2>🎉 Payment Successful!</h2>
        <p>Thank you for purchasing <b>IdeaVault Pro</b>.</p>

        <p><b>Your License Key:</b></p>
        <h3 style="color:#6366f1;">${licenseKey}</h3>

        <p>👉 Paste this key in your VS Extension to unlock Pro.</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    console.error("Verify error:", error);

    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}