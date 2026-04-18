import BackButton from "@/components/BackButton";

export default function VSCodeExtensions() {
  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 min-h-screen">

      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <BackButton backHref="/dashboard" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800">
          Visual Studio Code Extensions
        </h1>

        <p className="text-gray-600 mt-2">
          Lightweight productivity extensions designed by IdeaVault Labs to improve developer efficiency inside VS Code.
        </p>
      </div>

      {/* INFO BOX */}
      <div className="max-w-4xl mx-auto mt-6 bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 shadow">
        These extensions are part of the <strong>IdeaVault Labs ecosystem</strong> and may be included in the IdeaVault Pro license.
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 grid gap-6">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">
            VS Code Productivity Tools
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            We are actively building and maintaining extensions focused on:
          </p>

          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Code debugging assistance and insights</li>
            <li>AI-powered developer productivity tools</li>
            <li>Snippet and workflow automation</li>
            <li>Improved development experience inside VS Code</li>
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            New extensions will be added progressively as part of IdeaVault Labs releases.
          </p>
        </div>

      </div>

      {/* VALUE LINKING TO PRO */}
      <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-cyan-100 to-amber-100 border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
        Full access to premium VS Code extensions is available with{" "}
        <strong>IdeaVault Pro (₹199 lifetime)</strong>.
      </div>

      {/* SUPPORT */}
      <div className="mt-16 text-center text-sm text-slate-600">
        Need help? Contact{" "}
        <a
          href="mailto:support@ideavaultlabs.com"
          className="text-blue-600 underline"
        >
          support@ideavaultlabs.com
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} IdeaVault Labs
      </footer>

    </div>
  );
}