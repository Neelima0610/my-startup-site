"use client";

import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      {/* COPY BUTTON */}
      <button
        onClick={handleCopy}
        className="
          absolute top-2 right-2
          text-xs px-3 py-1 rounded-md
          bg-gray-800 text-white
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>

      {/* CODE */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}