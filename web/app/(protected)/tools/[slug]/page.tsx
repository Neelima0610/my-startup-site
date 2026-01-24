import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import BackButton from "../../../../components/BackButton";
import NavigationHeader from "@/components/NavigationHeader";

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
  const isProUser = !!session?.user?.isPro;

  const tool = TOOL_DATA[params.slug];

  if (!tool) {
    return <div className="p-6">Tool not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <BackButton backHref="/tools" />
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>

      <p className="text-gray-600 mb-8">
        Explore what you can do with {tool.name}.
      </p>

      {/* FREE FEATURES */}
      <div className="mb-6 p-5 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold mb-3">
          Free Features
        </h2>
        <ul className="space-y-2">
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

        <ul className="space-y-2 mb-4">
          {tool.proFeatures.map((feature) => (
            <li key={feature}>
              {isProUser ? "🚀" : "🔒"} {feature}
            </li>
          ))}
        </ul>

        {!isProUser && (
          <button
            disabled
            className="bg-yellow-400 text-white px-4 py-2 rounded opacity-70 cursor-not-allowed"
          >
            Upgrade to Pro to unlock
          </button>
        )}
      </div>
    </div>
  );
}
