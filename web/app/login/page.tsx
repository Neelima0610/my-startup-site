"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  type Step = "email" | "login" | "signup";
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const {data:session,status}=useSession()  

  useEffect(()=>{

  if(session){
  router.replace("/dashboard")
  }

  },[session])

  if(status==="loading") return null
  return (
    <main className="min-h-screen flex bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-slate-800">            

      {/* RIGHT PANEL */}
      <div className="flex w-full items-center justify-center px-6 py-12">

        <div className="w-full max-w-md bg-white/80 backdrop-blur border border-cyan-100 shadow-xl rounded-2xl p-10">

          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              {isSignup ? "Create your account" : "Sign in to your account"}
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Secure access to IdeaVault
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mt-8 bg-cyan-50 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
                !isSignup
                  ? "bg-white text-cyan-700 shadow"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
                isSignup
                  ? "bg-white text-cyan-700 shadow"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* FORM */}
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

              if (result?.error) {
                alert("Invalid credentials");
              } else {
                router.push("/");
              }
            }}
            className="mt-8 space-y-5"
          >

            {/* EMAIL STEP */}
            {step === "email" && (
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Work Email
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-cyan-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 shadow-md transition"
                >
                  Continue
                </button>
              </div>
            )}

            {/* LOGIN STEP */}
            {step === "login" && (
              <>
                <div className="text-sm text-slate-500">
                  Signing in as <span className="font-medium">{email}</span>
                </div>

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />

                <button
                  type="button"
                  onClick={() => router.push("/forgot-password")}
                  className="text-xs text-cyan-700 hover:underline text-left"
                >
                  Forgot password?
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 shadow-md transition"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="text-xs text-slate-500 hover:underline"
                >
                  Use different email
                </button>
              </>
            )}

            {/* SIGNUP STEP */}
            {step === "signup" && (
              <>
                <div className="text-sm text-slate-500">
                  Creating account for <span className="font-medium">{email}</span>
                </div>

                <input
                  name="username"
                  placeholder="Full Name"
                  required
                  className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Create Password"
                  required
                  className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 shadow-md transition"
                >
                  Create Account
                </button>

                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="text-xs text-slate-500 hover:underline"
                >
                  Use different email
                </button>
              </>
            )}

          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="px-3 text-xs text-slate-400 uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3">

            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full border border-slate-200 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50 transition"
            >
              Continue with Google
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full border border-slate-200 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50 transition"
            >
              Continue with GitHub
            </button>

          </div>

          <p className="text-xs text-slate-400 text-center mt-8">
            Enterprise-grade security and compliance
          </p>

        </div>

      </div>
    </main>
  );
}