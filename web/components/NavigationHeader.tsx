"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface NavigationHeaderProps {
  title?: string;
  backHref?: string;
}

export default function NavigationHeader({
  title,
  backHref = "/tools",
}: NavigationHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Show back button only on nested routes
  const showBackButton =
    pathname.startsWith("/tools/") && pathname !== "/tools";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mb-8 flex items-center gap-4"
    >
      {showBackButton && (
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(backHref)}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back
        </motion.button>
      )}

      {title && (
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>
      )}
    </motion.div>
  );
}
