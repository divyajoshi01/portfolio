import React from "react";
import { motion } from "framer-motion";

const Projects = () => {

  const projects = [


    {
      id: 2,
      title: "Portfolio Website",
      description: "This personal website is built with React and Tailwind CSS.",
      image: "portfolio.png",
      link: "#",
      tags: ["Tailwind", "Portfolio"]
    },
    {
      id: 3,
      title: "EduAssess - Online Exam Portal",
      description: "A full-stack online exam portal built with MERN stack. It includes student and teacher dashboards, exam creation, question management, test attempts, and result tracking.",
      image: "edu_assess.png",
      link: "https://edu-assess-o3ap.vercel.app/",
      tags: ["MERN", "React", "Node.js", "MongoDB", "JWT"]

    },
    {
      id: 4,
      title: "Safe_Home",
      description: "A web application focused on pg booking app.",
      image: "safeHome.png",
      link: "#",
      tags: ["React", "Express", "TailwindCSS", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            About This <span className="text-indigo-500">Project</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I'm <span className="text-white font-semibold">Divya Joshi</span>.
            The projects below dynamically generate responsive cards that display
            details in a clean and user-friendly layout.
          </motion.p>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }} // Staggered effect
              whileHover={{ y: -10 }} // Lift up on hover
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 group shadow-xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-md border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-xl transition-all active:scale-95"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;