import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const PRICE = 19900; // ₹199 in paise

export async function POST(req: Request) {
  try {
     if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("❌ Razorpay env missing");
      return NextResponse.json(
        { error: "Payment config error" },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { email } = await req.json();

    // ✅ Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // ❗ Env safety
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay env variables");
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    // 🔍 Check existing license
    const existing = await prisma.license.findFirst({
      where: {
        email,
        isActive: true,
      },
    });

    if (existing) {
      return NextResponse.json({
        alreadyPurchased: true,
      });
    }

    // 🧾 Create order
    const order = await razorpay.orders.create({
      amount: PRICE,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        email,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
    });

  } catch (error: unknown) {
    console.error("Order error:", error);

    return NextResponse.json(
      { error: "Order failed" },
      { status: 500 }
    );
  }
}