"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
interface BackButtonProps {
  title?: string;
  backHref?: string;
}

export default function BackButton({ backHref = "/" }: BackButtonProps) {
  
  const router = useRouter();
  console.log("Rendering BackButton");
  return (
    // <button
    //   onClick={() => router.push("/")}
    //   style={{
    //     marginBottom: "1.5rem",
    //     display: "inline-flex",
    //     alignItems: "center",
    //     gap: "0.5rem",
    //     background: "none",
    //     border: "none",
    //     color: "#2563eb",
    //     cursor: "pointer",
    //     fontWeight: 600,
    //     fontSize: "0.95rem",
    //   }}
    // >
    //   ← Back to Plans
    // </button>
      <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mb-0 flex items-center gap-4"
    >
      {(
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(backHref)}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back
        </motion.button>
      )}

    </motion.div>
  );
}
