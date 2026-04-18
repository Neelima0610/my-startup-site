"use client";

import { useState } from "react";
import type { RazorpayResponse } from "@/types/razorpay";

export default function UpgradeButton() {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (document.getElementById("razorpay-script")) return resolve(true);

      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handleUpgrade = async () => {
    setLoading(true);

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert("Failed to load payment gateway");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/razorpay/create-subscription", {
        method: "POST",
      });

      const data = await res.json();

      if (!data.subscriptionId) {
        alert("Failed to create subscription");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: data.subscriptionId,
        name: "IdeaVault Labs Pro",
        description: "Unlock all developer tools & premium features",

        handler: async function (response: RazorpayResponse) {
          try {
            const verify = await fetch("/api/razorpay/verify-subscription", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const result = await verify.json();

            if (result.success) {
              alert("Payment successful! Pro access activated.");
            } else {
              alert("Payment received but verification failed.");
            }
          } catch {
            alert("Error verifying payment");
          } finally {
            setLoading(false);
          }
        },

        prefill: {
          name: "",
          email: "",
        },

        theme: {
          color: "#2563EB",
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded");
        setLoading(false);
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment initialization failed");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpgrade}
      disabled={loading}
      className="
        fixed top-4 right-4
        bg-blue-600 text-white font-semibold
        px-5 py-2 rounded-lg shadow-lg
        hover:bg-blue-700 transition
        z-50
      "
    >
      {loading ? "Processing..." : "Upgrade to Pro"}
    </button>
  );
}