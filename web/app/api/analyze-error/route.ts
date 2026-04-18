import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export async function POST(req: Request) {
  try {
    // 🔐 Auth check (important for abuse protection)
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const errorText = body?.errorText?.trim();

    // 🧹 Input validation
    if (!errorText || errorText.length < 10) {
      return NextResponse.json(
        { error: "Invalid error input" },
        { status: 400 }
      );
    }

    // ⏱ Timeout controller (prevents hanging requests)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s

    const res = await fetch(OPENAI_API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 700,
        messages: [
          {
            role: "system",
            content: `
You are a senior software engineer.

Analyze the error and respond STRICTLY in JSON format:

{
  "rootCause": "...",
  "fix": "...",
  "example": "...",
  "prevention": "..."
}
`,
          },
          {
            role: "user",
            content: errorText,
          },
        ],
      }),
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const err = await res.text();
      console.error("OpenAI error:", err);

      return NextResponse.json(
        { error: "AI request failed" },
        { status: 500 }
      );
    }

    const data = await res.json();
    const raw = data?.choices?.[0]?.message?.content;

    // 🧠 Try parsing structured response
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        rootCause: raw,
        fix: "",
        example: "",
        prevention: "",
      };
    }

    return NextResponse.json({
      success: true,
      result: parsed,
    });

  } catch (error) {   
    console.error("Server error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}