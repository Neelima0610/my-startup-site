"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for exploring IdeaVault tools",
      features: [
        "Basic AI tools access",
        "Limited usage",
        "Community support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$10 / month",
      description: "For developers who want full power",
      features: [
        "Advanced AI tools",
        "Unlimited usage",
        "Priority support",
        "Early access to new features",
      ],
      highlight: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 flex flex-col items-center justify-center px-6 py-16">

      {/* HEADER */}
      <div className="text-center max-w-2xl mb-14">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Choose your IdeaVault plan
        </h1>

        <p className="text-slate-600 text-lg">
          Start with the free tier or upgrade to Pro for unlimited access to
          advanced AI-powered developer tools.
        </p>
      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">

        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => {
              setSelectedPlan(plan.name);
              if (plan.name === "Free") router.push("/tools");
            }}
            className={`cursor-pointer rounded-2xl border p-8 transition-all
              ${
                plan.highlight
                  ? "border-cyan-600 shadow-xl bg-white"
                  : "border-slate-200 shadow-lg bg-white/80 backdrop-blur"
              }
              ${
                selectedPlan === plan.name
                  ? "ring-2 ring-cyan-500 scale-[1.02]"
                  : "hover:shadow-xl"
              }`}
          >
            {/* PLAN TITLE */}
            <h2 className="text-2xl font-semibold text-slate-800 mb-1">
              {plan.name}
            </h2>

            <p className="text-slate-500 text-sm mb-6">
              {plan.description}
            </p>

            {/* PRICE */}
            <p className="text-3xl font-bold text-slate-900 mb-6">
              {plan.price}
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-cyan-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();

                if (plan.name === "Free") router.push("/tools");
                if (plan.name === "Pro")
                  alert("Pro upgrade coming soon 🚀");
              }}
              className={`w-full py-3 rounded-lg font-medium transition
                ${
                  plan.highlight
                    ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              {plan.name === "Free"
                ? "Continue with Free"
                : "Upgrade to Pro"}
            </button>

          </div>
        ))}

      </div>

      {/* FOOTER */}
      <footer className="mt-16 text-sm text-slate-500">
        IdeaVault © {new Date().getFullYear()} — AI tools for developers
      </footer>

    </main>
  );
}