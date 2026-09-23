import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Mail, Code2, Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#EAF2FF] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAF2FF]">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071A33] border border-[#1769FF]/30 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              <span className="text-white font-extrabold text-sm">YC</span>
            </div>
            <div>
              <span className="text-[#071A33] font-extrabold text-base block tracking-tight">
                Yashika Chauhan
              </span>
              <span className="text-slate-500 text-xs font-medium">
                Full Stack Developer • BCA Student
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
            {links.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-[#1769FF] cursor-pointer transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/yashika2244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-[#EAF2FF] text-slate-600 hover:text-[#071A33] hover:border-slate-300 hover:bg-[#EAF2FF]/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/yashika22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-[#EAF2FF] text-slate-600 hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-[#EAF2FF]/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:chauhanyashika820@gmail.com"
              aria-label="Direct Email"
              className="p-2.5 rounded-xl border border-[#EAF2FF] text-slate-600 hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-[#EAF2FF]/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-[#EAF2FF] text-[#1769FF] hover:bg-[#1769FF] hover:text-white transition-colors cursor-pointer ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Yashika Chauhan. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & Built with React, Tailwind CSS & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
