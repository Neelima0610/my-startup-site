import BackButton from "@/components/BackButton";

export default function EbooksPage() {
  const books = [
    {
      id: 1,
      title: "404 Jokes NOT Found",
      cover: "/books/404JokesNOTFound.jpg",
      link: "https://www.amazon.in/404-Jokes-Not-Found-Programming-ebook/dp/B0GM1LTXLY/",
      description: "Programming Humor for Coders Running on Coffee",
    },
    {
      id: 2,
      title: "Love In The Age Of Overthinking",
      cover: "/books/LoveInTheAgeOfOverthinking.jpg",
      link: "https://www.amazon.in/Love-Age-Overthinking-Modern-Hearts-ebook/dp/B0GN3W48X1",
      description: "Why Modern Hearts Feel So Tired?",
    },
    {
      id: 3,
      title: "NOT TOO MUCH, NOT TOO LATE",
      cover: "/books/NOTTOOMUCHNOTTOOLATE.jpg",
      link: "https://www.amazon.in/NOT-TOO-MUCH-LATE-unfolding-ebook/dp/B0GQCP4TYL/",
      description: "Her Becoming is not a race - it's a lifelong unfolding",
    },
    {
      id: 4,
      title: "100 ChatGPT Prompts For Business Owners",
      cover: "/books/100ChatGPTPromptsForBO.jpg",
      link: "https://www.amazon.in/100-ChatGPT-Prompts-Business-Owners-ebook/dp/B0GRND6G2G/",
      description: "Save 10 Hours Every Week Using AI (Book 1)",
    },
    {
      id: 5,
      title: "100 ChatGPT Prompts For Productivity",
      cover: "/books/100ChatGPTPromptsForProductivity.jpg",
      link: "https://www.amazon.in/100-ChatGPT-Prompts-Productivity-IdeaVault-ebook/dp/B0GRWPJV3F/",
      description: "Boost productivity using AI (Book 2)",
    },
    {
      id: 6,
      title: "100 ChatGPT Prompts For Marketing",
      cover: "/books/100ChatGPTPromptsForMarketing.jpg",
      link: "https://www.amazon.in/100-ChatGPT-Prompts-Marketing-High-Converting-ebook/dp/B0GS3GTCPG/",
      description: "Create high-converting content with AI (Book 3)",
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100">
      
      {/* Top Nav */}
      <div className="flex items-center justify-between mb-6">
        <BackButton backHref="/dashboard" />
      </div>

      {/* PAGE HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          eBooks by IdeaVault Labs
        </h1>

        <p className="text-slate-600 text-sm">
          Explore curated and authored eBooks by IdeaVault Labs.  
          These are available for purchase on external platforms like Amazon.
        </p>

        <p className="text-xs text-gray-500 mt-3">
          Note: You will be redirected to Amazon to complete your purchase.
        </p>
      </div>

      {/* BOOK GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group perspective block w-[280px]"
          >
            <div className="book h-[400px]">

              {/* FRONT */}
              <div className="book-face flex items-center justify-center bg-gray-200 rounded-xl p-2 shadow-lg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full max-h-[340px] object-contain rounded-lg shadow-md border-4 border-white"
                />
              </div>

              {/* BACK */}
              <div className="book-face book-back bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-3">{book.title}</h3>

                <p className="text-sm text-slate-600">{book.description}</p>

                <span className="mt-6 text-cyan-600 font-semibold">
                  View on Amazon →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* SUPPORT */}
      <div className="mt-16 text-center text-sm text-slate-600">
        For queries, contact{" "}
        <a
          href="mailto:support@ideavaultlabs.com"
          className="text-blue-600 underline"
        >
          support@ideavaultlabs.com
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} IdeaVault Labs
      </footer>
    </div>
  );
}