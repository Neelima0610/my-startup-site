import ToolCard from "@/components/ToolCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
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
    <div className="p-8">
      <BackButton title="" backHref="/" />
      <h1 className="text-3xl font-bold mb-6">Dev Tools Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            {...tool}
            isProUser={isProUser}
          />
        ))}
      </div>
    </div>
  );
}
