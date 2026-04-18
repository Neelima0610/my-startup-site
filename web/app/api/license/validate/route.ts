import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const key = typeof body.key === "string" ? body.key.trim() : null;
    const machineId =
      typeof body.machineId === "string"
        ? body.machineId.trim().toLowerCase()
        : null;

    // ✅ Validate input
    if (!key || !machineId) {
      return NextResponse.json(
        { valid: false, error: "Invalid key or machineId" },
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

    // ⚠️ Use transaction to prevent race condition
    const activationResult = await prisma.$transaction(async (tx) => {
      const freshLicense = await tx.license.findUnique({
        where: { key },
        include: { activations: true },
      });

      if (!freshLicense) {
        throw new Error("License disappeared");
      }

      if (freshLicense.activations.length >= freshLicense.maxActivations) {
        return { valid: false, error: "Activation limit reached" };
      }

      await tx.activation.create({
        data: {
          licenseKey: key,
          machineId,
        },
      });

      return { valid: true };
    });

    return NextResponse.json(activationResult);

  } catch (error: unknown) {
    console.error("Validation error:", error);

    return NextResponse.json(
      { valid: false, error: "Server error" },
      { status: 500 }
    );
  }
}