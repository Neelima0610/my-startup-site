"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: {
      new (options: object): {
        open: () => void;
      };
    };
  }
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
}

export default function UpgradeButton() {
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/create-subscription", {
        method: "POST",
      });
      const data: { subscriptionId?: string; error?: string } = await res.json();

      if (!data.subscriptionId) {
        alert("Failed to create subscription");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        subscription_id: data.subscriptionId,
        name: "IdeaVault Pro",
        description: "Access all developer tools",
        prefill: {
          name: "Your Name",
          email: "your@email.com",
        },
        theme: { color: "#2563EB" },
        handler: function (response: RazorpayPaymentResponse) {
          console.log("Payment Success:", response);
          alert("Payment Successful! Enjoy Pro features.");
          // TODO: mark user as Pro in DB/session
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Error creating subscription");
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
        hover:bg-blue-700 transition-colors
        z-50
      "
    >
      {loading ? "Processing..." : "Upgrade to Pro"}
    </button>
  );
}
