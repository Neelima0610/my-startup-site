"use client";

export default function BuyMeCoffeeCard() {
  const tiers = [
    { label: "Coffee", price: "₹49" },
    { label: "Lunch", price: "₹149" },
    { label: "Sponsor", price: "₹499" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto mt-12">
      <div className="
        relative
        bg-gradient-to-br from-white to-slate-50
        border border-gray-200
        rounded-2xl
        shadow-lg
        p-8
        text-center
        overflow-hidden
      ">

        {/* Subtle glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-xl font-bold shadow-sm">
          ☕
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Support IdeaVault
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
          If IdeaVault tools saved you time or helped your workflow,
          you can support the project. It helps us build faster and better tools.
        </p>

        {/* Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {tiers.map((tier) => (
            <button
              key={tier.label}
              className="
                border border-gray-200
                rounded-xl
                py-3
                bg-white
                hover:bg-yellow-50
                hover:border-yellow-300
                transition
                shadow-sm
                hover:shadow-md
              "
            >
              <div className="text-sm font-medium text-gray-800">
                {tier.label}
              </div>
              <div className="text-base font-semibold text-yellow-700">
                {tier.price}
              </div>
            </button>
          ))}
        </div>

        {/* Primary CTA */}
        <button
          className="
            w-full
            bg-gradient-to-r from-yellow-400 to-yellow-500
            text-black
            font-semibold
            py-3
            rounded-xl
            shadow-md
            hover:from-yellow-500 hover:to-yellow-600
            transition
          "
        >
          Support with Razorpay
        </button>

        {/* Note */}
        <p className="text-xs text-gray-400 mt-4">
          Optional support • No additional features unlocked
        </p>
      </div>
    </div>
  );
}