"use client";

import { useEffect, useState } from "react";

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayInstance = {
  open: () => void;
};

type RazorpayConstructor = new (options: {
  key: string;
  order_id: string;
  name: string;
  description: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    email?: string;
  };
  theme: {
    color: string;
  };
}) => RazorpayInstance;

declare global {
  interface Window {
    RazorpayConstructor: RazorpayConstructor;
  }
}

export default function PricingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePay = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.alreadyPurchased) {
        alert(
          "You already have a valid license.\n\nPlease check your email or use your existing key in the extension."
        );
        return;
      }

      if (!data.orderId) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: data.key,
        order_id: data.orderId,

        name: "IdeaVault Pro",
        description: "One-time purchase",

        handler: async function (response: RazorpayResponse) {
          const verify = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const result = await verify.json();

          if (result.success) {
            alert(
              "✅ Payment successful!\n\nYour license key has been sent to your email.\n\nPlease check your inbox."
            );
          } else {
            alert("Payment done, but something went wrong");
          }
        },

        prefill: {
          email,
        },

        theme: {
          color: "#6366f1",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upgrade to Pro</h1>

      <div style={styles.card}>
        <h2>IdeaVault Pro</h2>

        <p style={styles.price}>₹199 (One-time)</p>

        <ul style={styles.features}>
          <li>✔ Unlimited Usage</li>
          <li>✔ Premium Features</li>
          <li>✔ Priority Support</li>
        </ul>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handlePay} style={styles.button} disabled={loading}>
          {loading ? "Processing..." : "Buy Now"}
        </button>
        <br / ><br / >
        <button
        onClick={async () => {
          if (!email) {
            alert("Enter your email first");
            return;
          }

          await fetch("/api/license/resend", {
            method: "POST",
            body: JSON.stringify({ email }),
          });

          alert("License sent to your email");
        }}
        style={styles.button}
        disabled={loading}
      >
        Resend License
      </button>
            </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f9fafb",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "320px",
  },
  price: {
    fontSize: "24px",
    margin: "10px 0",
    fontWeight: "bold",
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
  },
};