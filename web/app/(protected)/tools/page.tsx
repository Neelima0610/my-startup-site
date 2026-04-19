import ToolCard from "@/components/ToolCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BackButton from "@/components/BackButton";

export default async function ToolsPage() {
  const session = await getServerSession(authOptions);
  const isProUser = !!session?.user?.isPro;

  const tools = [
    {
      name: "ErrorLens",
      description: "Analyze errors & stack traces instantly with AI-powered insights",
      slug: "errorlens",
      available: true,
    },
    {
      name: "Log Inspector",
      description: "Understand logs faster with structured analysis",
      slug: "log-inspector",
      available: false,
    },
    {
      name: "API Debugger",
      description: "Test and debug APIs easily with smart suggestions",
      slug: "api-debugger",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <BackButton backHref="/dashboard" />
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Dev Tools Hub
          </h1>

          <p className="text-slate-600 mt-2">
            AI-powered developer tools for debugging, logs, and API analysis.
          </p>

          {!isProUser && (
            <div className="mt-4 bg-white border border-gray-200 rounded-xl p-3 text-sm text-gray-700">
              Unlock full access to all tools with{" "}
              <strong>IdeaVault Pro (Starting from ₹999 / lifetime)</strong>.
            </div>
          )}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool) => (
            <div
              key={tool.slug}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {tool.name}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {tool.description}
              </p>

              {tool.available ? (
                <a
                  href={`/tools/${tool.slug}`}
                  className="text-cyan-600 font-medium"
                >
                  Open Tool →
                </a>
              ) : (
                <p className="text-gray-400 text-sm">
                  Coming soon
                </p>
              )}
            </div>
          ))}

        </div>

        {/* Footer Note */}
        <div className="mt-14 text-sm text-slate-500 text-center">
          More tools are continuously being added inside{" "}
          <span className="font-semibold">IdeaVault Labs</span>.
        </div>

      </div>

    </div>
  );
}