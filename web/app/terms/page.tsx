export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto card animate-fadeIn">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

        <p>
          By using IdeaVault Labs products, you agree to comply with all applicable laws
          and use the software only with authorized Azure accounts.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Authentication</h3>
        <p>
          Our tools authenticate securely via Microsoft Entra ID and operate
          strictly within permissions granted by the user.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Independent Provider</h3>
        <p>
          IdeaVault Labs is an independent software provider and is not affiliated
          with Microsoft Corporation.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
        <p>
          The software is provided &lsquo;as is&rsquo; without warranties of any kind.
        </p>

        <p className="mt-8">Contact: admin@ideavaultlabs.com</p>
      </div>
    </main>
  );
}