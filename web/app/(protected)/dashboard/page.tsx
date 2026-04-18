"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const menuItems = [
    { name: "Products", href: "/tools" },
    { name: "VS Extensions", href: "/extensions/visual-studio" },
    { name: "VS Code Extensions", href: "/extensions/vs-code" },
    { name: "Azure DevOps", href: "/extensions/azure-devops" },
    // { name: "Study / Interview Prep", href: "/elearning" },
    { name: "eBooks", href: "/ebooks" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 flex flex-col items-center px-6 py-16">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to IdeaVault Labs
        </h1>
        <p className="text-slate-600 text-lg">
          Your hub for developer tools, Visual Studio extensions, learning resources, and premium content.
        </p>
      </div>

      {/* INFO BOX (IMPORTANT FOR TRUST) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow p-6 max-w-3xl text-center mb-12">
        <p className="text-gray-700 text-sm">
          You are logged into your IdeaVault account. From here, you can access purchased products,
          explore tools, and upgrade your plan for premium features.
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

      {/* SUPPORT / CONTACT (VERY IMPORTANT) */}
      <div className="mt-16 text-center text-sm text-slate-600">
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