"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const menuItems = [
    { name: "Products", href: "/tools" },
    { name: "Extensions", href: "/extensions/visual-studio" },
    // { name: "eLearning", href: "/elearning" },
    { name: "eBooks", href: "/ebooks" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-6"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-10 text-center">
              <h2 className="text-xl font-semibold">IdeaVault Labs</h2>
              <p className="text-sm text-gray-500">
                Developer Tools & Learning Platform
              </p>
            </div>

            {/* Menu */}
            <nav className="flex flex-col items-center gap-3 w-full max-w-sm">
              {menuItems.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-lg font-medium text-gray-800 bg-gray-100 py-3 rounded-xl border hover:bg-gray-200 transition"
                >
                  {m.name}
                </Link>
              ))}

              {/* SaaS upgrade hint (important for Razorpay perception) */}
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="w-full text-center text-lg font-semibold text-black bg-yellow-400 py-3 rounded-xl hover:bg-yellow-300 transition mt-4"
              >
                Upgrade to Pro
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}