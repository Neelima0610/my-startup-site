import BackButton from "@/components/BackButton";

export default function FolderFlowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 text-gray-800">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <BackButton backHref="/tools" />

        <section className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Windows utility
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
            FolderFlow - Smart File Organizer for Windows
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Organize your messy folders in seconds.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            FolderFlow is a simple, professional Windows desktop application
            that automatically organizes your files into folders based on their
            file types, while giving you control over how everything is
            arranged.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-900">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/vZilJM8VltU"
                title="FolderFlow product demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-10 space-y-10 text-gray-600 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-slate-800">What Can FolderFlow Do?</h2>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Automatically Organize Files</h3>
              <p className="mt-2">
                Select a folder and FolderFlow identifies your files and
                proposes an organized structure.
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-disc list-inside">
                <li>Images</li>
                <li>Documents</li>
                <li>Spreadsheets</li>
                <li>Presentations</li>
                <li>Videos</li>
                <li>Audio</li>
                <li>Archives</li>
                <li>Code</li>
                <li>Executables</li>
                <li>Fonts</li>
                <li>Other Files</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Preview Before You Organize</h3>
              <p className="mt-2">
                Use Preview to see exactly how your files are proposed to be
                organized. Review the structure before making any changes to
                your files.
              </p>
              <p className="mt-3 font-semibold text-cyan-700">
                Preview → Review → Customize → Organize
              </p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Create Your Own Folders</h3>
              <p className="mt-2">
                Create custom folders directly from the preview window and
                organize files according to your own workflow.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-6 text-slate-100">
{`My Project
│
├── Documents
├── Images
├── Videos
├── Source Code
└── Resources`}
              </pre>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Drag &amp; Drop</h3>
              <p className="mt-2">
                Simply drag and drop a file onto the folder you want in the
                preview window. You remain in control of the final organization.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Save Your Preferences</h3>
              <p className="mt-2">
                Save an organization structure you like and use your saved
                preferences for future tasks, reducing repetitive setup.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Duplicate File Protection</h3>
              <p className="mt-2">
                FolderFlow avoids intentionally overwriting existing files. If
                a filename already exists, it can create a safe alternative.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-6 text-slate-100">
{`report.pdf
report (1).pdf
report (2).pdf`}
              </pre>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Undo Your Last Organization</h3>
              <p className="mt-2">
                FolderFlow keeps track of the latest organization operation and
                provides an Undo option to restore files to their previous
                locations.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">Progress &amp; Activity Log</h3>
              <p className="mt-2">
                Monitor the process through the progress indicator and activity
                log so you can see what FolderFlow is doing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800">Perfect For</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-disc list-inside">
                <li>Personal computers</li>
                <li>Students</li>
                <li>Developers</li>
                <li>Designers</li>
                <li>Photographers</li>
                <li>Content creators</li>
                <li>Office users</li>
                <li>Home users</li>
                <li>Anyone with cluttered folders</li>
              </ul>
              <p className="mt-4">
                Whether your Downloads folder contains hundreds of files or
                your project folders have become difficult to manage, FolderFlow
                helps bring everything back under control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800">Simple Workflow</h2>
              <ol className="mt-4 space-y-3 list-decimal list-inside">
                <li><strong>Select a folder.</strong> Choose the folder you want to organize.</li>
                <li><strong>Preview.</strong> Let FolderFlow analyze the files and propose an organization.</li>
                <li><strong>Customize.</strong> Create folders and use drag and drop to adjust the proposed structure.</li>
                <li><strong>Save Preferences.</strong> Save your preferred organization rules for future use.</li>
                <li><strong>Organize.</strong> Organize the files when you are satisfied with the preview.</li>
                <li><strong>Undo if Needed.</strong> Reverse the latest organization operation.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800">Windows Desktop Application</h2>
              <p className="mt-3">
                FolderFlow is designed as a standalone Windows desktop
                application. The packaged version is provided as a Windows
                installer, so customers can use it without Python, terminals,
                or development tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800">What You Get</h2>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>FolderFlow Windows Installer</strong></li>
                <li>Application executable</li>
                <li>Configuration support</li>
                <li>User documentation</li>
                <li>License information</li>
                <li>Changelog</li>
                <li>Product information</li>
              </ul>
              <p className="mt-4">
                If your selected package includes source code, you will also
                receive the Python project files and supporting development
                resources.
              </p>
            </section>

            <section className="border-l-4 border-amber-400 bg-amber-50 p-5">
              <h2 className="text-2xl font-semibold text-slate-800">Safety Recommendation</h2>
              <p className="mt-3">
                FolderFlow moves files on your computer, so always review the
                Preview before organizing important files. For valuable or
                important folders, use:
              </p>
              <p className="mt-3 font-semibold text-amber-800">
                Preview → Review → Customize → Organize
              </p>
              <p className="mt-3">
                Do not use the application on Windows system folders or folders
                containing files required for Windows or other applications to
                operate.
              </p>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800">Why FolderFlow?</h2>
              <p className="mt-3">
                Most file organizers simply move files according to predefined
                rules. FolderFlow gives you more control.
              </p>
              <p className="mt-4 font-semibold text-cyan-700">
                Preview → Create → Drag → Customize → Save → Organize
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-800">
                Your folders. Your structure. Your rules.
              </p>
              <p className="mt-2 font-semibold text-slate-800">
                Organize. Preview. Customize. Done.
              </p>
            </section>
          </div>

          <a
            href="https://neelima06.gumroad.com/l/folderorganizer"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
          >
            Get it at Gumroad
          </a>
        </section>
      </main>
    </div>
  );
}
