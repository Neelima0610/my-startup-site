"use client";

import CodeBlock from "@/components/CodeBlock";
import LearningLayout from "@/components/LearningLayout";
import LessonNavigation from "@/components/LessonNavigation";

export default function HtmlStructurePage() {
  const code = `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </body>
</html>`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">
    <LearningLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold mb-4">HTML Structure</h1>

        <p className="text-gray-600 mb-6">
          Every HTML page follows a standard structure.
        </p>

        <CodeBlock code={code} />

        <div className="mt-6 space-y-3 text-gray-700">
          <p><b>&lt;!DOCTYPE html&gt;</b> → Defines HTML5 document</p>
          <p><b>&lt;html&gt;</b> → Root of page</p>
          <p><b>&lt;head&gt;</b> → Metadata</p>
          <p><b>&lt;body&gt;</b> → Visible content</p>
        </div>

      </div>
       <LessonNavigation />
    </LearningLayout>
    </main>
  );
}