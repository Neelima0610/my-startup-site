export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto card animate-fadeIn text-gray-800">

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy describes how IdeaVault Labs collects, uses,
          and protects your information when you use our website and services.
        </p>

        {/* DATA COLLECTION */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p>
          We may collect basic information such as your email address when you
          sign up, make a purchase, or contact us.
        </p>

        {/* PAYMENT */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Payments</h2>
        <p>
          Payments are processed securely through third-party payment providers.
          We do not store your card or banking details on our servers.
        </p>

        {/* DATA USAGE */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
        <p>
          Your information is used to:
          <br />• Provide access to purchased products
          <br />• Deliver license keys and updates
          <br />• Offer customer support
          <br />• Improve our services
        </p>

        {/* THIRD PARTY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p>
          Our services may integrate with third-party platforms such as Microsoft
          services and payment providers. We are not responsible for the privacy
          practices of these third parties.
        </p>

        {/* DATA SHARING */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to others.
        </p>

        {/* COOKIES */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
        <p>
          We may use basic cookies or similar technologies to enhance user
          experience. You can control cookie preferences through your browser settings.
        </p>

        {/* DATA SECURITY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information.
        </p>

        {/* USER RIGHTS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights</h2>
        <p>
          You may contact us to request access, correction, or deletion of your
          personal data.
        </p>

        {/* RETENTION */}
        <h2 className="text-xl font-semibold mt-6 mb-2">9. Data Retention</h2>
        <p>
          We retain your information only as long as necessary to provide our
          services and comply with legal obligations.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:support@ideavaultlabs.com"
            className="text-cyan-600 underline"
          >
            support@ideavaultlabs.com
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} IdeaVault Labs. All rights reserved.
        </p>

      </div>
    </main>
  );
}