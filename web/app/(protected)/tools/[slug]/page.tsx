import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import BackButton from "../../../../components/BackButton";

interface ToolPageProps {
  params: {
    slug: string;
  };
}

const TOOL_DATA: Record<
  string,
  {
    name: string;
    freeFeatures: string[];
    proFeatures: string[];
  }
> = {
  errorlens: {
    name: "ErrorLens",
    freeFeatures: [
      "Basic error explanation",
      "Stack trace breakdown",
      "Limited requests per day",
    ],
    proFeatures: [
      "Advanced root cause analysis",
      "Fix suggestions",
      "Unlimited usage",
      "Priority AI model",
    ],
  },
};

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const isProUser = !!session?.user?.isPro;
  const tool = TOOL_DATA[params.slug];

  if (!tool) {
    return (
      <div className="p-6 text-center text-gray-600">
        Tool not found
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">

      <BackButton backHref="/tools" />

      <h1 className="text-3xl font-bold mb-2 text-slate-800">
        {tool.name}
      </h1>

      <p className="text-gray-600 mb-8">
        Explore features and capabilities of {tool.name}.
      </p>

      {/* FREE FEATURES */}
      <div className="mb-6 p-5 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold mb-3">
          Free Features
        </h2>

        <ul className="space-y-2 text-gray-700 text-sm">
          {tool.freeFeatures.map((feature) => (
            <li key={feature}>✅ {feature}</li>
          ))}
        </ul>
      </div>

      {/* PRO FEATURES */}
      <div className="p-5 border rounded-xl bg-yellow-50">
        <h2 className="text-xl font-semibold mb-3">
          Pro Features
        </h2>

        <ul className="space-y-2 mb-6 text-gray-700 text-sm">
          {tool.proFeatures.map((feature) => (
            <li key={feature}>
              {isProUser ? "🚀" : "🔒"} {feature}
            </li>
          ))}
        </ul>

        {!isProUser ? (
          <a
            href="/pricing"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition"
          >
            Upgrade to Pro (₹199)
          </a>
        ) : (
          <p className="text-green-600 font-medium">
            You are a Pro user 🚀
          </p>
        )}
      </div>

    </div>
  );
}