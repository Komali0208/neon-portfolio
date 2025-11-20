"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, BrainCircuit, Code2, Database } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    description: "A high-precision ML model to identify fraudulent transactions. Implemented Random Forest with Genetic Algorithm optimization and SMOTE for class imbalance.",
    stats: "99.96% Accuracy",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    links: { github: "#", demo: "#" },
    color: "text-neon-purple",
    border: "group-hover:border-neon-purple",
    glow: "group-hover:shadow-neon-purple",
    icon: BrainCircuit
  },
  {
    id: 2,
    title: "AI-Powered Gamified Platform",
    category: "Web Development + AI",
    description: "An interactive coding platform featuring AI-generated comics to explain concepts. Includes a reward system, leaderboards, and coding duels.",
    stats: "AI Integration",
    tech: ["React", "Node.js", "Python", "Firebase"],
    links: { github: "#", demo: "#" },
    color: "text-neon-blue",
    border: "group-hover:border-neon-blue",
    glow: "group-hover:shadow-neon-blue",
    icon: Code2
  },
  {
    id: 3,
    title: "Student Management System",
    category: "Full Stack Web",
    description: "Web platform streamlining attendance and assignments. Enables real-time communication between teachers and students.",
    stats: "Real-time Data",
    tech: ["HTML/CSS", "JavaScript", "SQL"],
    links: { github: "#", demo: "#" },
    color: "text-pink-500",
    border: "group-hover:border-pink-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    icon: Database
  },
  {
    id: 4,
    title: "Todo List Application",
    category: "Utility App",
    description: "A lightweight, efficient task management application with persistent storage and a clean user interface.",
    stats: "CRUD Operations",
    tech: ["Python", "SQLite"],
    links: { github: "#", demo: "#" },
    color: "text-green-400",
    border: "group-hover:border-green-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]",
    icon: Layers
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background with Hover Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl opacity-0 transition duration-500 ${project.glow} opacity-0 group-hover:opacity-100 blur`} />
              
              <div className="relative h-full glass-panel p-8 rounded-xl border border-white/10 transition-all duration-300 flex flex-col">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg bg-white/5 ${project.color}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6 flex-1">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neon-purple font-medium mb-3">
                    {project.category} <span className="text-gray-500 mx-2">|</span> <span className="text-gray-300">{project.stats}</span>
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
