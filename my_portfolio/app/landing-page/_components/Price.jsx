export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white py-12">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 md:px-16 py-10">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Pricing
        </h1>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                plan.popular
                  ? "bg-green-700 border-4 border-green-500 scale-105"
                  : "bg-green-900"
              }`}
            >
              <h2 className="text-2xl font-semibold text-center mb-4">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold text-center mb-6">
                ${plan.price}
              </p>
              <ul className="space-y-4 text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.popular && (
                <p className="text-center text-sm mt-4 text-green-300">
                  Most Popular
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    price: "99",
    features: [
      "Create unlimited projects",
      "Real-time collaboration with up to 5 users",
      "Access to basic analytics and reporting tools",
      "Cloud storage up to 1GB for documents and files",
    ],
  },
  {
    name: "Pro",
    price: "299",
    popular: true,
    features: [
      "Create unlimited projects",
      "Real-time collaboration with up to 5 users",
      "Access to basic analytics and reporting tools",
      "Cloud storage up to 1GB for documents and files",
      "Task automation and custom workflows",
      "Integrated communication tools (chat, video calls, file sharing)",
      "Access to advanced analytics and reporting dashboards",
      "Cloud storage up to 50GB with data encryption",
    ],
  },
  {
    name: "Enterprise",
    price: "350",
    features: [
      "Create unlimited projects",
      "Real-time collaboration with up to 5 users",
      "Access to basic analytics and reporting tools",
      "Cloud storage up to 1GB for documents and files",
      "Task automation and custom workflows",
      "Integrated communication tools (chat, video calls, file sharing)",
      "Access to advanced analytics and reporting dashboards",
      "Cloud storage up to 50GB with data encryption",
      "Unlimited users and projects with priority support",
      "Custom integrations with other business tools (CRM, ERP, etc.)",
    ],
  },
];
