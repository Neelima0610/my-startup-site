'use client';

import { useState } from 'react';

export default function ErrorLens() {
  const [errorText, setErrorText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeError = async () => {
    if (!errorText) return;

    setLoading(true);
    try {
      const res = await fetch("/api/analyze-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: errorText })
      });
      const data = await res.json();
      setResult(data.analysis);
    } catch (err) {
      console.error(err);
      setResult("Failed to analyze error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>ErrorLens</h1>
      <p>A VS Code extension for displaying errors inline.</p>

      <div>
        <textarea
          value={errorText}
          onChange={(e) => setErrorText(e.target.value)}
          placeholder="Paste your error or stack trace here..."
          rows={10}
          cols={50}
        />
        <br />
        <button onClick={analyzeError} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Error'}
        </button>
      </div>

      {result && (
        <div>
          <h2>Analysis:</h2>
          <pre>{result}</pre>
        </div>
      )}
    </main>
  );
}