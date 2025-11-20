import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"] 
});

export const metadata: Metadata = {
  title: "K Kusuma Komali Priya | AI Technologist",
  description: "Portfolio of an aspiring technologist specializing in AI, Data Science, and intelligent systems.",
  keywords: ["AI", "Data Science", "Portfolio", "Machine Learning", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-background text-white antialiased selection:bg-neon-blue selection:text-black overflow-x-hidden`}>
        {/* Background effects container */}
        <div className="fixed inset-0 z-[-1] bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[120px]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
