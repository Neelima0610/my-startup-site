"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function UserNav() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const isPro = !!session?.user?.isPro;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return (
      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  if (!session) return null;

  return (
    <div className="relative" ref={ref}>

      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 border rounded-full px-3 py-2 bg-white hover:shadow-sm"
      >
        <div className="w-8 h-8 bg-cyan-600 text-white flex items-center justify-center rounded-full text-sm font-semibold">
          {session.user?.name?.charAt(0)?.toUpperCase()}
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-800">
          <span className="font-medium">
            {session.user?.name || "User"}
          </span>

          <span className="text-gray-400">|</span>

          <span className="text-gray-500">
            {session.user?.email}
          </span>
        </div>

        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            isPro
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {isPro ? "Pro" : "Free"}
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
      {open && (
        <div className="
          absolute right-0 mt-3 w-56 z-50 overflow-hidden
          bg-white text-gray-800
          border border-gray-200
          rounded-xl shadow-xl
        ">

          {/* Profile */}
          <button
            onClick={() => router.push("/profile")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            Profile
          </button>

          {/* Dashboard */}
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            Dashboard
          </button>

          {/* Upgrade */}
          {!isPro && (
            <button
              onClick={() => router.push("/pricing")}
              className="
                w-full text-left px-4 py-2
                bg-yellow-50 text-yellow-800
                hover:bg-yellow-100 transition
                font-medium
              "
            >
              🚀 Upgrade to Pro
            </button>
          )}

          {/* Divider */}
          <div className="border-t my-1" />

          {/* Logout */}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="
              w-full text-left px-4 py-2
              text-red-600 hover:bg-red-50
              transition
            "
          >
            Logout
          </button>

        </div>
      )}
      </AnimatePresence>
    </div>
  );
}