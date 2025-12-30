"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showTools, setShowTools] = useState(false);

  const tools = [
    { name: "ErrorLens", description: "Analyze errors & stack traces instantly", href: "/tools/errorlens" },
    // Add more tools here
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {!showTools ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Neelima 👋</h1>
          <p className="mb-8 text-gray-700">
            I build and share small startup ideas, AI prompts, and developer tools. This site is my personal product studio — where ideas turn into shipped products.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-lg mb-2">💡 Startup Ideas</h2>
              <p className="text-gray-600">Small, validated ideas with clear execution paths.</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-lg mb-2">🧠 AI Prompts</h2>
              <p className="text-gray-600">Carefully designed prompts for developers and builders.</p>
            </div>

            <div
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer"
              onClick={() => setShowTools(true)}
            >
              <h2 className="font-bold text-lg mb-2">🛠 Apps & Tools</h2>
              <p className="text-gray-600">Developer tools, CLIs, and extensions I create.</p>
            </div>
          </div>
        </>
      ) : (
        <div>
          <button
            className="mb-6 text-blue-500 underline"
            onClick={() => setShowTools(false)}
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-4">Apps & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="p-4 bg-white rounded-xl shadow hover:shadow-lg block"
              >
                <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
