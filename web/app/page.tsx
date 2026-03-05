export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">
          IdeaVault Labs
        </h1>

        <h2 className="text-4xl font-semibold mb-6">
          Developer Productivity Tools for Azure Teams
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We build lightweight tools that integrate directly into developer
          workflows to reduce context switching and accelerate cloud debugging.
        </p>

        <a
          href="/login"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </a>
      </section>

      {/* Product Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-10">
            Our Product
          </h3>

          <div className="card animate-fadeIn">
            <h4 className="text-xl font-semibold mb-4">
              Azure Log Explorer for Visual Studio
            </h4>

            <p className="text-gray-600">
              Securely connect using Microsoft Entra ID and query Azure logs
              directly inside Visual Studio — without leaving your IDE.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p>© 2026 IdeaVault Labs</p>

          <div className="flex justify-center gap-6">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Use
            </a>
          </div>

          <p>admin@ideavaultlabs.com</p>
        </div>
      </footer>
    </main>
  );
}