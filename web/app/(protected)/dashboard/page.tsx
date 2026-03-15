"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function Home() {
  const router = useRouter();

  const menuItems = [
    { name: "Products", href: "/tools" },
    { name: "VS Extensions", href: "/extensions/visual-studio" },
    { name: "VS Code Extensions", href: "/extensions/vs-code" },
    { name: "Azure DevOps", href: "/extensions/azure-devops" },
    { name: "Study / Interview Prep", href: "/elearning" },
    { name: "eBooks", href: "/ebooks" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 flex flex-col items-center justify-center px-6 py-16">
   
      {/* HEADER */}
      <div className="text-center max-w-2xl mb-14">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to IdeaVault Labs
        </h1>
        <p className="text-slate-600 text-lg">
          Explore our innovative developer tools, extensions, study materials, and eBooks—all in one place.
        </p>
      </div>

      {/* MENU CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => router.push(item.href)}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center transition transform hover:scale-[1.03] hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              {item.name}
            </h2>
            <p className="text-gray-600 text-sm">
              Click to explore {item.name.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="mt-16 text-sm text-slate-500 text-center">
        IdeaVault © {new Date().getFullYear()} — Innovative tools for developers
      </footer>    
    </main>
  );
}