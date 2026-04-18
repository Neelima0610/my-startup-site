import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

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
    const order = await razorpay.orders.create({
      amount: 19900, // ₹199
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        email,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });

  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({ error: "Order failed" }, { status: 500 });
  }
}