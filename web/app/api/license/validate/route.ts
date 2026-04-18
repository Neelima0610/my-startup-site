import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { key, machineId } = await req.json();

    if (!key || !machineId) {
      return NextResponse.json(
        { valid: false, error: "Missing key or machineId" },
        { status: 400 }
      );
    }

    // 🔍 Find license
    const license = await prisma.license.findUnique({
      where: { key },
      include: { activations: true },
    });

    if (!license || !license.isActive) {
      return NextResponse.json({
        valid: false,
        error: "Invalid license",
      });
    }

    // ✅ Already activated on this machine
    const existing = license.activations.find(
      (a) => a.machineId === machineId
    );

    if (existing) {
      return NextResponse.json({ valid: true });
    }

    // 🔢 Check activation limit
    if (license.activations.length < license.maxActivations) {
      await prisma.activation.create({
        data: {
          licenseKey: key,
          machineId,
        },
      });

      return NextResponse.json({ valid: true });
    }

    return NextResponse.json({
      valid: false,
      error: "Activation limit reached",
    });

  } catch (error) {
    console.error("Validation error:", error);

    return NextResponse.json(
      { valid: false, error: "Server error" },
      { status: 500 }
    );
  }
}