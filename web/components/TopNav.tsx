"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UserNav from "./UserNav";
import MobileMenu from "./MobileMenu";

export default function TopNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [extOpen, setExtOpen] = useState(false);

  const navItem = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`transition hover:text-cyan-400 ${
          isActive ? "text-cyan-400 font-semibold" : "text-white"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

        {/* Logo */}
        <Link href={session ? "/dashboard" : "/"} className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="IdeaVault Labs"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden md:block text-lg font-bold">
            IdeaVault<span className="text-cyan-400">Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">

          {navItem("/", "Home")}
          {navItem("/tools", "Products")}

          {/* Extensions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExtOpen(true)}
            onMouseLeave={() => setExtOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400">
              Extensions
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  extOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {extOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[360px] bg-white text-slate-800 border rounded-xl shadow-2xl p-4 grid grid-cols-1 gap-2"
                >
                  <Link href="/extensions/visual-studio" className="p-2 rounded hover:bg-slate-100">
                    Visual Studio
                  </Link>
                  <Link href="/extensions/vs-code" className="p-2 rounded hover:bg-slate-100">
                    VS Code
                  </Link>
                  <Link href="/extensions/azure-devops" className="p-2 rounded hover:bg-slate-100">
                    Azure DevOps
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* {navItem("/elearning", "eLearning")} */}
          {navItem("/ebooks", "eBooks")}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {session ? (
            <UserNav />
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-800"
            >
              Sign In
            </Link>
          )}

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded hover:bg-slate-800"
          >
            <Menu size={22} />
          </button>

        </div>
      </div>

      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  );
}