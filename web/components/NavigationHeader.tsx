"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";

interface NavigationHeaderProps {
  title?: string;
  backHref?: string;
}

export default function NavigationHeader({
  title,
  backHref = "/tools",
}: NavigationHeaderProps) {  

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="mb-8 flex items-center gap-4"
    >
      {/* Back Navigation */}
      <BackButton backHref={backHref} />

      {/* Title */}
      {title && (
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>
      )}
    </motion.div>
  );
}