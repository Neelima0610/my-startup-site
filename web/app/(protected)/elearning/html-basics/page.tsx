"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";
import CodePlayground from "@/components/CodePlayground";

const topics = [
  {
    title: "HTML Structure",
    desc: "Learn how a webpage is structured",
    href: "/elearning/html-basics/structure",
  },
  {
    title: "HTML Tags",
    desc: "Understand headings, paragraphs and containers",
    href: "/elearning/html-basics/tags",
  },
  {
    title: "Links & Images",
    desc: "Add navigation and media",
    href: "/elearning/html-basics/links-images",
  },
  {
    title: "Forms",
    desc: "Capture user input",
    href: "/elearning/html-basics/forms",
  },
];

export default function HtmlBasicsIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">

      <div className="max-w-5xl mx-auto mb-6">
        <BackButton backHref="/elearning" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          HTML Basics
        </h1>

        <p className="text-gray-600 mb-10">
          Master the fundamentals of HTML with structured lessons and interactive examples.
        </p>

        {/* TOPIC GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="
                bg-white p-6 rounded-xl shadow
                hover:shadow-xl hover:scale-[1.02]
                transition border border-gray-100
              "
            >
              <h2 className="text-xl font-semibold mb-2">
                {t.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {t.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* 🚀 INTERACTIVE PREVIEW SECTION */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-semibold mb-2">
            Try HTML Basics Live
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Edit the code below and see how HTML tags work in real-time.
          </p>

          <CodePlayground
            initialCode={{
              html: `
                <h1>Welcome to HTML</h1>

                <p>This is a paragraph example.</p>

                <h2>Headings</h2>
                <h3>Smaller heading</h3>

                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                </ul>
                            `,
                            css: `
                body {
                font-family: Arial;
                padding: 20px;
                }
                h1 {
                color: #0ea5e9;
                }
                            `,
                            js: `
                console.log("HTML Basics Playground Loaded");
              `,
            }}
          />
        </div>

      </div>
    </main>
  );
}