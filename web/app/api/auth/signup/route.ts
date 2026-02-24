import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    console.log("Signup API hit");
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
    
    console.log("Creating user with:", email);
    try {
      const user = await prisma.user.create({
        data: {
          email,
          username,
          hashedPassword: hashedPassword,
        },
      });

      console.log("User created:", user.id);

    } catch (error) {
      console.error("Prisma error:", error);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
