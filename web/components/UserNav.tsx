"use client";

import { signOut, useSession } from "next-auth/react";

export default function UserNav() {
  const { data: session } = useSession();

  if (!session) return null; // Not logged in

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <span>👤 {session.user?.name || session.user?.email}</span>
      <button
        style={{
          padding: "0.3rem 0.6rem",
          background: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Logout
      </button>
    </div>
  );
}
