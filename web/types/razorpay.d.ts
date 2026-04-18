export {};

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

export type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature: string;
};

export type RazorpayInstance = {
  open: () => void;
};

const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

if (!key) {
  alert("Missing Razorpay key");
  setLoading(false);
  return;
}

const options: RazorpayOptions = {
  key,
  subscription_id: data.subscriptionId,

  name: "IdeaVault Labs Pro",
  description: "Unlock all developer tools & premium features",

  handler: async (response: RazorpayResponse) => {
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