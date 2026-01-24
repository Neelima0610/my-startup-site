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
    <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex gap-2 mb-4">
        <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
          Free
        </span>
        <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
          Pro
        </span>
      </div>

      {isProUser ? (
        <Link
          href={`/tools/${slug}`}
          className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Open Tool
        </Link>
      ) : (
        <div className="space-y-2">
          <Link
            href={`/tools/${slug}`}
            className="block text-center bg-gray-200 py-2 rounded hover:bg-gray-300"
          >
            Open Free Version
          </Link>

          <button
            disabled
            className="w-full bg-yellow-400 text-white py-2 rounded opacity-60 cursor-not-allowed"
          >
            Pro Feature 🔒
          </button>
        </div>
      )}
    </div>
  );
}
