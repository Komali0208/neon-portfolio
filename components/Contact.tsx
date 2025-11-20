"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-blue/5 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden border border-white/10">
            
            {/* Left Side: Contact Info */}
            <div className="lg:col-span-2 bg-[#030014]/90 backdrop-blur-xl p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-blue to-neon-purple" />
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[60px]" />

              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  Let's <span className="text-neon-blue">Connect</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <a href="mailto:kkp.kodimela@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-all">
                      <Mail className="w-5 h-5 text-gray-300 group-hover:text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-medium group-hover:text-neon-blue transition-colors">kkp.kodimela@gmail.com</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/kusumakomalipriya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-purple/50 group-hover:bg-neon-purple/10 transition-all">
                      <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">LinkedIn</p>
                      <div className="flex items-center gap-1">
                        <p className="text-white font-medium group-hover:text-neon-purple transition-colors">Kusuma Komali Priya</p>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon-purple" />
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/Komali0208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all">
                      <Github className="w-5 h-5 text-gray-300 group-hover:text-pink-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">GitHub</p>
                      <div className="flex items-center gap-1">
                        <p className="text-white font-medium group-hover:text-pink-500 transition-colors">Komali0208</p>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-pink-500" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Terminal className="w-4 h-4 text-neon-blue animate-pulse" />
                  <span>System Status: <span className="text-green-400">Online & Ready</span></span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3 bg-white/[0.02] backdrop-blur-lg p-10 border-l border-white/5 relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-neon-blue focus:ring-0 transition-colors peer"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-sm text-neon-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-neon-blue"
                  >
                    Your Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-500 peer-focus:w-full" />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-neon-purple focus:ring-0 transition-colors peer"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-neon-purple transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-neon-purple"
                  >
                    Email Address
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-purple transition-all duration-500 peer-focus:w-full" />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-pink-500 focus:ring-0 transition-colors peer resize-none"
                    placeholder="Message"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-sm text-pink-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-pink-500"
                  >
                    Your Message
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-pink-500 transition-all duration-500 peer-focus:w-full" />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-full py-4 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 rounded-lg overflow-hidden group transition-all hover:border-white/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 w-[200%] animate-slide" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2 font-orbitron font-bold text-white tracking-wider">
                      SEND MESSAGE
                      <Send className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </span>
                    
                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-neon-blue to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </button>
                </div>

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
