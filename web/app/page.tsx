export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-amber-50 text-gray-800">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - PRODUCT CARDS */}
          <div className="space-y-6">

            {/* Azure Log Explorer */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">

              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                  className="w-8 h-8"
                />
                <h4 className="text-lg font-semibold">
                  Azure Log Explorer
                </h4>
              </div>

              <p className="text-gray-600 text-sm">
                Query Azure logs directly inside Visual Studio without leaving
                your development environment.
              </p>

              <div className="flex gap-2 mt-3 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Azure
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  Visual Studio
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  VSIX
                </span>
              </div>

            </div>


            {/* WhoDidIt */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">

              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                  className="w-8 h-8"
                />
                <h4 className="text-lg font-semibold">
                  WhoDidIt
                </h4>
              </div>

              <p className="text-gray-600 text-sm">
                Right-click any line of code to instantly discover who
                introduced it and understand the code history.
              </p>

              <div className="flex gap-2 mt-3 text-xs">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  Visual Studio
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  VSIX
                </span>
              </div>

            </div>


            {/* Error Lens */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">

              <div className="flex items-center gap-4 mb-3">

                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>

                <h4 className="text-lg font-semibold">
                  Error Lens
                </h4>

              </div>

              <p className="text-gray-600 text-sm">
                Paste any error stack trace and instantly get a clear explanation of
                what went wrong along with possible fixes. Built to help developers
                understand complex errors faster and resolve issues with confidence.
              </p>

              <div className="flex gap-2 mt-3 text-xs">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">
                  IdeaVault Tool
                </span>
                <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded">
                  Debugging
                </span>
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  Error Analysis
                </span>
              </div>

            </div>


            {/* Explore More */}
            <p className="text-sm text-gray-500 italic pl-2">
              Login to explore more →
            </p>

          </div>


          {/* RIGHT SIDE - HERO */}
          <div>

            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              IdeaVault Labs
            </h1>

            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Developer Productivity Tools              
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Lightweight tools designed for developers using Azure and
              Visual Studio. Reduce context switching, debug faster,
              and stay focused inside your IDE.
            </p>

            <a
              href="/dashboard"
              className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-slate-900 transition"
            >
              Go to Dashboard
            </a>

          </div>

        </div>

      </section>


      {/* Footer (kept same) */}
      <footer className="bg-white/70 backdrop-blur border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4 text-gray-700">

          <p className="font-medium">
            © 2026 IdeaVault Labs
          </p>

          <div className="flex justify-center gap-8 text-sm">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Use
            </a>
          </div>

          <p>Support Email : admin@ideavaultlabs.com</p>

        </div>
      </footer>

    </main>
  );
}