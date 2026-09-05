import Image from "next/image";
import BackButton from "@/components/BackButton";

const templates = [
  {
    name: "DevOps Command Center",
    description:
      "A polished HTML5 dashboard template for engineering operations, deployments, pipelines, builds, and environment monitoring.",
    gumroadUrl: "https://neelima06.gumroad.com/l/devopscommandcenter",
    images: [
      {
        src: "/HTML5Templates/Dashboard.png",
        alt: "DevOps Command Center dashboard with pipeline and deployment charts",
      },
      {
        src: "/HTML5Templates/Environments.png",
        alt: "DevOps Command Center environments screen",
      },
    ],
  },
];

export default function Html5TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-gray-800">
      <main className="max-w-6xl mx-auto px-6 py-10">
        <BackButton backHref="/tools" />

        <header className="mt-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Digital templates
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
            HTML5 Templates
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Professional, responsive templates to help you start your next web
            project faster.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {templates.map((template) => (
            <article
              key={template.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="flex snap-x snap-mandatory gap-2 overflow-x-auto bg-slate-900 p-2"
                aria-label={`${template.name} screenshots`}
              >
                {template.images.map((image) => (
                  <div
                    key={image.src}
                    className="min-w-[88%] shrink-0 snap-start overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1894}
                      height={878}
                      className="block h-auto w-full"
                      sizes="(max-width: 768px) 88vw, 540px"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  HTML5 template
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-800">
                  {template.name}
                </h2>
                <p className="mt-3 text-gray-600 leading-7">
                  {template.description}
                </p>
                <a
                  href={template.gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
                >
                  Get it at Gumroad
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}