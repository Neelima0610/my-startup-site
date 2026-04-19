"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

type Tab = "html" | "css" | "js";

type Props = {
  initialCode: {
    html: string;
    css: string;
    js: string;
  };
};

export default function CodePlayground({ initialCode }: Props) {
    const [activeTab] = useState<Tab>("html");
    const [code, setCode] = useState(initialCode);
    const [srcDoc, setSrcDoc] = useState("");

    const generateSrcDoc = () => `
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

    const runCode = () => {
        setSrcDoc(generateSrcDoc());
    };

    const openInNewWindow = () => {
        const encoded = encodeURIComponent(JSON.stringify(code));
        window.open(`/playground?code=${encoded}`, "_blank");
    };

  return (
    <div className="mt-8 border rounded-xl overflow-hidden shadow-lg">

      {/* Editor Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
        <span className="text-sm font-medium text-gray-700">
          Live HTML Editor
        </span>
        <button
            onClick={openInNewWindow}
            className="px-2 py-1 text-sm border rounded-md hover:bg-gray-200"
            title="Open in new window"
        >
            Open In New Window ↗
        </button>
        <button
          onClick={runCode}
          className="px-3 py-1 text-sm bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
        >
          Run
        </button>
      </div>

      {/* Editor */}
      <Editor
            height="300px"
            language={activeTab}
            value={code[activeTab]}
            onChange={(value) =>
              setCode((prev) => ({
                ...prev,
                [activeTab]: value || "",
              }))
            }
            theme="vs-dark"
          />

      {/* Output */}
      <div className="p-4 bg-white border-t">
        <p className="text-xs text-gray-500 mb-2">Preview</p>

        <iframe
          className="w-full h-40 border rounded-md"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}