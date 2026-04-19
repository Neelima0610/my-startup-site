"use client";

import BackButton from "@/components/BackButton";
import CodeBlock from "@/components/CodeBlock";
import LearningLayout from "@/components/LearningLayout";
import LessonNavigation from "@/components/LessonNavigation";

export default function LinksImagesPage() {
  const linkExample = `<a href="https://example.com">Visit Example</a>`;

  const targetExample = `<a href="https://example.com" target="_blank">
  Open in new tab
</a>`;

  const imageExample = `<img src="image.jpg" alt="Sample Image" />`;

  const imageSizeExample = `<img 
  src="image.jpg" 
  alt="Profile" 
  width="200" 
  height="200" 
/>`;

  const combinedExample = `<a href="https://example.com">
  <img src="image.jpg" alt="Clickable Image" />
</a>`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">     
    <LearningLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow space-y-10">

        <h1 className="text-3xl font-bold">Links & Images</h1>

        {/* LINKS */}
        <section>
          <h2 className="text-xl font-semibold mb-3">1. HTML Links</h2>
          <p className="text-gray-600 mb-4">
            Links are created using the <b>&lt;a&gt;</b> tag.
          </p>

          <CodeBlock code={linkExample} />

          <p className="mt-4 text-gray-700">
            The <b>href</b> attribute defines where the link goes.
          </p>
        </section>

        {/* TARGET */}
        <section>
          <h2 className="text-xl font-semibold mb-3">2. Open Link in New Tab</h2>

          <CodeBlock code={targetExample} />

          <p className="mt-4 text-gray-700">
            <b>target=&quot;_blank&quot;</b> opens the link in a new tab.
          </p>
        </section>

        {/* IMAGES */}
        <section>
          <h2 className="text-xl font-semibold mb-3">3. Images</h2>

          <CodeBlock code={imageExample} />

          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li><b>src</b> → image path</li>
            <li><b>alt</b> → description (important for SEO & accessibility)</li>
          </ul>
        </section>

        {/* IMAGE SIZE */}
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Image Size</h2>

          <CodeBlock code={imageSizeExample} />

          <p className="mt-4 text-gray-700">
            You can control size using width and height attributes.
          </p>
        </section>

        {/* COMBINED */}
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Clickable Images</h2>

          <CodeBlock code={combinedExample} />

          <p className="mt-4 text-gray-700">
            Wrap an image inside a link to make it clickable.
          </p>
        </section>

        {/* BEST PRACTICES */}
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Best Practices</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Always use <b>alt</b> text for images</li>
            <li>Avoid broken image paths</li>
            <li>Use meaningful link text (not &quot;click here&quot;)</li>
            <li>Use target=&quot;_blank&quot; carefully</li>
          </ul>
        </section>

      </div>
    <LessonNavigation />
    </LearningLayout>
    </main>
  );
}