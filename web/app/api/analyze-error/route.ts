import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const error = body.error;

  if (!error) return NextResponse.json({ error: "Error text required" }, { status: 400 });

  const prompt = `
You are a senior software engineer...
Error:
${error}
  `;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0
  });

  return NextResponse.json({ analysis: completion.choices[0].message?.content });
}
