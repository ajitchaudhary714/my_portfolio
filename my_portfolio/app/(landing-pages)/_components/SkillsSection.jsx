"use client";

import React from "react";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-5xl text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
  { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-600" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-teal-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-400" />,
  },
];

const skillLevels = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
];

export default function Skills() {
  return (
    <div className=" bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-800 p-6 rounded-full mb-4 hover:bg-gray-700 transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-center font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Skill Proficiency
          </h2>
          <div className="space-y-8">
            {skillLevels.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">{item.name}</span>
                  <span className="text-lg font-medium">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-teal-400 h-3 rounded-full"
                    style={{ width: `${item.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
