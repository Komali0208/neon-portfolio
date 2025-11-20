"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#030014] pt-20 pb-10 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Logo / Name */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white tracking-wider">
              KKP<span className="text-neon-purple">.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Building the future with Intelligence & Data
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a 
              href="https://github.com/Komali0208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/kusumakomalipriya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kkp.kodimela@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 w-full max-w-md pt-8 flex flex-col items-center gap-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} K Kusuma Komali Priya. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>Designed & Built with</span>
              <Heart size={10} className="text-neon-pink fill-neon-pink animate-pulse" />
              <span>using Next.js & Tailwind</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
