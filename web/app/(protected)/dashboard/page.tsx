"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import BuyMeCoffeeCard from "@/components/BuyMeCoffee";

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
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 flex flex-col items-center px-4 sm:px-6 py-10 sm:py-16">

      {/* Top Navigation */}
      <div className="w-full max-w-6xl mb-4 flex justify-start">
        <BackButton backHref="/" />
      </div>

      {/* HEADER */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          Welcome to IdeaVault Labs
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Your hub for developer tools, Visual Studio extensions, learning resources, and premium content.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full mb-12 items-start">

        {/* LEFT: MENU */}
        <div className="flex-1 min-w-0 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onClick={() => router.push(item.href)}
                className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg p-6 text-center transition transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  Click to explore {item.name.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: BUY ME COFFEE */}
        <div className="w-full lg:w-[300px] shrink-0 lg:sticky lg:top-20">
          <BuyMeCoffeeCard />
        </div>

      </div>

      {/* SUPPORT */}
      <div className="mt-12 text-center text-sm text-slate-600">
        Need help? Contact us at{" "}
        <a
          href="mailto:support@ideavaultlabs.com"
          className="text-blue-600 underline"
        >
          support@ideavaultlabs.com
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} IdeaVault Labs — All rights reserved
      </footer>
    </main>
  );
}