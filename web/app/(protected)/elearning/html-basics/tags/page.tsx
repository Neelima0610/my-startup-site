"use client";

import CodeBlock from "@/components/CodeBlock";
import LessonNavigation from "@/components/LessonNavigation";
import LearningLayout from "@/components/LearningLayout";

export default function HtmlTagsPage() {
  const code = `<h1>Main Heading</h1>
<p>This is a paragraph</p>
<div>Container</div>`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">
    <LearningLayout previewCode={{ html: code, css: "", js: "" }}>
      <div className="w-full min-h-[calc(100vh-10rem)] p-2 md:p-4">

        <h1 className="text-3xl font-bold mb-4">HTML Tags</h1>

        <p className="text-gray-600 mb-6">
          Tags define elements in HTML.
        </p>

        <CodeBlock code={code} />
        
      </div>
       <LessonNavigation />
       </LearningLayout>
    </main>
  );
}