export default function Home() {
  const features = [
    {
      title: "Real-Time Collaboration",
      description:
        "Work together effortlessly with instant messaging, shared workspaces, and video calls—all in one place.",
      icon: "👥",
    },
    {
      title: "Advanced Analytics & Reporting",
      description:
        "Make data-driven decisions with customizable reports and performance dashboards.",
      icon: "📊",
    },
    {
      title: "Automated Task Management",
      description:
        "Save time by automating routine tasks, setting reminders, and creating smart workflows.",
      icon: "⚙️",
    },
    {
      title: "Secure Data Storage",
      description:
        "Keep your data safe with top-tier encryption and industry-standard security protocols.",
      icon: "🔒",
    },
    {
      title: "Integrated Calendar & Scheduling",
      description:
        "Stay organized with a unified calendar that syncs with all your favorite tools.",
      icon: "📅",
    },
    {
      title: "Customizable Workflows",
      description:
        "Tailor your project management experience with flexible workflows that adapt to your team's unique processes.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-green-900 via-green-900 to-green-500 text-white">
      {/* Header Section */}
      <header className="text-center py-10 px-5">
        <h1 className="text-4xl font-bold">
          Everything You Need to Manage Your Projects
        </h1>

        <div className="grid md:grid-cols-2 items-center md:px-56 py-16 gap-10">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAjfPaRcWF_p5MEEyHMs9g8WDrfOQ8v9HHw&s" // Add a dashboard mockup to the public folder.
              alt="Dashboard"
              className=" mx-auto   rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg  w-64 mx-auto">
              {" "}
              Discover the powerful features designed to simplify your workflow
            </p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-10 px-5">
        <h2 className="text-center text-3xl font-bold mb-8">
          Features you must know about
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0e3a15] p-6 rounded-lg shadow hover:bg-[#1a5c29] transition duration-200"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
