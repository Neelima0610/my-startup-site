"use client";

import { useState, useEffect } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";

export default function ErrorLens() {
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"free" | "premium">("free");

  const isProUser = false; // ⚠️ Replace with real backend session check later

  type ErrorHistoryItem = {
    id: string;
    errorText: string;
    result: string;
    timestamp: number;
  };

  const [history, setHistory] = useState<ErrorHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("errorlens-history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  async function analyzeError() {
    if (activeTab === "premium" && !isProUser) {
      router.push("/pricing");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/analyze-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ errorText }),
      });

      const data = await res.json();

      let formattedResult = data.result;
      try {
        const parsed = JSON.parse(data.result);
        formattedResult = JSON.stringify(parsed, null, 2);
      } catch {}

      setResult(formattedResult);

      const newItem = {
        id: crypto.randomUUID(),
        errorText,
        result: data.result,
        timestamp: Date.now(),
      };

      const updated = [newItem, ...history].slice(0, 5);
      setHistory(updated);
      localStorage.setItem("errorlens-history", JSON.stringify(updated));
    } catch {
      setResult("Error analyzing the stack trace");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  function handleClear() {
    setResult(null);
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">

      {/* Header */}
      <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
        <BackButton backHref="/tools" />

        <h1 className="text-2xl font-bold">🧠 ErrorLens</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("free")}
            className={`px-3 py-1 rounded-xl font-medium ${
              activeTab === "free"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Free
          </button>

          <button
            onClick={() => setActiveTab("premium")}
            className={`px-3 py-1 rounded-xl font-medium ${
              activeTab === "premium"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Premium
          </button>
        </div>
      </div>

      {/* Premium Gate */}
      {activeTab === "premium" && !isProUser ? (
        <div className="flex items-center justify-center h-[70vh] text-center">
          <div>
            <p className="text-xl font-semibold mb-4">
              🚀 Premium Features Locked
            </p>

            <p className="text-gray-600 mb-6">
              Unlock advanced debugging, AI fixes, and unlimited analysis.
            </p>

            <button
              onClick={() => router.push("/pricing")}
              className="px-6 py-2 rounded-xl bg-black text-white"
            >
              Upgrade to Pro (Starts from ₹999)
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* INPUT */}
          <div className="bg-white rounded-2xl shadow border flex flex-col">
            <div className="p-4 border-b font-semibold">
              🔍 Error / Stack Trace
            </div>

            <textarea
              className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none"
              value={errorText}
              onChange={(e) => setErrorText(e.target.value)}
            />

            <div className="p-4 border-t">
              <button
                onClick={analyzeError}
                disabled={loading || !errorText}
                className="w-full py-2 rounded-xl bg-black text-white"
              >
                {loading ? "Analyzing…" : "Analyze Error"}
              </button>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="bg-white rounded-2xl shadow border flex flex-col">
            <div className="p-4 border-b flex justify-between">
              <span className="font-semibold">🧠 Output</span>

              <div className="flex gap-2">
                <button onClick={handleCopy}>📋</button>
                <button onClick={handleClear}>🗑</button>
              </div>
            </div>

            <div className="p-4 flex-1 overflow-auto">
              {result ? (
                <pre className="whitespace-pre-wrap text-sm">{result}</pre>
              ) : (
                <p className="text-gray-400">Run analysis to see results</p>
              )}

              {copied && (
                <p className="text-green-600 text-xs mt-2">Copied!</p>
              )}
            </div>
          </div>

          {/* HISTORY */}
          <div className="bg-white rounded-2xl shadow border flex flex-col">
            <div className="p-4 border-b flex justify-between">
              <span className="font-semibold">🕑 History</span>

              <button onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? "Hide" : "Show"}
              </button>
            </div>

            {showHistory && (
              <div className="p-3 overflow-auto">
                {history.length === 0 ? (
                  <p className="text-sm text-gray-400">
                    No history yet
                  </p>
                ) : (
                  history.map((h) => (
                    <div
                      key={h.id}
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => {
                        setErrorText(h.errorText);
                        setResult(h.result);
                      }}
                    >
                      <div className="text-xs text-gray-500">
                        {new Date(h.timestamp).toLocaleString()}
                      </div>
                      <div className="text-sm truncate">
                        {h.errorText.split("\n")[0]}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}