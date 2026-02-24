"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    alert("If account exists, reset link sent.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h1 className="text-xl font-semibold mb-6">
          Reset your password
        </h1>

        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-cyan-800 text-white py-2 rounded">
          Send Reset Link
        </button>
      </form>
    </main>
  );
}