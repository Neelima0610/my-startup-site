"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BackButtonProps {
  backHref?: string;
}

export default function BackButton({
  backHref = "/dashboard",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="mb-4"
    >
      <motion.button
        onClick={() => router.push(backHref)}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition"
        aria-label="Go back"
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Back</span>
      </motion.button>
    </motion.div>
  );
}