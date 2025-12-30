import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I’m Neelima 👋
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          I build and share small startup ideas, AI prompts, and developer tools.
          This site is my personal product studio — where ideas turn into shipped products.
        </p>
      </section>

      {/* CARDS */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link href="/ideas" className="card">
          <h3 className="text-xl font-semibold mb-2">💡 Startup Ideas</h3>
          <p className="text-gray-600">
            Small, validated ideas with clear execution paths.
          </p>
        </Link>

        <Link href="/prompts" className="card">
          <h3 className="text-xl font-semibold mb-2">🧠 AI Prompts</h3>
          <p className="text-gray-600">
            Carefully designed prompts for developers and builders.
          </p>
        </Link>

        <Link href="/tools" className="card">
          <h3 className="text-xl font-semibold mb-2">🛠 Apps & Tools</h3>
          <p className="text-gray-600">
            Developer tools, CLIs, and extensions I create.
          </p>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Neelima. Built with ❤️ and curiosity.
      </footer>
    </>
  );
}
