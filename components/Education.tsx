"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Indian Institute of Technology Madras",
    degree: "Bachelor of Science",
    duration: "2024 - 2028",
    location: "Chennai, Tamil Nadu",
    current: true,
  },
  {
    id: 2,
    institution: "Narayana Junior College",
    degree: "MPC, Intermediate",
    duration: "2021 - 2023",
    location: "Vijayawada, Andhra Pradesh",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Academic <span className="text-neon-purple">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#bc13fe]" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Neon Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-50" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-neon-blue z-10 shadow-[0_0_10px_#00f3ff]">
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-75" />
                  )}
                </div>

                {/* Spacer for desktop layout centering */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`group relative p-6 glass-panel rounded-xl border-l-4 ${item.current ? 'border-neon-blue' : 'border-neon-purple'} hover:bg-white/5 transition-all duration-300`}>
                    
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white font-orbitron group-hover:text-neon-blue transition-colors">
                        {item.institution}
                      </h3>
                      <GraduationCap className={`w-6 h-6 ${item.current ? 'text-neon-blue' : 'text-gray-500'}`} />
                    </div>
                    
                    <div className="text-lg text-gray-300 mb-4 font-medium">
                      {item.degree}
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neon-purple" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neon-purple" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
