"use client";

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import type { RazorpayResponse } from "@/types/razorpay";
import BackButton from "@/components/BackButton";

export default function PricingPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const email = session?.user?.email || "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePay = async () => {
    if (!session) {
      alert("Please login to continue");
      signIn();
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.alreadyPurchased) {
        alert("You already own this product.");
        return;
      }

      const options = {
        key: data.key,
        order_id: data.orderId,
        name: "IdeaVault Pro",
        description: "Lifetime developer tools",

        handler: async function (response: RazorpayResponse) {
          const verify = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const result = await verify.json();

          if (result.success) {
            alert("✅ Payment successful!");
          } else {
            alert("Verification failed.");
          }
        },

        prefill: { email },
        theme: { color: "#6366f1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 px-6 py-16">

      {/* Back */}
      <div className="max-w-6xl mx-auto mb-6">
        <BackButton backHref="/" />
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          IdeaVault Labs Pricing
        </h1>
        <p className="text-gray-600">
          Choose the plan that fits your workflow
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* PRO PLAN */}
        <div className="relative bg-white border-2 border-indigo-500 rounded-2xl shadow-xl p-8 flex flex-col">

          <span className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold mb-2">Pro</h3>

          <p className="text-gray-500 text-sm mb-4">
            Perfect for individual developers
          </p>

          <p className="text-3xl font-bold mb-6">₹999</p>

          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li>✔ All developer tools</li>
            <li>✔ VS & VS Code extensions</li>
            <li>✔ Azure DevOps utilities</li>
            <li>✔ Lifetime updates</li>
            <li>✔ Priority support</li>
          </ul>

          {!session ? (
            <button
              onClick={() => signIn()}
              className="mt-auto bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
            >
              Login to Purchase
            </button>
          ) : (
            <button
              onClick={handlePay}
              disabled={loading}
              className="mt-auto bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
            >
              {loading ? "Processing..." : "Buy Now"}
            </button>
          )}
        </div>

        {/* TEAM PLAN */}
        <div className="bg-white border rounded-2xl shadow-lg p-8 flex flex-col">

          <h3 className="text-xl font-semibold mb-2">Team</h3>

          <p className="text-gray-500 text-sm mb-4">
            For small teams & startups
          </p>

          <p className="text-3xl font-bold mb-6">₹2,999</p>

          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Up to 5 users</li>
            <li>✔ Shared license</li>
            <li>✔ Team onboarding support</li>
          </ul>

          <button
            onClick={() => alert("Coming soon")}
            className="mt-auto border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Coming Soon
          </button>
        </div>

        {/* ENTERPRISE PLAN */}
        <div className="bg-white border rounded-2xl shadow-lg p-8 flex flex-col">

          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>

          <p className="text-gray-500 text-sm mb-4">
            For large organizations
          </p>

          <p className="text-3xl font-bold mb-6">Custom</p>

          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li>✔ Unlimited users</li>
            <li>✔ Dedicated support</li>
            <li>✔ Custom integrations</li>
            <li>✔ SLA & onboarding</li>
          </ul>

          <a
            href="mailto:support@ideavaultlabs.com"
            className="mt-auto border border-gray-300 py-3 rounded-lg text-center hover:bg-gray-100 transition"
          >
            Contact Sales
          </a>
        </div>

      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-gray-500 mt-12">
        Secure payments powered by Razorpay
      </p>

    </main>
  );
}