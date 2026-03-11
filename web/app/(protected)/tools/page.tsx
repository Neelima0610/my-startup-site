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
      description: "Analyze errors & stack traces instantly",
      slug: "errorlens",
    },
    {
      name: "Log Inspector",
      description: "Understand logs faster",
      slug: "log-inspector",
    },
    {
      name: "API Debugger",
      description: "Test and debug APIs easily",
      slug: "api-debugger",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <BackButton title="" backHref="/dashboard" />
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Dev Tools Hub
          </h1>

          <p className="text-slate-600 mt-2">
            AI-powered tools to help developers debug, understand logs, and ship faster.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              {...tool}
              isProUser={isProUser}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-sm text-slate-500 text-center">
          More tools coming soon inside <span className="font-semibold">IdeaVault</span>.
        </div>

      </div>

    </div>
  );
}