import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY!);

function generateLicenseKey() {
  return "VSX-" + Math.random().toString(36).substring(2, 10).toUpperCase();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // 🔐 Verify Razorpay signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // 🔍 Fetch order to get email
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

    // 🔑 Generate license key
    const licenseKey = generateLicenseKey();

    // 💾 Save to DB
    await prisma.license.create({
      data: {
        key: licenseKey,
        email,
        orderId: razorpay_order_id,
      },
    });

    // 📩 Send Email
    await resend.emails.send({
      from: "IdeaVault <onboarding@resend.dev>",
      to: email,
      subject: "Your IdeaVault Pro License Key 🚀",
      html: `
        <h2>🎉 Payment Successful!</h2>
        <p>Thank you for purchasing <b>IdeaVault Pro</b>.</p>

        <p><b>Your License Key:</b></p>
        <h3 style="color:#6366f1;">${licenseKey}</h3>

        <p>👉 Copy this key and paste it inside your VS Extension to unlock Pro features.</p>

        <br/>
        <p>Enjoy building! 🚀</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}