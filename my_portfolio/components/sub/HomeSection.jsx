import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, Briefcase, Heart, Mail } from "lucide-react";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState("HomeSection");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 dark:text-white transition-colors duration-300 max-w-7xl mx-auto ">
      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            src="/ajit.jpg"
            alt="Developer's portrait"
            width={150}
            height={150}
            className="mx-auto w-80 h-80 rounded-full border-4 border-blue-500"
          />
        </motion.div>
        <motion.h1 className="mt-6 text-5xl font-bold" variants={itemVariants}>
          Ajit Verma
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-300 dark:text-gray-300"
          variants={itemVariants}
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-gray-400 dark:text-gray-400"
          variants={itemVariants}
        >
          Passionate about creating beautiful, responsive, and user-friendly web
          applications. With 5 years of experience, I bring ideas to life
          through code and creativity.
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <section className="bg-gray-900 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-100 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Toolbox
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Git",
              "Figma",
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="mx-auto mb-4 text-blue-500" size={32} />
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-100 dark:text-gray-300"
          variants={itemVariants}
        >
          My Journey
        </motion.h2>
        <div className="space-y-8">
          {[
            {
              year: "2023",
              role: "Senior Frontend Developer",
              company: "Tech Innovators Inc.",
            },
            {
              year: "2021",
              role: "Frontend Developer",
              company: "Web Solutions Ltd.",
            },
            { year: "2019", role: "Junior Developer", company: "StartUp Crew" },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-32 text-right font-bold text-blue-500">
                {job.year}
              </div>
              <motion.div
                className="w-4 h-4 rounded-full bg-blue-500"
                whileHover={{ scale: 1.2 }}
              ></motion.div>
              <div>
                <h3 className="font-semibold text-gray-100 dark:text-gray-300">
                  {job.role}
                </h3>
                <p className="text-gray-400 dark:text-gray-400">
                  {job.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Personal Interests */}
      <section className="bg-gray-900 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-100 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            When I'm Not Coding
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
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
            ].map((interest, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(interest.title)}
                onHoverEnd={() => setIsHovered("")}
              >
                <motion.div
                  animate={{
                    rotate: isHovered === interest.title ? 360 : 0,
                    scale: isHovered === interest.title ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <interest.icon
                    className="mx-auto mb-4 text-blue-500"
                    size={32}
                  />
                </motion.div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-100 dark:text-gray-300"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="mb-8 text-gray-300 dark:text-gray-400"
          variants={itemVariants}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </motion.p>
        <motion.a
          href="mailto:jane.doe@example.com"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="mr-2" size={20} />
          Get In Touch
          <ArrowRight className="ml-2" size={20} />
        </motion.a>
      </motion.section>
    </div>
  );
};

export default HomePage;
