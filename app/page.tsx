import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#030014] overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
