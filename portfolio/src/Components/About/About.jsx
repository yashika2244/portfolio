import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Lightbulb, 
  GraduationCap, 
  MapPin, 
  Mail, 
  FileDown, 
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Cpu
} from "lucide-react";
import resumePdf from "../../assets/images/YashikaResume.pdf";
import po1 from "../../assets/images/po1.jpg";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  const highlights = [
    {
      icon: Layers,
      title: "MERN Stack Engineering",
      desc: "Architecting end-to-end web apps with React 19, Node.js, Express, and MongoDB.",
      tag: "Full Stack"
    },
    {
      icon: Code2,
      title: "Modern UI/UX Development",
      desc: "Creating pixel-perfect, accessible, and fast-loading web interfaces with Tailwind CSS.",
      tag: "Frontend"
    },
    {
      icon: Terminal,
      title: "RESTful API Integration",
      desc: "Building clean, documented, and secure endpoints with proper validation and error handling.",
      tag: "Backend"
    },
    {
      icon: Lightbulb,
      title: "Algorithmic Problem Solving",
      desc: "Strong computer science fundamentals rooted in C++, data structures, and continuous practice.",
      tag: "DSA & Logic"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle mesh & ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-[#EAF2FF] to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#EAF2FF]/70 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.3} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Engineering web solutions with curiosity & discipline.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A developer who bridges technical backend logic with modern, high-conversion frontend experiences.
          </p>
        </div>

        {/* Main Content: Developer Profile Card (Left) + Detailed Highlights (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DEVELOPER PROFILE CARD (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(7,26,51,0.05)] relative overflow-hidden">
              {/* Card top decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769FF] via-[#3B82F6] to-[#071A33]" />

              {/* Developer Avatar & Name Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#EAF2FF]">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#1769FF] shadow-sm">
                    <img
                      src={po1}
                      alt="Yashika Chauhan"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#071A33] tracking-tight">
                    Yashika Chauhan
                  </h3>
                  <p className="text-xs font-semibold text-[#1769FF]">
                    Full Stack Developer • BCA Student
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    IFTM University (2023 – 2026)
                  </p>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="py-6 space-y-3.5 text-sm text-slate-600 leading-relaxed border-b border-[#EAF2FF]">
                <p>
                  I am a passionate software developer focused on building scalable, production-grade applications with the <strong className="text-[#071A33]">MERN Stack</strong>.
                </p>
                <p>
                  Through rigorous coursework in Computer Applications and real-world development experience, I take pride in crafting clean database schemas, secure APIs, and responsive UI components that deliver an effortless user experience.
                </p>
              </div>

              {/* Quick Details Badges with High-Contrast Icon Containers */}
              <div className="py-6 space-y-3 text-xs">
                {/* Location */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#1769FF]/30 transition-colors">
                  <span className="text-slate-600 font-medium flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shrink-0">
                      <MapPin className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />
                    </div>
                    <span>Location</span>
                  </span>
                  <span className="font-bold text-[#071A33]">Bijnor, UP, India</span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#1769FF]/30 transition-colors">
                  <span className="text-slate-600 font-medium flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shrink-0">
                      <Mail className="w-4 h-4 text-[#1769FF]" strokeWidth={2.3} />
                    </div>
                    <span>Email</span>
                  </span>
                  <span className="font-bold text-[#071A33] truncate max-w-[180px]">chauhanyashika820@gmail.com</span>
                </div>

                {/* Degree */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EAF2FF]/60 border border-[#1769FF]/20 text-[#071A33] hover:border-[#1769FF]/40 transition-colors">
                  <span className="font-medium flex items-center gap-2.5 text-slate-700">
                    <div className="w-7 h-7 rounded-lg bg-[#1769FF] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.3} />
                    </div>
                    <span>Degree</span>
                  </span>
                  <span className="font-bold text-[#1769FF]">BCA '26</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href={resumePdf}
                  download="Yashika_Chauhan_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#071A33] hover:bg-[#1769FF] text-white font-bold text-sm shadow-[0_4px_16px_rgba(7,26,51,0.2)] hover:shadow-[0_4px_20px_rgba(23,105,255,0.3)] transition-all duration-300"
                >
                  <FileDown className="w-4 h-4" strokeWidth={2.3} />
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 4 PILLARS & HIGHLIGHT CARDS (7 COLS) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border border-[#EAF2FF] rounded-2xl p-6 shadow-[0_4px_20px_rgba(7,26,51,0.03)] hover:border-[#1769FF]/50 hover:shadow-[0_12px_30px_rgba(23,105,255,0.14)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* High-Contrast Icon Container: Bold Royal Blue idle, Bold White on Electric Blue hover */}
                      <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] border border-[#1769FF]/30 flex items-center justify-center text-[#1769FF] group-hover:bg-[#1769FF] group-hover:text-white group-hover:border-[#1769FF] group-hover:shadow-[0_6px_20px_rgba(23,105,255,0.35)] group-hover:scale-105 transition-all duration-300 shrink-0">
                        <IconComp className="w-6 h-6 transition-colors" strokeWidth={2.3} />
                      </div>

                      <span className="text-[11px] font-bold text-[#1769FF] bg-[#EAF2FF] px-2.5 py-0.5 rounded-full border border-[#1769FF]/20">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#071A33] mb-2 group-hover:text-[#1769FF] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EAF2FF] flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-[#1769FF] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#1769FF] shrink-0" strokeWidth={2.3} />
                    <span>Production Oriented</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
