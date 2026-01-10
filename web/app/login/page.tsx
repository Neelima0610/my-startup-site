"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome to IdeaVault
      </h1>

      <p style={{ fontSize: "1rem", color: "#555", textAlign: "center" }}>
        Sign in to start using AI-powered developer tools
      </p>

      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Sign in with GitHub
      </button>

      <footer style={{ fontSize: "0.85rem", color: "#999" }}>
        Your data is safe with us
      </footer>
    </main>
  );
}
