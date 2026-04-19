"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useTransition } from "react";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

type Tab = "html" | "css" | "js";

export default function PlaygroundPage() {
    const [activeTab, setActiveTab] = useState<Tab>("html");

    const [code, setCode] = useState({
        html: "",
        css: "",
        js: "",
    });

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
    const stored = sessionStorage.getItem("playground-code");

    if (stored) {
        try {
        const parsed = JSON.parse(stored);

        startTransition(() => {
            setCode(parsed); // ✅ no warning now
        });

        } catch {
        console.error("Invalid code");
        }
    }
    }, []);

  const srcDoc = `
    <html>
      <head>
        <style>${code.css}</style>
      </head>
      <body>
        ${code.html}
        <script>${code.js}<\/script>
      </body>
    </html>
  `;

  return (
    <div className="h-screen flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-white shrink-0">
        <div className="flex gap-2">
          {(["html", "css", "js"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded ${
                activeTab === tab ? "bg-cyan-600" : "bg-gray-700"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="flex flex-1 min-h-0">

        {/* Editor */}
        <div className="flex-1 min-w-0 border-r">
          <Editor
            key={activeTab}
            height="100%"
            width="100%"
            theme="vs-dark"
            language={activeTab}
            value={code[activeTab]}
            onChange={(value) =>
              setCode((prev) => ({
                ...prev,
                [activeTab]: value || "",
              }))
            }
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
              scrollBeyondLastLine: false,
            }}
            onMount={(editor) => {
              setTimeout(() => editor.layout(), 0);
            }}
          />
        </div>

        {/* Output */}
        <div className="flex-1 min-w-0 bg-white">
          <iframe
            title="preview"
            className="w-full h-full"
            sandbox="allow-scripts"
            srcDoc={srcDoc}
          />
        </div>
      </div>
    </div>
  );
}