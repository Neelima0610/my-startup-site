
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const { error } = await request.json();

  if (!error) {
    return Response.json({ error: "Error text is required" }, { status: 400 });
  }

  try {
    const prompt = `
You are a senior software engineer and debugging expert.

Analyze the following error or stack trace and respond in EXACTLY this format:

What happened:
<1–2 sentences>

Why it happened:
<root cause explanation>

How to fix it:
<clear, actionable steps>

Rules:
- Be concise
- Do not mention AI
- Do not add extra sections
- Assume developer audience

Error:
${error}
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0
    });

    const analysis = completion.choices[0].message?.content || "No analysis generated.";

    return Response.json({ analysis });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to generate analysis" }, { status: 500 });
  }
}