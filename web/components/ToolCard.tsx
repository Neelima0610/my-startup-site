import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  slug: string;
  isProUser: boolean;
}

export default function ToolCard({
  name,
  description,
  slug,
  isProUser,
}: ToolCardProps) {
  return (
    <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition bg-white">

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Status Badge */}
      <div className="mb-4">
        {isProUser ? (
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            Pro Active
          </span>
        ) : (
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
            Free Plan
          </span>
        )}
      </div>

      {/* Action */}
      {isProUser ? (
        <Link
          href={`/tools/${slug}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Open Tool
        </Link>
      ) : (
        <div className="space-y-3">

          <Link
            href={`/tools/${slug}`}
            className="block text-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
          >
            Try Free Version
          </Link>

          <Link
            href="/pricing"
            className="block text-center bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-300 font-medium"
          >
            Upgrade to Pro (₹199)
          </Link>

        </div>
      )}

    </div>
  );
}