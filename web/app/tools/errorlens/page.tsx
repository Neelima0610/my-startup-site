"use client";

import { useState, useEffect } from "react";

export default function ErrorLens() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"free" | "premium">("free");
  const [hasPremium, setHasPremium] = useState(false); // toggle after payment

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
    if (activeTab === "premium" && !hasPremium) {
      alert("Premium features require payment!");
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
      setResult(data.analysis);

      const newItem = {
        id: crypto.randomUUID(),
        errorText,
        result: data.analysis,
        timestamp: Date.now(),
      };
      const updated = [newItem, ...history].slice(0, 3);
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
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
        <h1 className="text-2xl font-bold">🧠 ErrorLens</h1>
        {/* Tab navigation */}
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

      {/* Main content */}
      <div className="flex-1 p-6 flex flex-col min-h-0">
        {/* Tab Content */}
        {activeTab === "premium" && !hasPremium ? (
          <div className="flex-1 flex items-center justify-center text-center">
            <div>
              <p className="text-xl font-semibold mb-4">
                🚀 Premium Features Locked
              </p>
              <p className="text-gray-600 mb-6">
                Upgrade to unlock unlimited analysis, detailed suggestions, and more.
              </p>
              <button
                className="px-6 py-2 rounded-xl bg-black text-white hover:opacity-90"
                onClick={() => setHasPremium(true)}
              >
                Unlock Premium (Demo)
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">
            {/* LEFT: Error Input */}
            <div className="flex flex-col bg-white rounded-2xl shadow border min-h-0">
              <div className="p-4 border-b">
                <h2 className="font-semibold">🔍 Error / Stack Trace</h2>
              </div>
              <textarea
                className="flex-1 p-4 font-mono text-sm resize-none overflow-auto min-h-0 focus:outline-none"
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

            {/* MIDDLE: Output */}
            <div className="flex flex-col bg-white rounded-2xl shadow border min-h-0">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold">🧠 Analysis Output</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    disabled={!result}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    Copy
                  </button>
                  <button
                    onClick={handleClear}
                    disabled={!result}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4 min-h-0 relative">
                {result ? (
                  <>
                    <pre className="whitespace-pre-wrap font-mono text-sm">
                      {result}
                    </pre>
                    {copied && (
                      <span className="absolute top-2 right-4 text-xs text-green-600 bg-white px-2 py-1 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </>
                ) : (
                  <p className="text-gray-400 italic">
                    Run analysis to see results here.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT: History */}
            <div className="flex flex-col bg-white rounded-2xl shadow border min-h-0">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold">🕑 Recent Errors</h2>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  {showHistory ? "Hide" : "Show"}
                </button>
              </div>
              {showHistory && (
                <div className="flex-1 overflow-auto p-3 min-h-0">
                  {history.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">
                      No recent errors yet.
                    </p>
                  ) : (
                    history.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setErrorText(item.errorText);
                          setResult(item.result);
                        }}
                        className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="text-xs text-gray-500">
                          {new Date(item.timestamp).toLocaleString()}
                        </div>
                        <div className="text-sm truncate">
                          {item.errorText.split("\n")[0]}
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
    </div>
  );
}
