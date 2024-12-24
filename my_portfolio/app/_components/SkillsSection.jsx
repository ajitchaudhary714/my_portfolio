// "use client";

// import React from "react";
// import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "React", icon: <FaReact className="text-5xl text-blue-500" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
//   { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-600" /> },
//   {
//     name: "Tailwind CSS",
//     icon: <SiTailwindcss className="text-5xl text-teal-500" />,
//   },
//   {
//     name: "TypeScript",
//     icon: <SiTypescript className="text-5xl text-blue-400" />,
//   },
// ];

// const skillLevels = [
//   { name: "React", level: 90 },
//   { name: "Next.js", level: 85 },
//   { name: "Tailwind CSS", level: 95 },
//   { name: "TypeScript", level: 80 },
//   { name: "JavaScript", level: 90 },
// ];

// export default function Skills() {
//   return (
//     <div className=" bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
//         <section>
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             My Tech Stack
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-12">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="bg-gray-800 p-6 rounded-full mb-4 hover:bg-gray-700 transition-colors duration-300">
//                   {skill.icon}
//                 </div>
//                 <span className="text-center font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="bg-gray-800 rounded-lg max-w-4xl mx-auto p-8 shadow-lg">
//           <h2 className="text-4xl font-bold mb-8 text-center">
//             Skill Proficiency
//           </h2>
//           <div className="space-y-8">
//             {skillLevels.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 className="w-full"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="flex justify-between mb-2">
//                   <span className="text-lg font-medium">{item.name}</span>
//                   <span className="text-lg font-medium">{item.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-3">
//                   <motion.div
//                     className="bg-gradient-to-r from-blue-500 to-teal-400 h-3 rounded-full"
//                     style={{ width: `${item.level}%` }}
//                     initial={{ width: 0 }}
//                     animate={{ width: `${item.level}%` }}
//                     transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", color: "bg-blue-500" },
  { name: "Next.js", icon: "▲", color: "bg-white" },
  { name: "JavaScript", icon: "JS", color: "bg-yellow-400" },
  { name: "CSS", icon: "🎨", color: "bg-blue-600" },
  { name: "Tailwind CSS", icon: "🌊", color: "bg-teal-500" },
  { name: "TypeScript", icon: "TS", color: "bg-blue-400" },
];

const skillLevels = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded-lg">
      <div
        className={`w-16 h-16 ${skill.color} rounded-xl flex items-center justify-center text-2xl font-bold transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
      >
        {skill.icon}
      </div>
      <span className="mt-4 text-lg font-medium text-gray-100 group-hover:text-white transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  </motion.div>
);

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-full space-y-2"
  >
    <div className="flex justify-between items-center">
      <span className="text-lg font-medium text-gray-100">{skill.name}</span>
      <span className="text-lg font-medium text-gray-300">{skill.level}%</span>
    </div>
    <div className="relative h-4 w-full bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        className="absolute h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
      >
        <div className="absolute inset-0 bg-white/30 blur-sm"></div>
      </motion.div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 space-y-20">
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl mb-10 font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            My Tech Stack
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-800 opacity-10 blur-3xl"></div>
          <div className="relative bg-gray-800/50 rounded-2xl backdrop-blur-sm p-8 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            >
              Skill Proficiency
            </motion.h2>
            <div className="space-y-8">
              {skillLevels.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
