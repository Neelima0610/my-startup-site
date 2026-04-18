import BackButton from "@/components/BackButton";

export default function VSExtensions() {
  const extensions = [
    {
      name: "Azure Log Explorer",
      description:
        "Query and analyze Azure logs directly inside Visual Studio without leaving your IDE.",
      icon: "/extensions/azurelogexplorer.jpg",
      tags: ["Azure", "Visual Studio", "VSIX"],
      link: "https://marketplace.visualstudio.com/items?itemName=IdeaVaultLabs.AzureLogExplorerForVS",
    },
    {
      name: "WhoDidIt",
      description:
        "Identify code changes instantly and understand who introduced specific lines in your codebase.",
      icon: "/extensions/whodidit.jpg",
      tags: ["Visual Studio", "VSIX"],
      link: "https://marketplace.visualstudio.com/items?itemName=IdeaVaultLabs.WhoDidIt",
    },    
  ];

  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 min-h-screen">

      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <BackButton backHref="/dashboard" />
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Visual Studio Extensions
        </h1>

        <p className="text-gray-600 mt-2">
          Developer productivity extensions built by IdeaVault Labs to enhance debugging, logging, and code analysis workflows inside Visual Studio.
        </p>
      </div>

      {/* INFO BOX */}
      <div className="max-w-5xl mx-auto mt-6 bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 shadow">
        These extensions are part of the <strong>IdeaVault Labs ecosystem</strong>.  
        Some features may require a valid IdeaVault Pro license for full access.
      </div>

      {/* GRID */}
      <div className="mt-10 max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {extensions.map((ext) => (
          <a
            key={ext.name}
            href={ext.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={ext.icon}
                alt={ext.name}
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-lg font-semibold">{ext.name}</h2>
            </div>

            <p className="text-gray-600 text-sm">{ext.description}</p>

            <div className="flex gap-2 flex-wrap mt-4 text-xs">
              {ext.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}

      </div>

      {/* SUPPORT */}
      <div className="mt-16 text-center text-sm text-slate-600">
        Need help? Contact{" "}
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