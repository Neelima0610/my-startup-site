"use client";

import UserNav from "@/components/UserNav";
import { motion } from "framer-motion";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
    >
       <header className="flex items-center pl-6 pr-2 py-3 border-b border-slate-200">        
          <UserNav />        
      </header>
      {children}
    </motion.div>
  );
}
