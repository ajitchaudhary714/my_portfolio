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
    {
      year: "2023",
      role: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
    },
    { year: "2021", role: "Frontend Developer", company: "Web Solutions Ltd." },
    { year: "2019", role: "Junior Developer", company: "StartUp Crew" },
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
    <div className="bg-gradient-to-b from-black via-purple-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="space-y-6">
          <div className="relative w-80 h-80 mx-auto">
            <img
              src="/ajit.jpg"
              alt="Developer's portrait"
              className="rounded-full border-4 border-blue-500 object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
          </div>

          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Ajit Verma
          </h1>

          <p className="text-2xl text-slate-300">
            Frontend Developer & UI/UX Enthusiast
          </p>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Passionate about creating beautiful, responsive, and user-friendly
            web applications. With 5 years of experience, I bring ideas to life
            through code and creativity.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-900/50 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Journey
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-32 text-right font-bold text-blue-400">
                {job.year}
              </div>
              <div className="w-4 h-4 rounded-full bg-blue-500 relative">
                <div className="absolute inset-0 bg-blue-500/50 rounded-full animate-ping" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-xl text-slate-200">
                  {job.role}
                </h3>
                <p className="text-slate-400">{job.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-gradient-to-b from-black via-purple-950 to-black backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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
                <h3 className="text-xl font-semibold text-slate-200 mb-3">
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
