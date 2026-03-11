"use client";

import { signOut, useSession } from "next-auth/react";

export default function UserNav() {
  const { data: session } = useSession();

  if (!session) return null;

  const name = session.user?.name || session.user?.email || "User";
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="ml-auto">

      <div className="flex items-center gap-4 bg-transparent border border-slate-200 rounded-full px-6 py-2 hover:bg-white/20 transition">

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-semibold">
          {initial}
        </div>

        {/* User Info */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-slate-800">
            {session.user?.name || "Developer"}
          </span>
          <span className="text-xs text-slate-500">
            {session.user?.email}
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-300"></div>

        {/* Logout */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-sm font-medium text-slate-600 hover:text-red-500 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}