import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, FileDown, Code2, Sparkles } from "lucide-react";
import resumePdf from "../assets/images/YashikaResume.pdf";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Experience", path: "experience" },
    { name: "Education", path: "education" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#EAF2FF] shadow-[0_4px_24px_rgba(7,26,51,0.04)] py-2.5"
            : "bg-white/60 backdrop-blur-md border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BRAND / LOGO */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#071A33] border border-[#1769FF]/30 flex items-center justify-center text-white font-bold text-base shadow-[0_4px_12px_rgba(23,105,255,0.2)] group-hover:border-[#1769FF] group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-extrabold text-sm tracking-tight">YC</span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#1769FF] border-2 border-white animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="text-[#071A33] font-bold text-base sm:text-lg tracking-tight leading-none group-hover:text-[#1769FF] transition-colors">
                Yashika Chauhan
              </span>
              <span className="text-slate-500 text-[11px] font-semibold tracking-wider uppercase mt-1">
                Full Stack Developer
              </span>
            </div>
          </ScrollLink>

          {/* DESKTOP NAV ITEMS */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <ul className="flex items-center gap-1 p-1 rounded-full bg-slate-50/80 border border-[#EAF2FF] text-xs font-semibold">
              {navItems.map((item) => (
                <li key={item.path}>
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="!text-[#1769FF] !bg-white !shadow-xs font-bold"
                    className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-[#1769FF] hover:bg-white/80 cursor-pointer transition-all duration-200 block"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Premium Resume Button */}
            <div className="pl-3 xl:pl-4">
              <a
                href={resumePdf}
                download="Yashika_Chauhan_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-[#1769FF] hover:bg-[#071A33] text-white shadow-[0_4px_14px_rgba(23,105,255,0.3)] hover:shadow-[0_6px_20px_rgba(7,26,51,0.25)] active:scale-95 transition-all duration-300"
              >
                <FileDown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={resumePdf}
              download="Yashika_Chauhan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-[#1769FF] text-white shadow-xs"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume</span>
            </a>
            <button
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
              className="p-2 rounded-xl text-[#071A33] hover:bg-[#EAF2FF] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white/95 backdrop-blur-2xl shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out border-l border-[#EAF2FF] lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#EAF2FF]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#071A33] flex items-center justify-center text-white font-bold text-xs">
                YC
              </div>
              <span className="font-bold text-[#071A33] text-sm">Portfolio Menu</span>
            </div>
            <button
              onClick={closeSidebar}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-[#EAF2FF] hover:text-[#071A33]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="mt-6 space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeSidebar}
                  spy={true}
                  activeClass="!bg-[#EAF2FF] !text-[#1769FF] !border-[#1769FF]/40 font-bold"
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent text-[#071A33] hover:bg-slate-50 font-semibold text-sm cursor-pointer transition-colors"
                >
                  <span>{item.name}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-[#EAF2FF]">
          <a
            href={resumePdf}
            download="Yashika_Chauhan_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1769FF] text-white font-bold text-sm shadow-[0_4px_16px_rgba(23,105,255,0.3)] hover:bg-[#071A33] transition"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </a>
          <p className="text-center text-xs text-slate-400 mt-3 font-medium">
            Open for internships & full-time roles
          </p>
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#071A33]/30 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
