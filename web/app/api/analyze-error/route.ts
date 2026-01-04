import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { errorText } = await req.json();

    if (!errorText || errorText.length < 10) {
      return NextResponse.json(
        { error: "Invalid error input" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 600,
        messages: [
          {
            role: "system",
            content: `
You are a senior software engineer.
Analyze the error and respond with:
1. Root cause
2. Exact fix
3. Example solution
4. Prevention tips
`
          },
          {
            role: "user",
            content: errorText
          }
        ]
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { error: "AI request failed", details: err },
        { status: 500 }
      );
    }

    const data = await res.json();
    const message = data.choices[0].message.content;
    // Print the message in JSON format
    console.log("OpenAI message (JSON) formatted:", JSON.stringify({ message }));
    return NextResponse.json({
      result: message
    });

  } catch (e) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}