import LearningLayout from "@/components/LearningLayout";
import LessonNavigation from "@/components/LessonNavigation";

const topics = [
  {
    title: "What is a website?",
    content: "A website is a collection of connected pages and resources that people access through a browser.",
  },
  {
    title: "How websites work",
    content: "A browser requests files from a web server, then combines the HTML, CSS, and JavaScript to display the page.",
  },
  {
    title: "Client vs Server",
    content: "The client is the device and browser making a request. The server receives that request and sends back data or files.",
  },
  {
    title: "Browser and Web Server",
    content: "Browsers render website files, while web servers store those files and deliver them over the internet.",
  },
  {
    title: "HTML vs CSS vs JavaScript",
    content: "HTML provides structure, CSS controls presentation, and JavaScript adds interaction and dynamic behavior.",
  },
  {
    title: "What is HTML5?",
    content: "HTML5 is the modern HTML standard for structuring accessible web pages and supporting current web features.",
  },
  {
    title: "Evolution of HTML -> HTML5",
    content: "HTML has evolved from a simple document language into a richer standard for semantic, multimedia-ready web pages.",
  },
  {
    title: "HTML5 features",
    content: "HTML5 includes semantic elements, audio and video, canvas, forms, and APIs for modern web applications.",
  },
  {
    title: "HTML5 standards",
    content: "Standards help browsers interpret HTML consistently and help developers build interoperable, accessible websites.",
  },
  {
    title: "Setting up VS Code",
    content: "Install VS Code, create a project folder, and add useful extensions such as a formatter and a live preview tool.",
  },
  {
    title: "Installing a browser",
    content: "Use a modern browser such as Chrome, Edge, or Firefox to test pages and inspect how they render.",
  },
  {
    title: "Developer Tools",
    content: "Developer Tools let you inspect HTML and CSS, view console messages, debug JavaScript, and test responsive layouts.",
  },
];

export default function IntroductionToWebDevelopmentPage() {
  const previewCode = {
    html: "<h1>Welcome to Web Development</h1>\n<p>HTML structures the page, CSS styles it, and JavaScript adds behavior.</p>",
    css: "body { font-family: sans-serif; padding: 2rem; } h1 { color: #0891b2; }",
    js: "console.log('Welcome to web development');",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">
      <LearningLayout previewCode={previewCode}>
        <article className="w-full min-h-[calc(100vh-10rem)] p-2 md:p-4">
          <h1 className="text-3xl font-bold mb-4">
            Introduction to Web Development
          </h1>

          <p className="text-gray-600 mb-6">
            Learn the foundations of the web and prepare your development environment.
          </p>

          <ul className="list-disc pl-6 space-y-5 text-gray-700">
            {topics.map((topic) => (
              <li key={topic.title} className="pl-2">
                <h2 className="font-semibold text-lg text-gray-900">{topic.title}</h2>
                <p className="mt-1 text-base leading-7 text-gray-600">{topic.content}</p>
              </li>
            ))}
          </ul>
        </article>
        <LessonNavigation />
      </LearningLayout>
    </main>
  );
}