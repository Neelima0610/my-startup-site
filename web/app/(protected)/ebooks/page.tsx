export default function EbooksPage(){

      const books = [
        {
          id: 1,
          title: "404 Jokes NOT Found",
          cover: "/books/404JokesNOTFound.jpg",
          link: "https://www.amazon.in/404-Jokes-Not-Found-Programming-ebook/dp/B0GM1LTXLY/",
          description: "Programming Humor for Coders Running on Coffee"
        },
        {
          id: 2,
          title: "Love In The Age Of Overthinking",
          cover: "/books/LoveInTheAgeOfOverthinking.jpg",
          link: "https://www.amazon.in/Love-Age-Overthinking-Modern-Hearts-ebook/dp/B0GN3W48X1",
          description: "Why Modern Hearts Feel So Tired?"
        },
        {
          id: 3,
          title: "NOT TOO MUCH, NOT TOO LATE",
          cover: "/books/NOTTOOMUCHNOTTOOLATE.jpg",
          link: "https://www.amazon.in/NOT-TOO-MUCH-LATE-unfolding-ebook/dp/B0GQCP4TYL/",
          description: "Her Becoming is not a race - it's a lifelong unfolding"
        },
      {
          id: 4,
          title: "100 ChatGPT Prompts For Business Owners",
          cover: "/books/100ChatGPTPromptsForBO.jpg",
          link: "https://www.amazon.in/100-ChatGPT-Prompts-Business-Owners-ebook/dp/B0GRND6G2G/",
          description: "Save 10 Hours Every Week Using AI (IdeaVault Labs AI Prompts Series - Book 1)"
        },
        {
          id: 5,
          title: "100 ChatGPT Prompts For Productivity",
          cover: "/books/100ChatGPTPromptsForProductivity.jpg",
          link: "https://www.amazon.in/100-ChatGPT-Prompts-Productivity-IdeaVault-ebook/dp/B0GRWPJV3F/",
          description: "Save 10 Hours Every Week Using AI (IdeaVault Labs AI Prompts Series - Book 2)"
        },
        {
          id: 6,
          title: "100 ChatGPT Prompts For Marketing",
          cover: "/books/100ChatGPTPromptsForMarketing.jpg",
          link: "https://www.amazon.in/100-ChatGPT-Prompts-Marketing-High-Converting-ebook/dp/B0GS3GTCPG/",
          description: "Save 10+ Hours Every Week Creating High-Converting Marketing Content with AI (IdeaVault Labs AI Prompts Series - Book 3)"
        }
      ]

      return(

      <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-3 gap-12">

        {books.map((book)=>(
        <a
          key={book.id}
          href={book.link}
          target="_blank"
          className="group perspective block w-[300px]"
        >
          <div className="book h-[420px]">

            <div className="book-face flex items-center justify-center bg-gray-300 rounded-xl p-1 shadow-lg">

              <img
                src={book.cover}
                alt={book.title}
                className="h-full max-h-[360px] object-contain rounded-lg shadow-md border-4 border-white"
              />

            </div>

            <div className="book-face book-back bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-3">{book.title}</h3>

              <p className="text-sm text-slate-600">{book.description}</p>

              <span className="mt-6 text-cyan-600 font-semibold">
                Read on Amazon →
              </span>
            </div>

          </div>
        </a>
        ))}

        </div>

      )
}