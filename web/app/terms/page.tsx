export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto card animate-fadeIn text-gray-800">
        
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4">
          These Terms & Conditions govern your use of IdeaVault Labs products and services.
          By accessing or purchasing from our platform, you agree to these terms.
        </p>

        {/* SERVICES */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
        <p>
          IdeaVault Labs provides digital products including developer tools,
          software extensions, eBooks, and learning resources. All products are
          delivered electronically.
        </p>

        {/* PURCHASE */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Purchases & Payments</h2>
        <p>
          All purchases are processed securely through our payment partner.
          By completing a transaction, you agree to pay the listed price for the product.
        </p>

        {/* DELIVERY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Delivery</h2>
        <p>
          Upon successful payment, digital products such as license keys or access
          credentials will be delivered to the email address provided at checkout.
        </p>

        {/* REFUND */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Policy</h2>
        <p>
          Due to the digital nature of our products, all sales are final unless
          otherwise stated. Please refer to our{" "}
          <a href="/refund" className="text-cyan-600 underline">
            Refund Policy
          </a>{" "}
          for more details.
        </p>

        {/* LICENSE */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. License Usage</h2>
        <p>
          Purchased licenses are intended for individual use unless explicitly
          stated otherwise. Redistribution, resale, or misuse of the license is prohibited.
        </p>

        {/* USER RESPONSIBILITY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. User Responsibilities</h2>
        <p>
          Users agree to use the products lawfully and not misuse or attempt to
          reverse-engineer the software.
        </p>

        {/* DISCLAIMER */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Disclaimer</h2>
        <p>
          All products are provided &quot;as is&quot; without warranties of any kind.
          We do not guarantee uninterrupted or error-free operation.
        </p>

        {/* LIABILITY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Limitation of Liability</h2>
        <p>
          IdeaVault Labs shall not be held liable for any indirect, incidental,
          or consequential damages arising from the use of our products.
        </p>

        {/* THIRD PARTY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">9. Third-Party Services</h2>
        <p>
          Our services may integrate with third-party platforms such as Microsoft
          services. We are not affiliated with or responsible for third-party services.
        </p>

        {/* GOVERNING LAW */}
        <h2 className="text-xl font-semibold mt-6 mb-2">10. Governing Law</h2>
        <p>
          These terms shall be governed by and interpreted in accordance with
          the laws of India.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-6 mb-2">11. Contact</h2>
        <p>
          For any questions or concerns, please contact us at{" "}
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