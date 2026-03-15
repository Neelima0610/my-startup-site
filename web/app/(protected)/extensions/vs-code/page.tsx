import BackButton from "@/components/BackButton";

export default function VSCodeExtensions() {
  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6 right-6">
        <BackButton title="" backHref="/dashboard" />
      </div>
      <h1 className="text-3xl font-bold">
        Visual Studio Code - Extensions
      </h1>

      <p className="text-gray-600 mt-2">
        Extensions developed by IdeaVault Labs.
      </p>

      <div className="mt-8 border p-6 rounded">
        Extension cards coming soon
      </div>
    </div>
  );
}