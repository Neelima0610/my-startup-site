"use client";

import { useEffect, useState } from "react";
import type { RazorpayResponse } from "@/types/razorpay";
import BackButton from "@/components/BackButton";

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
        alert("You already own this product. Please check your email.");
        return;
      }

      const options = {
        key: data.key,
        order_id: data.orderId,

        name: "IdeaVault Pro",
        description: "Lifetime license for developer tools and extensions",

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
              "✅ Payment successful!\n\nYour license key has been sent to your email."
            );
          } else {
            alert("Payment received but verification failed. Contact support.");
          }
        },

        prefill: {
          email,
        },

        theme: {
          color: "#6366f1",
        },
      };
      if (!window.Razorpay) {
        alert("Payment system not loaded. Please refresh and try again.");
        return;
      }
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
      <div className="w-full max-w-5xl mb-4 flex justify-start">
        <BackButton backHref="/" />
      </div>
      <h1 style={styles.title}>IdeaVault Pro</h1>

      <div style={styles.card}>
        <p style={styles.subtitle}>
          One-time purchase for lifetime access
        </p>

        <p style={styles.price}>₹199</p>

        <ul style={styles.features}>
          <li>✔ Full access to all premium tools</li>
          <li>✔ Visual Studio & VS Code extensions</li>
          <li>✔ Azure DevOps utilities</li>
          <li>✔ Lifetime updates</li>
          <li>✔ Priority email support</li>
        </ul>

        {/* DELIVERY INFO */}
        <p style={styles.info}>
          After successful payment, your license key will be delivered instantly to your email.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handlePay} style={styles.button} disabled={loading}>
          {loading ? "Processing..." : "Pay ₹199"}
        </button>

        {/* TRUST + POLICY */}
        <p style={styles.trust}>
          Secure payment powered by Razorpay
        </p>

        <p style={styles.policy}>
          By proceeding, you agree to our{" "}
          <a href="/terms">Terms</a>,{" "}
          <a href="/privacy">Privacy Policy</a>, and{" "}
          <a href="/refund">Refund Policy</a>.
        </p>
      </div>

      {/* SUPPORT */}
      <p style={styles.support}>
        Need help? Contact{" "}
        <a href="mailto:support@ideavaultlabs.com">
          support@ideavaultlabs.com
        </a>
      </p>
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
    padding: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "340px",
  },
  price: {
    fontSize: "28px",
    margin: "10px 0",
    fontWeight: "bold",
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    textAlign: "left",
  },
  info: {
    fontSize: "13px",
    color: "#374151",
    marginBottom: "10px",
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
  trust: {
    fontSize: "12px",
    marginTop: "10px",
    color: "#6b7280",
  },
  policy: {
    fontSize: "12px",
    marginTop: "8px",
    color: "#6b7280",
  },
  support: {
    marginTop: "20px",
    fontSize: "13px",
    color: "#374151",
  },
};