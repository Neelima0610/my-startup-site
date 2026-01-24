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
      features: [
        "Basic AI tools access",
        "Limited usage",
        "Community support",
      ],
      color: "#3498db",
    },
    {
      name: "Pro",
      price: "$10 / month",
      features: [
        "Advanced AI tools",
        "Unlimited usage",
        "Priority support",
        "Early access to new features",
      ],
      color: "#f39c12",
    },
  ];

  return (
    // <div className="p-6 max-w-4xl mx-auto">
    //   {!showTools ? (
    //     <>
    //       <h1 className="text-4xl font-bold mb-4">Hi, I’m Neelima 👋</h1>
    //       <p className="mb-8 text-gray-700">
    //         I build and share small startup ideas, AI prompts, and developer tools. This site is my personal product studio — where ideas turn into shipped products.
    //       </p>

    //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    //         <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer">
    //           <h2 className="font-bold text-lg mb-2">💡 Startup Ideas</h2>
    //           <p className="text-gray-600">Small, validated ideas with clear execution paths.</p>
    //         </div>

    //         <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer">
    //           <h2 className="font-bold text-lg mb-2">🧠 AI Prompts</h2>
    //           <p className="text-gray-600">Carefully designed prompts for developers and builders.</p>
    //         </div>

    //         <div
    //           className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer"
    //           onClick={() => setShowTools(true)}
    //         >
    //           <h2 className="font-bold text-lg mb-2">🛠 Apps & Tools</h2>
    //           <p className="text-gray-600">Developer tools, CLIs, and extensions I create.</p>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <div>
    //       <button
    //         className="mb-6 text-blue-500 underline"
    //         onClick={() => setShowTools(false)}
    //       >
    //         ← Back
    //       </button>

    //       <h2 className="text-2xl font-bold mb-4">Apps & Tools</h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //         {tools.map((tool) => (
    //           <Link
    //             key={tool.name}
    //             href={tool.href}
    //             className="p-4 bg-white rounded-xl shadow hover:shadow-lg block"
    //           >
    //             <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
    //             <p className="text-gray-600">{tool.description}</p>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
   <main
      style={{
        flex: 1,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
        overflowY: "auto", // scroll when content exceeds height
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to IdeaVault</h1>
      <p style={{ color: "#555", textAlign: "center", maxWidth: "700px" }}>
        Select the plan that fits your workflow. Free access for basic use, Pro for advanced
        features and priority support.
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              border: selectedPlan === plan.name ? `3px solid ${plan.color}` : "1px solid #ccc",
              borderRadius: "12px",
              padding: "2rem",
              width: "260px",
              cursor: "pointer",
              boxShadow:
                selectedPlan === plan.name
                  ? "0 8px 20px rgba(0,0,0,0.15)"
                  : "0 4px 10px rgba(0,0,0,0.05)",
              transition: "all 0.3s",
              backgroundColor: selectedPlan === plan.name ? "#fdfdfd" : "#fff",
            }}
            onClick={() => {
              setSelectedPlan(plan.name);
              if (plan.name === "Free") router.push("/tools");
            }}
          >
            <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem", color: plan.color }}>
              {plan.name}
            </h2>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
              {plan.price}
            </p>

            <ul style={{ textAlign: "left", marginBottom: "1.5rem", paddingLeft: "1rem" }}>
              {plan.features.map((feature) => (
                <li key={feature} style={{ marginBottom: "0.5rem" }}>
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={(e) => {
                  e.stopPropagation();
                  if (plan.name === "Free") router.push("/tools");
                  if (plan.name === "Pro")
                    alert("Pro upgrade coming soon 🚀");
                }}
              style={{
                padding: "0.6rem 1.2rem",
                border: "none",
                backgroundColor: selectedPlan === plan.name ? plan.color : "#eee",
                color: selectedPlan === plan.name ? "#fff" : "#333",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s"                               
              }}
            >
              {selectedPlan === plan.name
                ? "Selected"
                : plan.name === "Pro"
                ? "Upgrade"
                : "Continue with Free"}
            </button>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#999" }}>
        IdeaVault © 2026 - AI tools for developers
      </footer>
    </main>
  );
}
