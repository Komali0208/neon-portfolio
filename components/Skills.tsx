"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Library, Users, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C/C++", "SQL", "HTML/CSS", "JavaScript"],
    color: "border-neon-blue",
    text: "text-neon-blue"
  },
  {
    title: "Frameworks & Design",
    icon: Cpu,
    skills: ["React", "Node.js", "Figma"],
    color: "border-neon-purple",
    text: "text-neon-purple"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Kaggle", "VS Code"],
    color: "border-pink-500",
    text: "text-pink-500"
  },
  {
    title: "Libraries",
    icon: Library,
    skills: ["pandas", "scikit-learn", "Matplotlib"],
    color: "border-green-400",
    text: "text-green-400"
  }
];

const softSkills = [
  "Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Technical <span className="text-neon-blue">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${category.text}`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-orbitron font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full border bg-white/5 text-gray-300 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all cursor-default ${category.color}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Brain className="text-neon-purple w-6 h-6" />
            <h3 className="text-2xl font-orbitron font-bold text-white">Soft Skills</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-neon-purple/5 border border-neon-purple/20 text-gray-300 hover:text-neon-purple hover:border-neon-purple hover:shadow-neon-purple hover:bg-neon-purple/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
