"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce site built with Next.js and Tailwind CSS",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A customizable portfolio template built with Next.js and Tailwind CSS",
    image: "/placeholder.svg?height=200&width=300",
  },
];

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
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ProjectsSection() {
  return (
    <div className=" bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
