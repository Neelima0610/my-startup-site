"use client";

import CodeBlock from "@/components/CodeBlock";
import BackButton from "@/components/BackButton";
import LessonNavigation from "@/components/LessonNavigation";
import CodePlayground from "@/components/CodePlayground";
import LearningLayout from "@/components/LearningLayout";

export default function HtmlTagsPage() {
  const code = `<h1>Main Heading</h1>
<p>This is a paragraph</p>
<div>Container</div>`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">
    <LearningLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">

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