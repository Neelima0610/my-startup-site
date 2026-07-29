export default function LicensePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r cyan-600 text-black p-4 md:p-10 mb-10 ">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

            <div className="relative">
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-lg font-medium">
                Legal Document
                </span>

                <h1 className="mt-5 text-4xl md:text-5xl font-bold">
                Software License Agreement
                </h1>

                <p className="mt-3 text-black-100 text-lg max-w-2xl">
                This agreement governs the use of software, plugins, extensions, utilities,
                and services developed by IdeaVault Labs.
                </p>

                <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm">
                Last Updated: July 29, 2026
                </div>
            </div>
            </header>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700">

          <p>
            Welcome to <strong>IdeaVault Labs</strong>.
          </p>

          <p>
            This Software License Agreement (&quot;Agreement&quot;) governs the use of
            software products, plugins, extensions, utilities, and services
            developed and distributed by <strong>IdeaVault Labs</strong>
            (&quot;IdeaVault Labs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <br />
          <p>
            By downloading, installing, or using any IdeaVault Labs software,
            you agree to the terms of this Agreement.
          </p>
         <br />          
          <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. License Grant
            </h2>


          <p>
            IdeaVault Labs grants you a limited, non-exclusive,
            non-transferable, and revocable license to install and use our
            software for personal or business purposes in accordance with this
            Agreement.
          </p>

          <p>
            Unless explicitly stated otherwise, all software published by
            IdeaVault Labs remains proprietary software.
          </p>
    
          </section>
          <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Ownership
            </h2>          

          <p>
            IdeaVault Labs retains all rights, title, and interest in the
            software, including but not limited to:
          </p>

          <ul>
            <li>Source code</li>
            <li>User interface designs</li>
            <li>Documentation</li>
            <li>Logos</li>
            <li>Trademarks</li>
            <li>Intellectual property</li>
          </ul>

          <p>
            This Agreement grants you a license to use the software only. It
            does not transfer ownership.
          </p>
        </section>

        
          <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Permitted User
            </h2>  

          <p>You may:</p>

          <ul>
            <li>Install and use the software on supported JetBrains IDEs.</li>
            <li>
              Use the software for personal, educational, commercial, or
              internal business purposes.
            </li>
            <li>
              Receive updates released by IdeaVault Labs while the software is
              available.
            </li>
          </ul>
        </section>
        <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Restrictions
          </h2>

          <p>You may not:</p>

          <ul>
            <li>Redistribute the software without written permission.</li>
            <li>Sell, sublicense, or lease the software.</li>
            <li>Remove copyright notices or branding.</li>
            <li>Claim the software as your own work.</li>
            <li>Use the software in violation of applicable laws.</li>
          </ul>

          <p>
            Where permitted by applicable law, you may not reverse engineer,
            decompile, or modify the software except as expressly allowed by
            law.
          </p>
        </section>
        <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Free and Premium Features</h2>

          <p>
            Some IdeaVault Labs products may include both free and premium
            functionality.
          </p>

          <p>Premium features may require:</p>

          <ul>
            <li>A valid subscription</li>
            <li>A purchased license</li>
            <li>Authentication</li>
            <li>Online license verification</li>
          </ul>

          <p>
            IdeaVault Labs reserves the right to introduce new premium features
            while continuing to support existing users in accordance with our
            published product policies.
          </p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Updates</h2>

          <p>
            IdeaVault Labs may release updates, enhancements, bug fixes, or
            security improvements at any time.
          </p>

          <p>
            Some updates may introduce new features or modify existing
            functionality.
          </p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            7. Third-Party Components
          </h2>

          <p>
            Our software may include or depend upon third-party libraries or
            services that are distributed under their own licenses.
          </p>

          <p>
            Those components remain subject to their respective license terms.
          </p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Disclaimer of Warranty</h2>

                <p>
                    The software is provided <strong>AS IS</strong> without warranties
                    of any kind, whether express or implied.
                </p>

                <p>
                    IdeaVault Labs does not guarantee that the software will be
                    uninterrupted, error-free, or suitable for every use case.
                </p>
            </section>
        <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
          9. Limitation of Liability</h2>

          <p>
            To the maximum extent permitted by law, IdeaVault Labs shall not be
            liable for any indirect, incidental, special, consequential, or
            exemplary damages arising from the use or inability to use the
            software.
          </p>

          <p>Your use of the software is at your own risk.</p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            10. Termination</h2>

          <p>
            This license automatically terminates if you violate this Agreement.
          </p>

          <p>
            Upon termination, you must cease using the software and remove all
            installed copies.
          </p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
          11. Changes to this Agreement</h2>

          <p>
            IdeaVault Labs may update this Agreement from time to time.
          </p>

          <p>
            The latest version will always be published on this website with the
            updated revision date.
          </p>

          <p>
            Continued use of the software after changes become effective
            constitutes acceptance of the revised Agreement.
          </p>
            </section>
            <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4"
          >12. Contact</h2>

          <p>
            For licensing questions or support, please contact:
          </p>
        </section>
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 not-prose mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              IdeaVault Labs
            </h3>

            <p className="mt-3 text-slate-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@ideavaultlabs.com"
                className="text-cyan-700 hover:underline"
              >
                support@ideavaultlabs.com
              </a>
            </p>

            <p className="mt-2 text-slate-700">
              <strong>Website:</strong>{" "}
              <a
                href="https://www.ideavaultlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline"
              >
                https://www.ideavaultlabs.com
              </a>
            </p>
          </div>

        </div>

        <footer className="mt-12 pt-6 border-t text-center text-sm text-slate-500">
          © 2026 <strong>IdeaVault Labs</strong>. All rights reserved.
        </footer>

      </div>
    </main>
  );
}