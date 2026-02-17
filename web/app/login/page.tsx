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
        gap: "1.5rem",
        fontFamily: "sans-serif",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome to IdeaVault
      </h1>

      <p style={{ fontSize: "1rem", color: "#555", textAlign: "center", maxWidth: "400px" }}>
        Sign in to start using AI-powered developer tools
      </p>

      {/* GitHub Sign-in Button */}
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
          width: "250px",
        }}
      >
        Sign in with GitHub
      </button>

      {/* Google / Gmail Sign-in Button */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          width: "250px",
        }}
      >
        Sign in with Google
      </button>

      <footer style={{ fontSize: "0.85rem", color: "#999", marginTop: "2rem" }}>
        Your data is safe with us
      </footer>
    </main>
  );
}
