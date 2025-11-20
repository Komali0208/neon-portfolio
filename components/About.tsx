"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Globe, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                About
              </span>{" "}
              <span className="text-neon-blue">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Philosophy Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500" />
              <div className="relative p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl h-full flex flex-col justify-center min-h-[300px]">
                <div className="absolute top-4 left-4 text-neon-blue/20">
                  <Code size={48} />
                </div>
                <div className="absolute bottom-4 right-4 text-neon-purple/20">
                  <Cpu size={48} />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
                  "Life as an <br />
                  <span className="text-neon-blue">Infinite Algorithm</span>"
                </h3>
                <p className="text-gray-400 text-center italic leading-relaxed">
                  I possess a deep philosophical curiosity about AI. I view the world through the lens of logic and creativity, aiming to decode the patterns that shape our reality.
                </p>
              </div>
            </div>

            {/* Right Column - Bio Details */}
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am an aspiring technologist [cite: 4] with strong interests in 
                  <span className="text-neon-blue font-medium"> Artificial Intelligence</span> and 
                  <span className="text-neon-purple font-medium"> Data Science</span>[cite: 4]. 
                  I focus on understanding intelligent systems and how data can be used responsibly and securely[cite: 5].
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="text-neon-blue w-5 h-5" />
                    <h4 className="font-orbitron text-sm text-white">Role</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Enthusiastic Freshman [cite: 4]</p>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neon-purple/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-neon-purple w-5 h-5" />
                    <h4 className="font-orbitron text-sm text-white">Focus</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Scientific Innovation [cite: 4]</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-4">
                Currently aiming to apply and expand Data Science capabilities through real-world projects with Creativity and Technical Depth[cite: 5].
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
