import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, username } = body;

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

     const existingUser = await prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
