export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#092b12] to-[#14421d]  min-h-screen text-white">
      <div className="container mx-auto py-20 px-6">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
          How CloudWorks Makes Project Management Easy
        </h1>

        {/* Steps Section */}
        <div className=" ">
          {/* Image Section */}
          <div className="flex justify-center ">
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkqGiwFppuJZw1GZzwUzzY6YWrQsX18ec_g&s"
              alt="Project Management"
              className="rounded-lg  w-[800px] h-[350px] object-cover shadow-lg"
            /> */}
          </div>

          {/* Steps Content */}
          <div className="space-y-8 max-w-3xl mt-12 mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <span className="block w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </span>
                </div>
                {/* Step Content */}
                <div>
                  <h2 className="text-xl font-semibold">{step.title}</h2>
                  <p className="mt-2 text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "1",
    title: "Create and Organize Projects",
    description:
      "Start by creating a new project in just a few clicks. Organize tasks by setting deadlines, assigning team members, and creating milestones.",
  },
  {
    number: "2",
    title: "Customize Workflows",
    description:
      "Design your own workflows tailored to your team’s unique needs. Choose from templates or build custom task flows, stages, and automation triggers.",
  },
  {
    number: "3",
    title: "Collaborate in Real-Time",
    description:
      "Share documents, discuss tasks, and provide updates via built-in chat, video calls, or comments—keeping everyone in sync no matter where they are.",
  },
  {
    number: "4",
    title: "Track Progress with Dashboards",
    description:
      "Use customizable dashboards to monitor project progress, track team performance, and identify potential bottlenecks at a glance.",
  },
  {
    number: "5",
    title: "Automate Routine Tasks",
    description:
      "Save time by automating recurring tasks, sending notifications, and assigning follow-up actions based on project stages.",
  },
  {
    number: "6",
    title: "Generate Reports & Insights",
    description:
      "Access advanced analytics to evaluate project outcomes, review team efficiency, and generate detailed reports for future improvements.",
  },
];
