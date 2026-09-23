import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  FileDown, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Database, 
  Server, 
  Terminal, 
  Layers 
} from "lucide-react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript, 
  SiGithub, 
  SiLinkedin 
} from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import po1 from "../../assets/images/po1.jpg";
import resumePdf from "../../assets/images/YashikaResume.pdf";

export default function Home() {
  const techPills = [
    { name: "React.js", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" /> },
    { name: "Express.js", icon: <SiExpress className="w-3.5 h-3.5 text-[#071A33]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" /> },
  ];

  const highlights = [
    {
      title: "MERN Stack Specialist",
      desc: "React 19, Node.js, Express, MongoDB",
      icon: <Layers className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />,
    },
    {
      title: "Enterprise Solutions",
      desc: "Built Force Management System at PM Enterprises",
      icon: <Server className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />,
    },
    {
      title: "BCA Undergraduate",
      desc: "IFTM University (2023 – 2026)",
      icon: <Code2 className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-8 pb-16 lg:py-20 overflow-hidden bg-white bg-grid-mesh"
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#1769FF]/14 via-[#3B82F6]/08 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 left-[10%] w-[450px] h-[450px] bg-gradient-to-b from-[#EAF2FF] via-[#EAF2FF]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-[#EAF2FF]/70 to-transparent rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EAF2FF] border border-[#1769FF]/25 text-[#071A33] text-xs font-bold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1769FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1769FF]"></span>
              </span>
              <span>Available for Internships & Software Developer Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071A33] tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-[#071A33]">Yashika Chauhan</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                <span className="text-gradient-royal">Full Stack Developer</span>
              </div>

              <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1">
                BCA student engineering production-ready web applications with the <strong className="text-[#071A33] font-bold">MERN stack</strong>. I design clean RESTful APIs, scalable schemas, and responsive, accessible user interfaces.
              </p>
            </div>

            {/* Two Premium CTA Buttons + Resume */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group relative cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1769FF] hover:bg-[#071A33] text-white font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(23,105,255,0.3)] hover:shadow-[0_8px_25px_rgba(7,26,51,0.3)] active:scale-95 transition-all duration-300"
              >
                <span>View Selected Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EAF2FF] hover:bg-[#D6E6FF] text-[#071A33] border border-[#1769FF]/30 font-bold text-sm sm:text-base hover:border-[#1769FF] active:scale-95 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />
                <span>Contact Me</span>
              </ScrollLink>

              <a
                href={resumePdf}
                download="Yashika_Chauhan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm sm:text-base shadow-xs hover:border-slate-300 active:scale-95 transition-all duration-300"
              >
                <FileDown className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons & Tech Stack Ribbon */}
            <div className="pt-6 border-t border-[#EAF2FF] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              {/* Direct Social Links */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/yashika2244"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white border border-[#EAF2FF] text-[#071A33] hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-[#EAF2FF]/50 shadow-xs transition-all duration-200 flex items-center justify-center"
                >
                  <SiGithub className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yashika22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white border border-[#EAF2FF] text-[#0077B5] hover:border-[#1769FF]/40 hover:bg-[#EAF2FF]/50 shadow-xs transition-all duration-200 flex items-center justify-center"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>

                <a
                  href="mailto:chauhanyashika820@gmail.com"
                  aria-label="Email Yashika"
                  className="p-2.5 rounded-xl bg-white border border-[#EAF2FF] text-[#071A33] hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-[#EAF2FF]/50 shadow-xs transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" strokeWidth={2.3} />
                </a>
              </div>

              <div className="hidden sm:block w-px h-6 bg-[#EAF2FF]" />

              {/* Technologies Strip with Authentic Brand Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {techPills.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-[#EAF2FF] text-[#071A33] shadow-2xs hover:border-[#1769FF]/30 transition-colors"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DEVELOPER VISUAL ECOSYSTEM HUB (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Ambient Radial Electric Glow */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#1769FF]/20 via-[#3B82F6]/15 to-transparent rounded-full blur-3xl -z-10" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Floating Badge 1: React & Frontend Ecosystem (Top Left) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-3 sm:-left-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#EAF2FF] shadow-[0_10px_25px_rgba(7,26,51,0.08)]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center shrink-0">
                  <SiReact className="w-5 h-5 text-[#61DAFB]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#071A33] block leading-tight">React 19 & Tailwind</span>
                  <span className="text-[11px] font-semibold text-[#1769FF]">Interactive Frontend</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Node.js & Backend (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-6 -right-3 sm:-right-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#EAF2FF] shadow-[0_10px_25px_rgba(7,26,51,0.08)]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center shrink-0">
                  <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#071A33] block leading-tight">Node & Express APIs</span>
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    REST Architecture
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3: MongoDB Database (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="hidden sm:flex absolute bottom-8 -left-8 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-[#EAF2FF] shadow-[0_8px_20px_rgba(7,26,51,0.06)]"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EAF2FF] flex items-center justify-center shrink-0">
                  <SiMongodb className="w-4 h-4 text-[#47A248]" />
                </div>
                <span className="text-xs font-bold text-[#071A33]">MongoDB</span>
              </motion.div>

              {/* Central Portrait Showcase Card */}
              <div className="relative bg-white border border-[#EAF2FF] rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(7,26,51,0.08)]">
                
                {/* Visual Header Ribbon */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAF2FF] text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[11px] text-[#1769FF] bg-[#EAF2FF] px-2.5 py-0.5 rounded-md font-bold">
                    fullstack-engineer.dev
                  </span>
                </div>

                {/* Profile Photo Container with Clean Light Aesthetic */}
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-gradient-to-b from-[#EAF2FF]/50 to-slate-100 border border-[#EAF2FF] shadow-xs group">
                  <img
                    src={po1}
                    alt="Yashika Chauhan"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700"
                  />

                  {/* Top Floating Status Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EAF2FF] text-[#071A33] text-[11px] font-bold shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open for Roles</span>
                    </div>
                  </div>

                  {/* Bottom Frosted Glass Identity Card */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="bg-white/92 backdrop-blur-md border border-[#EAF2FF] rounded-xl p-3.5 shadow-[0_8px_24px_rgba(7,26,51,0.08)]">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-[#071A33] text-sm tracking-tight">
                            Yashika Chauhan
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1769FF]" strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-bold text-[#1769FF] bg-[#EAF2FF] px-2 py-0.5 rounded-md">
                          BCA '26
                        </span>
                      </div>

                      <p className="text-xs font-bold text-[#1769FF] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#1769FF]" strokeWidth={2.3} />
                        <span>Full Stack Engineer</span>
                      </p>
                      
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        MERN Stack • IFTM University
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini Status Strip */}
                <div className="mt-3.5 pt-3 border-t border-[#EAF2FF] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />
                    <span>Clean Architecture & REST APIs</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                    Production Ready
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM HERO HIGHLIGHTS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-[#EAF2FF] grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#EAF2FF] shadow-xs hover:border-[#1769FF]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#071A33] block">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
