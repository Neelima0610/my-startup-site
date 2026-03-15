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
    { name: "eLearning", href: "/elearning" },
    { name: "eBooks", href: "/ebooks" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className=" inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />

          {/* Full-screen menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="inset-0 z-50 flex flex-col items-center justify-center bg-gray py-8"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-2 text-black bg-white p-2 rounded hover:bg-slate-700"
            >
              <X size={28} />
            </button>

            {/* Menu items */}
            <nav className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
              {menuItems.map((m) => (
               <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className="
                  w-[80%]
                  text-center
                  text-xl
                  font-semibold
                  text-black
                  bg-white
                  py-2
                  rounded-lg
                  border
                  border-gray-600
                  transition
                  duration-200
                  transform
                  hover:bg-gray-300
                  hover:text-black
                  hover:scale-105
                "
              >
                {m.name}
              </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}