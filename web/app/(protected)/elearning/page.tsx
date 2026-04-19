"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";
import { useState } from "react";

type Resource = {
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  premium?: boolean;
  href: string;
};

const resources: Resource[] = [
  {
    title: "HTML Basics",
    description: "Learn structure, tags, and semantic HTML.",
    category: "Web Dev",
    level: "Beginner",
    href: "/elearning/html-basics",
  },
  {
    title: "CSS Fundamentals",
    description: "Layouts, Flexbox, Grid, responsive design.",
    category: "Web Dev",
    level: "Beginner",
    href: "/elearning/css-fundamentals",
  },
  {
    title: "JavaScript Essentials",
    description: "Core JS, DOM, async programming.",
    category: "Programming",
    level: "Beginner",
    href: "/elearning/javascript-basics",
  },
  {
    title: "DSA Mastery",
    description: "Arrays, trees, recursion, problem solving.",
    category: "Programming",
    level: "Intermediate",
    premium: true,
    href: "/elearning/dsa",
  },
  {
    title: "Git & Collaboration",
    description: "Version control, branching, workflows.",
    category: "Tools",
    level: "Beginner",
    href: "/elearning/git-basics",
  },
  {
    title: "Interview Prep Pack",
    description: "Real-world questions + solutions.",
    category: "Interview",
    level: "Advanced",
    premium: true,
    href: "/elearning/interview-html-css",
  },
];

export default function ELearning() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Dev", "Programming", "Tools", "Interview"];

  const filtered =
    filter === "All"
      ? resources
      : resources.filter((r) => r.category === filter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 px-6 py-10">

      {/* TOP */}
      <div className="max-w-6xl mx-auto mb-6">
        <BackButton backHref="/dashboard" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Learning Hub 🚀
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Structured learning paths, interview preparation, and real-world developer skills — all in one place.
          </p>
        </div>

        {/* LEARNING PATH STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Beginner",
              desc: "Start from basics",
              color: "from-green-100 to-green-200",
            },
            {
              title: "Intermediate",
              desc: "Build real projects",
              color: "from-yellow-100 to-yellow-200",
            },
            {
              title: "Advanced",
              desc: "Master interviews & systems",
              color: "from-red-100 to-red-200",
            },
          ].map((path) => (
            <div
              key={path.title}
              className={`p-6 rounded-2xl bg-gradient-to-br ${path.color} shadow-md`}
            >
              <h3 className="font-semibold text-lg">{path.title}</h3>
              <p className="text-sm text-gray-700">{path.desc}</p>
            </div>
          ))}
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat
                  ? "bg-cyan-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-200"
            >
              {/* Premium Badge */}
              {r.premium && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-xs px-2 py-1 rounded-full font-medium">
                  Pro
                </span>
              )}

              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {r.title}
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                {r.description}
              </p>

              <div className="flex justify-between items-center text-xs">
                <span className="text-cyan-600 font-medium">
                  {r.category}
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full ${
                    r.level === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : r.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {r.level}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* PRO CTA */}
        <div className="mt-14 bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">
            Unlock Premium Learning
          </h3>
          <p className="text-sm text-indigo-700 mb-4">
            Access advanced tutorials, interview packs, and deep-dive content.
          </p>

          <Link
            href="/pricing"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Upgrade to Pro
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-16 text-center text-sm text-gray-500">
          Need help?{" "}
          <a href="mailto:support@ideavaultlabs.com" className="underline">
            Contact support
          </a>
        </div>

      </div>
    </main>
  );
}