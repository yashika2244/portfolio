import React from "react";
import { motion } from "framer-motion";
import { FileDown, Mail, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import resumePdf from "../../assets/images/YashikaResume.pdf";

export default function ResumeCTA() {
  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden bg-grid-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#071A33] via-[#0A254A] to-[#071A33] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_60px_rgba(7,26,51,0.25)] border border-[#1769FF]/30 overflow-hidden"
        >
          {/* Subtle Decorative Ambient Lighting Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1769FF]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#3B82F6]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Career & Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Interested in working together?
            </h2>

            <p className="mt-4 text-blue-100/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Download my resume to learn more about my skills, technical coursework, and real-world project experience. I am actively seeking software development internships and full-time opportunities.
            </p>

            {/* Verification checklist */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 mt-6 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                MERN Stack Production Ready
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                Available for Immediate Joining
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                Strong CS Fundamentals & Problem Solving
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={resumePdf}
                download="Yashika_Chauhan_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#071A33] hover:bg-[#EAF2FF] font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-300"
              >
                <FileDown className="w-5 h-5 text-[#1769FF] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base backdrop-blur-md active:scale-95 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-blue-300" />
              </ScrollLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
