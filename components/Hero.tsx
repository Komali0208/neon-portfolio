"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, BrainCircuit } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid & Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Holographic Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-neon-blue/10 blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-neon-purple/10 blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 mb-6">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-neon-blue font-medium tracking-wide">OPEN TO WORK</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
              K Kusuma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Komali Priya
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-2 font-medium">
              Aspiring Technologist | AI & Data Science Enthusiast
            </p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about building intelligent, responsible, and secure data-driven systems. 
              Exploring the intersection of <span className="text-neon-blue">Algorithm</span> and <span className="text-neon-purple">Life</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-orbitron font-bold rounded-lg overflow-hidden transition-all hover:bg-neon-blue hover:text-black hover:shadow-neon-blue"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border border-white/10 text-white font-orbitron rounded-lg hover:bg-white/5 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Glass Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md relative group"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-30 group-hover:opacity-70 blur transition duration-500" />
            
            <div className="relative p-8 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              {/* Decorative Lines */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-purple/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-neon-blue/20 to-transparent" />

              {/* Floating Icons inside card */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-lg border border-white/10"
              >
                <BrainCircuit className="w-6 h-6 text-neon-purple" />
              </motion.div>

              <div className="flex flex-col items-center text-center pt-8">
                <div className="w-32 h-32 rounded-full border-2 border-neon-blue/50 p-1 mb-6 shadow-neon-blue relative">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual image */}
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                  {/* Online Status Dot */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-[0_0_10px_#22c55e]" />
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Technologist</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Database className="w-4 h-4" />
                  <span>Data Science & ML</span>
                </div>

                {/* Stats Row */}
                <div className="w-full grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-neon-blue font-bold text-xl">3+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                  </div>
                  <div>
                    <div className="text-neon-purple font-bold text-xl">1st</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Rank</div>
                  </div>
                  <div>
                    <div className="text-pink-500 font-bold text-xl">4</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
