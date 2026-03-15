"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BackButtonProps {
  title?: string;
  backHref?: string;
}

export default function BackButton({ backHref = "/dashboard", title = "Back" }: BackButtonProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mb-4"
    >
      <motion.button
        onClick={() => router.push(backHref)}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-800 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors duration-200"
      >
        <span className="text-lg font-bold">←</span>
        <span className="text-sm md:text-base">BACK</span>
      </motion.button>
    </motion.div>
  );
}