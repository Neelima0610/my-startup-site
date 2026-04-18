export default function Refund() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto card animate-fadeIn text-gray-800">

        <h1 className="text-3xl font-bold mb-6">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-4">
          This Refund Policy outlines the terms under which refunds and cancellations
          are handled for purchases made on IdeaVault Labs.
        </p>

        {/* DIGITAL PRODUCTS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Nature of Products
        </h2>
        <p>
          IdeaVault Labs provides digital products such as software tools,
          extensions, eBooks, and learning materials. All products are delivered
          electronically.
        </p>

        {/* NO REFUND */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. No Refund Policy
        </h2>
        <p>
          Due to the digital nature of our products, all sales are generally final
          and non-refundable once the product has been delivered.
        </p>

        {/* EXCEPTIONS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Exceptions
        </h2>
        <p>
          Refunds may be considered only under the following conditions:
          <br />• Duplicate payment for the same product
          <br />• Technical issues preventing product delivery that cannot be resolved
        </p>

        {/* REQUEST */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Refund Requests
        </h2>
        <p>
          To request a refund, you must contact us within 3 days of the transaction
          with your payment details and issue description.
        </p>

        {/* PROCESS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Refund Processing
        </h2>
        <p>
          Approved refunds will be processed within 5–7 business days to the
          original payment method.
        </p>

        {/* CANCELLATION */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Cancellation Policy
        </h2>
        <p>
          Since products are delivered instantly after purchase, cancellation of
          orders is not possible once the transaction is completed.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Contact Us
        </h2>
        <p>
          If you have any questions or need assistance, please contact us at{" "}
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