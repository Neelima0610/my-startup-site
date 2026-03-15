import BackButton from "@/components/BackButton";

export default function VSExtensions() {
  const extensions = [
    {
      name: "Azure Log Explorer",
      description: "Query Azure logs directly inside Visual Studio without leaving your IDE.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      tags: ["Azure", "Visual Studio", "VSIX"],
      link: "/extensions/visual-studio",
    },
    {
      name: "WhoDidIt",
      description: "Right-click any line of code to instantly discover who introduced it and understand code history.",
      icon: "/extensions/whodidit.jpg",
      tags: ["Visual Studio", "VSIX"],
      link: "https://marketplace.visualstudio.com/items?itemName=IdeaVaultLabs.WhoDidIt",
    },
    {
      name: "Error Lens",
      description: "Paste any error stack trace and instantly get clear explanations and possible fixes.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      tags: ["Debugging", "Error Analysis", "IdeaVault Tool"],
      link: "/extensions/visual-studio",
    },
  ];

  return (
      <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6 right-6">
        <BackButton title="" backHref="/dashboard" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold">Visual Studio Extensions</h1>
      <p className="text-gray-600 mt-2">Extensions developed by IdeaVault Labs.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {extensions.map((ext) => (
          <a
            key={ext.name}
            href={ext.link}
            target="_blank"
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={ext.icon} alt={ext.name} className="w-50 h-50" />
              <h2 className="text-xl font-semibold">{ext.name}</h2>
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
    </div>
  );
}