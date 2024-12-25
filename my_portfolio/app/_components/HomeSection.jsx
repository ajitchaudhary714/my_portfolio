import React, { useState } from "react";
import { Heart, Code, Briefcase, Mail, ArrowRight } from "lucide-react";

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState("");

  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Git",
    "Figma",
  ];

  const experience = [
    { year: "2024", role: "Frontend Developer", company: "Web Solutions Ltd." },
    { year: "2022", role: "Junior Developer", company: "StartUp Crew" },
  ];

  const interests = [
    {
      icon: Heart,
      title: "Traveling",
      description: "Exploring new cultures and cuisines",
    },
    {
      icon: Briefcase,
      title: "Blogging",
      description: "Sharing my tech journey and tips",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Contributing to community projects",
    },
  ];

  return (
    <div className="bg-gradient-to-b  from-black via-purple-950 to-black text-white ">
      <div className="relative  bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-12 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-6 mx-auto pt-12 md:pt-0 max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-32">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl tracking-wide  font-extrabold text-gray-900 sm:text-5xl ">
                  <span className="block ">Hi there,</span>{" "}
                  <span className="block xl:inline">I am Ajit Verma</span>{" "}
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
                    Frontend Developer & UI/UX Enthusiast
                  </span>
                </h1>
                <p className="mt-4  text-xl tracking-wide text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-12 md:text-xl lg:mx-0">
                  Passionate about creating beautiful, responsive, and
                  user-friendly web applications. With 2 years of experience, I
                  bring ideas to life through code and creativity.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="w-full object-cover h-96 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/vermaji.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Skills Section */}
      <section className="bg-slate-900/50 backdrop-blur-sm py-20 ">
        <div className="container  max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Toolbox
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group bg-slate-800/50 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300"
              >
                <Code
                  className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  size={32}
                />
                <p className="font-semibold text-slate-200 group-hover:text-white">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="   py-24">
        <h2 className="text-2xl md:text-4xl  max-w-6xl mx-auto px-6 sm:px-10 md:px-16  font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Journey
        </h2>

        <div className="space-y-12 flex flex-col justify-center items-center ">
          {experience.map((job, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="flex-shrink-0  text-right font-bold text-blue-400">
                {job.year}
              </div>
              <div className="w-4 h-4 rounded-full bg-blue-500 relative">
                <div className="absolute inset-0 bg-blue-500/50 rounded-full animate-ping" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold whitespace-nowrap text-lg md:text-xl text-slate-200">
                  {job.role}
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  {job.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-gradient-to-b from-black via-purple-950 to-black backdrop-blur-sm py-24">
        <div className="container max-w-6xl mx-auto px-6 sm:px-10 md:px-16 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            When I'm Not Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-700/50 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(interest.title)}
                onMouseLeave={() => setHoveredCard("")}
              >
                <div className="mb-6">
                  <interest.icon
                    className="mx-auto text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    size={40}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-200 mb-3">
                  {interest.title}
                </h3>
                <p className="text-slate-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
};

export default HomePage;
