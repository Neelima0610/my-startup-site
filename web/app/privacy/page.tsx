export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto card animate-fadeIn">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          IdeaVault Labs respects your privacy and is committed to protecting your data.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Authentication</h3>
        <p>
          Our applications authenticate users securely using Microsoft Entra ID.
          We do not store user passwords.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Data Usage</h3>
        <p>
          We only access Azure resources explicitly authorized by the user.
          We do not sell, rent, or share user data.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Diagnostics</h3>
        <p>
          Any diagnostic logs collected are used solely for troubleshooting and product improvement.
        </p>

        <p className="mt-8">Contact: admin@ideavaultlabs.com</p>
      </div>
    </main>
  );
}