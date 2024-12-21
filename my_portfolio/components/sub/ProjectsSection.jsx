import React from "react";
import { Card, CardContent } from "@/components/ui/CardProject";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce site built with Next.js and Tailwind CSS",
    image: "/projext1.png",
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality",
    image: "/image.png",
    tags: ["React", "DnD", "UI/UX"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A customizable portfolio template built with Next.js and Tailwind CSS",
    image: "/conqt.png",
    tags: ["Next.js", "Portfolio", "Responsive"],
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-black  py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Featured Projects
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Explore my latest work and creative endeavors in web development and
            design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group bg-slate-900/50 border-slate-800 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="relative p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full ring-1 ring-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
