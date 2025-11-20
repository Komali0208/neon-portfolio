"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Zap, ChevronRight } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Front-End Developer Intern",
    company: "YugaYatra Pvt Company",
    period: "Internship",
    description: [
      "Contributed to full-stack features and worked closely with the web-development team.",
      "Handled AI-related tasks, documented code, and collaborated in code reviews.",
      "Tech Stack: HTML, CSS, JavaScript, and backend integrations."
    ],
    icon: Briefcase,
    color: "text-neon-blue",
    border: "border-neon-blue"
  },
  {
    id: 2,
    role: "International Research Bootcamp",
    company: "Harvard-Cornell Alumni Program",
    period: "Research & Innovation",
    badge: "1st Place Internationally",
    description: [
      [cite_start]"Secured 1st place internationally in an intensive research bootcamp[cite: 42].",
      [cite_start]"Developed a machine-learning-based waste segregation prototype for recycling plants[cite: 43].",
      [cite_start]"Enabled automatic classification of recyclable vs. non-recyclable waste to promote sustainability[cite: 43]."
    ],
    icon: Award,
    color: "text-neon-pink",
    border: "border-neon-pink"
  },
  {
    id: 3,
    role: "Smart India Hackathon",
    company: "National Innovation Contest",
    period: "Hackathon Participant",
    description: [
      [cite_start]"Proposed a solar-electrical solution for SDG-7 by developing a sustainable power generation prototype[cite: 45].",
      [cite_start]"Shortlisted at the internal hackathon round for the energy-accessibility concept[cite: 45]."
    ],
    icon: Zap,
    color: "text-neon-purple",
    border: "border-neon-purple"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#030014]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Professional <span className="text-neon-blue">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]" />
        </motion.div>

        <div className="grid gap-8 max-w-4xl">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${item.color.split('-')[1]}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-md`} />
              
              <div className={`relative glass-panel p-8 rounded-xl border-l-4 ${item.border} hover:translate-x-2 transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Icon Container */}
                  <div className={`p-4 rounded-full bg-white/5 border border-white/10 ${item.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                    <item.icon size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white font-orbitron">{item.role}</h3>
                        <p className="text-sm text-gray-400">{item.company} • {item.period}</p>
                      </div>
                      {item.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-neon-pink/10 text-neon-pink border border-neon-pink/50 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mt-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                          <ChevronRight className={`w-4 h-4 mt-1 ${item.color} flex-shrink-0`} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
