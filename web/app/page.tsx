export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-amber-100 text-gray-900 flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center flex-1 px-6 py-32 md:py-48 max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600">
          IdeaVault Labs
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-800">
          Innovative Tools & Extensions for Developers
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl">
          Boost your productivity with our lightweight, developer-focused tools: Visual Studio & VS Code extensions, Azure DevOps enhancements, study materials, interview prep guides, and curated eBooks — all in one place.
        </p>

        <a
          href="/dashboard"
          className="bg-slate-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-slate-800 transition text-lg font-medium"
        >
          Explore Dashboard
        </a>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {[
          {
            title: "VS & VS Code Extensions",
            desc: "Powerful extensions to streamline your coding workflow in Visual Studio and VS Code.",
            color: "from-cyan-100 to-cyan-200",
          },
          {
            title: "Azure DevOps Tools",
            desc: "Integrate, monitor, and optimize your Azure DevOps pipelines and projects seamlessly.",
            color: "from-amber-100 to-amber-200",
          },
          {
            title: "Study & Interview Prep",
            desc: "Access curated study guides, tutorials, and interview preparation materials to level up your skills.",
            color: "from-sky-100 to-sky-200",
          },
          {
            title: "Curated eBooks",
            desc: "Explore hand-picked eBooks for developers covering tools, best practices, and productivity hacks.",
            color: "from-lime-100 to-lime-200",
          },
        ].map((card) => (
          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200`}
          >
            <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
            <p className="text-gray-700 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-50 via-amber-50 to-sky-50 backdrop-blur border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 text-gray-800">

          <h3 className="text-lg font-semibold text-gray-900">
            IdeaVault Labs
          </h3>

          <p className="text-sm text-gray-600">
            Empowering developers with smart tools, study materials, and productivity resources.
          </p>

          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="/privacy" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-600 transition-colors">Terms of Use</a>
          </div>

          <div className="flex justify-center items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm">Support: <a href="mailto:admin@ideavaultlabs.com" className="hover:underline text-cyan-700">admin@ideavaultlabs.com</a></span>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 IdeaVault Labs. All rights reserved.
          </p>
          
        </div>
      </footer>
    </main>
  );
}