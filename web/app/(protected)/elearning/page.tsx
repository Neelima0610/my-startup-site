"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";

type Resource = {
  title: string;
  description: string;
  category: string;
  href: string;
};

const resources: Resource[] = [
  {
    title: "HTML Basics",
    description: "Learn the structure of web pages and basic tags.",
    category: "Web Development",
    href: "/elearning/html-basics",
  },
  {
    title: "CSS Fundamentals",
    description: "Style web pages using CSS selectors, layouts, and responsive design.",
    category: "Web Development",
    href: "/elearning/css-fundamentals",
  },
  {
    title: "JavaScript for Beginners",
    description: "Understand core JS concepts, DOM manipulation, and events.",
    category: "Programming",
    href: "/elearning/javascript-basics",
  },
  {
    title: "Interview Prep: HTML & CSS",
    description: "Common questions and exercises for freshers.",
    category: "Interview Prep",
    href: "/elearning/interview-html-css",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Learn arrays, linked lists, trees, and sorting algorithms.",
    category: "Programming",
    href: "/elearning/dsa",
  },
  {
    title: "Version Control with Git",
    description: "Master Git commands and workflow for team projects.",
    category: "Tools",
    href: "/elearning/git-basics",
  },
];

export default function ELearning() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100">      
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6 right-6">
        <BackButton title="" backHref="/dashboard" />
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          eLearning & Interview Prep
        </h1>
        <p className="text-gray-600 mb-8">
          Curated learning resources for beginners entering the IT field. Explore tutorials, guides, and interview preparation content.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{r.title}</h2>
              <p className="text-gray-600 mb-2">{r.description}</p>
              <span className="text-sm text-cyan-600 font-medium">{r.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}