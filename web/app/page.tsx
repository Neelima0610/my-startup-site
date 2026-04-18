export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-gray-800 flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-16 md:py-24 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600">
          IdeaVault Labs
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-800">
          Developer Tools, Extensions & Learning Resources
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl">
          Premium developer tools, extensions, and learning resources — built to help you ship faster and grow your career.
        </p>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/pricing"
            className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow hover:bg-slate-800 transition font-medium"
          >
            View Pricing
          </a>

          <a
            href="/dashboard"
            className="bg-white border border-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition font-medium"
          >
            Explore Products
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Secure payments • Instant delivery • Dedicated support
        </p>

      </section>

      {/* Feature Section (separate = cleaner layout) */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: "VS & VS Code Extensions",
            desc: "Boost productivity with powerful extensions.",
            color: "from-cyan-100 to-cyan-200",
          },
          {
            title: "Azure DevOps Tools",
            desc: "Manage workflows efficiently.",
            color: "from-amber-100 to-amber-200",
          },
          {
            title: "Interview Prep",
            desc: "Structured learning for growth.",
            color: "from-sky-100 to-sky-200",
          },
          {
            title: "Curated eBooks",
            desc: "Premium developer guides.",
            color: "from-lime-100 to-lime-200",
          },
        ].map((card) => (
          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.color} rounded-xl p-5 shadow hover:shadow-xl transition`}
          >
            <h3 className="font-semibold text-md mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">

          <h3 className="text-lg font-semibold">IdeaVault Labs</h3>

          <p className="text-sm text-gray-600">
            Developer tools, extensions, and learning resources.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/pricing" className="hover:text-cyan-600">Pricing</a>
            <a href="/privacy" className="hover:text-cyan-600">Privacy</a>
            <a href="/terms" className="hover:text-cyan-600">Terms</a>
            <a href="/refund" className="hover:text-cyan-600">Refund</a>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 IdeaVault Labs
          </p>

        </div>
      </footer>

    </main>
  );
}