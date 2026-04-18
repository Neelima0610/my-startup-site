"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Step = "email" | "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, [session, router]);

  if (status === "loading") return null;

  const handleEmailCheck = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/check-email", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStep(data.exists ? "login" : "signup");
    } catch (err) {
      setError("Failed to check email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    try {
      // Signup
      if (step === "signup") {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({ email, password, username }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Signup failed");
      }

      // Login
      const result = await signIn("credentials", {
        identifier: email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
        return;
      }

      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex bg-gradient-to-br from-sky-100 via-cyan-100 to-amber-100">
      <div className="flex w-full items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg border shadow-2xl rounded-3xl p-10">

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold">
              {step === "signup" ? "Create your account" : "Sign in to IdeaVault"}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Secure access to your developer dashboard
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={(e) => {
              if (step === "email") {
                e.preventDefault();
                handleEmailCheck();
              } else {
                handleAuth(e);
              }
            }}
            className="space-y-5"
          >

            {/* EMAIL STEP */}
            {step === "email" && (
              <>
                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg"
                >
                  {loading ? "Checking..." : "Continue"}
                </button>
              </>
            )}

            {/* LOGIN */}
            {step === "login" && (
              <>
                <p className="text-sm text-gray-500">
                  Signing in as <span className="font-medium">{email}</span>
                </p>

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full border rounded-lg px-4 py-3"
                />

                <div className="flex justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                    className="text-cyan-700"
                  >
                    Forgot password?
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="text-gray-500"
                  >
                    Change email
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </>
            )}

            {/* SIGNUP */}
            {step === "signup" && (
              <>
                <p className="text-sm text-gray-500">
                  Creating account for <span className="font-medium">{email}</span>
                </p>

                <input
                  name="username"
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Create Password"
                  required
                  className="w-full border rounded-lg px-4 py-3"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>

                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="text-xs text-gray-500"
                >
                  Change email
                </button>
              </>
            )}

          </form>

          {/* OAuth */}
          <div className="mt-8 space-y-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full border py-3 rounded-lg"
            >
              Continue with Google
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full border py-3 rounded-lg"
            >
              Continue with GitHub
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}