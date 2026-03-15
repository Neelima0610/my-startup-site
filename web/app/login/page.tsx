"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  type Step = "email" | "login" | "signup";
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, [session]);

  if (status === "loading") return null;

  return (
    <main className="min-h-screen flex bg-gradient-to-br from-sky-100 via-cyan-100 to-amber-100 text-gray-900">
      
      <div className="flex w-full items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg border border-cyan-100 shadow-2xl rounded-3xl p-10">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">
              {isSignup ? "Create your account" : "Sign in to IdeaVault"}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Secure access to your developer dashboard
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 bg-cyan-50 rounded-xl p-1 shadow-inner">
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                !isSignup
                  ? "bg-white text-cyan-700 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                isSignup
                  ? "bg-white text-cyan-700 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              if (step === "email") {
                const res = await fetch("/api/auth/check-email", {
                  method: "POST",
                  body: JSON.stringify({ email }),
                  headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                setStep(data.exists ? "login" : "signup");
                setLoading(false);
                return;
              }

              const formData = new FormData(e.currentTarget);
              const password = formData.get("password") as string;
              const username = formData.get("username") as string;

              if (step === "signup") {
                const res = await fetch("/api/auth/signup", {
                  method: "POST",
                  body: JSON.stringify({ email, password, username }),
                  headers: { "Content-Type": "application/json" },
                });
                if (!res.ok) {
                  alert("Error creating account");
                  setLoading(false);
                  return;
                }
              }

              const result = await signIn("credentials", {
                identifier: email,
                password,
                redirect: false,
              });

              setLoading(false);

              if (result?.error) alert("Invalid credentials");
              else router.push("/dashboard");
            }}
            className="space-y-5"
          >

            {/* Email Step */}
            {step === "email" && (
              <div className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 shadow-lg transition"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Login Step */}
            {step === "login" && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Signing in as <span className="font-medium">{email}</span>
                </p>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm"
                />
                <div className="flex justify-between items-center text-xs text-cyan-700">
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                    className="hover:underline"
                  >
                    Forgot password?
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="text-gray-500 hover:underline"
                  >
                    Use different email
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 shadow-lg transition"
                >
                  Sign In
                </button>
              </div>
            )}

            {/* Signup Step */}
            {step === "signup" && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Creating account for <span className="font-medium">{email}</span>
                </p>
                <input
                  name="username"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Create Password"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 shadow-lg transition"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="text-xs text-gray-500 hover:underline"
                >
                  Use different email
                </button>
              </div>
            )}

          </form>

          {/* OAuth Buttons */}
          <div className="mt-8 space-y-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full border border-gray-200 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm"
            >
              Continue with Google
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full border border-gray-200 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm"
            >
              Continue with GitHub
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            Enterprise-grade security and compliance
          </p>

        </div>
      </div>
    </main>
  );
}