"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  type Step = "email" | "login" | "signup";
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    

    if (isSignup) {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        setLoading(false);
        return;
      }
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      router.push("/");
    }
  }

  return (
  <main className="min-h-screen flex bg-stone-100">
    
    {/* LEFT PANEL */}
    <div className="hidden lg:flex w-1/2 bg-stone-200 relative">

      {/* Subtle Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-800" />

      <div className="p-20 flex flex-col justify-center max-w-xl">

        <h1 className="text-3xl font-semibold text-stone-900 leading-tight">
          AI Infrastructure for Engineering Organizations
        </h1>

        <p className="mt-6 text-stone-600 text-sm leading-relaxed">
          IdeaVault provides structured knowledge management and AI-assisted 
          workflows built for scale, governance, and long-term maintainability.
        </p>

        {/* Value Sections */}
        <div className="mt-12 space-y-8">

          <div>
            <h3 className="text-sm font-semibold text-cyan-800 uppercase tracking-wide">
              Security & Compliance
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Enterprise-grade authentication, encrypted data handling,
              and architecture designed with compliance standards in mind.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-800 uppercase tracking-wide">
              Scalable Architecture
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Built to support distributed engineering teams and growing
              knowledge bases without performance compromise.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-800 uppercase tracking-wide">
              Operational Clarity
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Centralized decision tracking and AI-enhanced retrieval
              reduce context loss and engineering friction.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 text-xs text-stone-500">
          Trusted by modern engineering teams.
          <br />
          © {new Date().getFullYear()} IdeaVault Inc.
        </div>
      </div>
    </div>

    {/* RIGHT PANEL (FORM) */}
    <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white border border-stone-300 shadow-sm rounded-xl p-10">

        <div className="text-center">
          <h2 className="text-xl font-semibold text-stone-800">
            {isSignup ? "Create your account" : "Sign in to your account"}
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            Secure access to IdeaVault
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mt-8 bg-stone-200 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setIsSignup(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
              !isSignup
                ? "bg-white text-cyan-800 shadow-sm"
                : "text-stone-600 hover:text-stone-800"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsSignup(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
              isSignup
                ? "bg-white text-cyan-800 shadow-sm"
                : "text-stone-600 hover:text-stone-800"
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
              email,
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
              <label className="block text-xs font-medium text-stone-600 mb-1">
                Work Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-cyan-800 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 transition"
              >
                Continue
              </button>
            </div>
          )}

          {/* LOGIN STEP */}
          {step === "login" && (
            <>
              <div className="text-sm text-stone-500">
                Signing in as <span className="font-medium">{email}</span>
              </div>

              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-800 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 transition"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-xs text-stone-500 hover:underline"
              >
                Use different email
              </button>
            </>
          )}

          {/* SIGNUP STEP */}
          {step === "signup" && (
            <>
              <div className="text-sm text-stone-500">
                Creating account for <span className="font-medium">{email}</span>
              </div>

              <input
                name="username"
                placeholder="Full Name"
                required
                className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700"
              />

              <input
                name="password"
                type="password"
                placeholder="Create Password"
                required
                className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-800 text-white py-2.5 rounded-md text-sm font-medium hover:bg-cyan-700 transition"
              >
                Create Account
              </button>

              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-xs text-stone-500 hover:underline"
              >
                Use different email
              </button>
            </>
          )}
        </form>


        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-stone-300" />
          <span className="px-3 text-xs text-stone-400 uppercase tracking-wider">
            or continue with
          </span>
          <div className="flex-1 h-px bg-stone-300" />
        </div>

        <div className="space-y-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full border border-stone-300 py-2.5 rounded-md text-sm font-medium hover:bg-stone-50 transition"
          >
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full border border-stone-300 py-2.5 rounded-md text-sm font-medium hover:bg-stone-50 transition"
          >
            Continue with GitHub
          </button>
        </div>

        <p className="text-xs text-stone-400 text-center mt-8">
          Enterprise-grade security and compliance
        </p>
      </div>
    </div>
  </main>
  );
}
