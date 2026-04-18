import BackButton from "@/components/BackButton";

export default function AzureDevopsExtensions() {
  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 min-h-screen">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <BackButton backHref="/dashboard" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800">
          Azure DevOps Extensions
        </h1>

        <p className="text-gray-600 mt-2">
          Productivity tools and extensions built to enhance your Azure DevOps workflow.
        </p>
      </div>

      {/* INFO BOX */}
      <div className="max-w-4xl mx-auto mt-6 bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 shadow">
        These extensions are part of the <strong>IdeaVault Pro</strong> offering.  
        Access may be provided through license-based activation.
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 grid gap-6">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">
            Upcoming Azure DevOps Tools
          </h2>

          <p className="text-gray-600 text-sm">
            We are actively building extensions focused on:
          </p>

          <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Pipeline monitoring and insights</li>
            <li>Build and release optimization tools</li>
            <li>Developer productivity enhancements</li>
            <li>Custom dashboards and reporting utilities</li>
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            Features and tools will be released progressively.
          </p>
        </div>

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