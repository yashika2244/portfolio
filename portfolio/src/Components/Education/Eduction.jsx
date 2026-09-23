import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";

export default function Education() {
  const timelineMilestones = [
    {
      type: "degree",
      period: "2023 – 2026",
      status: "Currently Pursuing",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "IFTM University",
      location: "Moradabad, Uttar Pradesh",
      description:
        "Comprehensive undergraduate degree in Computer Applications covering Full Stack Web Engineering, MERN Stack, Object-Oriented Programming (C++), Operating Systems, DBMS, and Data Structures & Algorithms.",
      highlights: [
        "Core specialization: Modern Full Stack Web Applications",
        "Consistent academic rigor and practical project execution"
      ]
    },
    {
      type: "certification",
      period: "2023 – 2024",
      status: "Verified Bootcamps",
      title: "Web Engineering & JavaScript Bootcamps",
      institution: "Technical Certifications",
      location: "Online / Practical",
      description:
        "Completed rigorous specialized bootcamps in modern front-end engineering, advanced responsive architectures, and deep JavaScript internals.",
      certList: [
        { name: "Tailwind CSS Bootcamp", desc: "Mastered utility-first responsive web design & design systems" },
        { name: "JavaScript Bootcamp", desc: "Deep dive into ES6+, asynchronous promises, and DOM manipulation" }
      ],
      highlights: [
        "Modern ES6+ coding standards & asynchronous flows",
        "Fast prototyping with utility-first CSS systems"
      ]
    },
    {
      type: "school",
      period: "2022 – 2023",
      status: "Completed",
      title: "Senior Secondary (12th Intermediate)",
      institution: "Uttar Pradesh Board",
      location: "Uttar Pradesh, India",
      description:
        "Completed 12th standard with Science stream (Mathematics, Physics, Chemistry, Hindi, and English), cultivating strong mathematical reasoning and analytical problem solving.",
      highlights: [
        "Mathematics & Science specialization",
        "Analytical foundation for software engineering"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3 h-3" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Structured computer science education and verified technical learning milestones.
          </p>
        </div>

        {/* Timeline Container (matching Experience timeline style) */}
        <div className="max-w-4xl mx-auto">
          {timelineMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 pb-10 last:pb-0"
            >
              {/* Vertical Timeline Line */}
              <div className="absolute left-3.5 sm:left-5 top-3 bottom-0 w-0.5 bg-gradient-to-b from-[#1769FF] via-[#3B82F6] to-[#EAF2FF]" />

              {/* Pulsing Timeline Node */}
              <div className="absolute left-1.5 sm:left-3 top-2 w-5 h-5 rounded-full bg-[#1769FF] border-4 border-white shadow-[0_0_0_4px_rgba(23,105,255,0.2)] animate-pulse" />

              {/* Card Container */}
              <div className="bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,26,51,0.04)] hover:border-[#1769FF]/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#EAF2FF]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A33]">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-semibold text-[#1769FF]">
                      <span>{item.institution}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#1769FF] text-xs font-bold border border-[#1769FF]/20">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={2.3} />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed my-4">
                  {item.description}
                </p>

                {/* Sublist for certifications if present */}
                {item.certList && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                    {item.certList.map((cert, cIdx) => (
                      <div key={cIdx} className="p-3.5 rounded-xl bg-slate-50 border border-[#EAF2FF]">
                        <span className="font-bold text-xs text-[#071A33] block mb-0.5">
                          {cert.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block leading-tight">
                          {cert.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-[#EAF2FF]">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#1769FF] shrink-0" strokeWidth={2.3} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
