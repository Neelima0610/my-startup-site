import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { errorText } = await req.json();

  const prompt = `
        Identify the programming language of the following error or stack trace.

        Error/Stack Trace:
        ${errorText}
`;

  const res = await fetch(process.env.OLLAMA_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "phi3",
    //model: "mistral",
      prompt,
      stream: false,
    }),
  });
  console.log("Response from local Ollama LLM:", res);
  if (!res.ok) {
    return NextResponse.json({
      analysis: "Local LLM failed",
    });
  }

  const data = await res.json();

  return NextResponse.json({
    analysis: data.response,
  });
}
