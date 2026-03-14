"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Menu, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"
import UserNav from "./UserNav";
import MobileMenu from "./MobileMenu";
import CommandPalette from "./CommandPalette";

export default function TopNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [extOpen, setExtOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const dashboardLink = session ? "/dashboard" : "/login";

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition hover:text-cyan-600 ${
        pathname === href ? "text-cyan-600 font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700 sticky top-0 z-50 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-4">

        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold text-white">
            IdeaVault<span className="text-cyan-400">Labs</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="flex justify-center gap-10 text-sm font-medium text-white">

          {navItem("/products","Products")}

          {/* Mega Menu */}
          <div
            className="relative"
            onMouseEnter={()=>setExtOpen(true)}
            onMouseLeave={()=>setExtOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400">
              Extensions
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${extOpen ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
            {extOpen && (
              <motion.div
                initial={{opacity:0, y:15, scale:0.95}}
                animate={{opacity:1, y:0, scale:1}}
                exit={{opacity:0, y:10, scale:0.95}}
                transition={{duration:0.2}}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] bg-white text-slate-800 border rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4"
                >

                <Link href="/extensions/visual-studio" className="p-3 rounded-lg hover:bg-slate-100">
                  Visual Studio
                </Link>

                <Link href="/extensions/vs-code" className="p-3 rounded-lg hover:bg-slate-100">
                  VS Code
                </Link>

                <Link href="/extensions/azure-devops" className="p-3 rounded-lg hover:bg-slate-100">
                  Azure DevOps
                </Link>

              </motion.div>
            )}
            </AnimatePresence>
          </div>

          {navItem("/elearning","eLearning")}
          {navItem("/ebooks","eBooks")}         

        </nav>

        {/* Right Side */}
        <div className="flex justify-end items-center gap-4">

          {/* Command palette */}
          <button
            onClick={()=>setCmdOpen(true)}
            className="p-2 rounded hover:bg-slate-100"
          >
            <Command size={18}/>
          </button>

          {session ? (
            <UserNav />
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border rounded-lg hover:bg-slate-100"
            >
              Sign In
            </Link>
          )}

          {/* Mobile menu */}
          <button
            onClick={()=>setMenuOpen(true)}
            className="md:hidden"
          >
            <Menu/>
          </button>

        </div>

      </div>

      <MobileMenu open={menuOpen} setOpen={setMenuOpen}/>
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen}/>

    </header>
  );
}