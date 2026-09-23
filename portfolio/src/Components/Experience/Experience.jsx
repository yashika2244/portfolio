import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "PM Enterprises",
      type: "Internship / Full Stack Role",
      duration: "Jul 2025 – Oct 2025",
      summary:
        "Contributed to production enterprise applications as a Full Stack Developer, architecting scalable frontend features, building secure API services, and optimizing client-side performance.",
      projects: [
        {
          name: "Force Management System (FMS)",
          details: [
            "Built responsive enterprise administrative dashboards and data-entry forms using React & Tailwind CSS.",
            "Developed and tested secure RESTful APIs with Node.js and Express.",
            "Integrated MongoDB schemas for users, task allocations, and service maintenance records.",
            "Optimized client state management, ensuring smooth navigation across large datasets.",
            "Collaborated within an agile team workflow, participating in sprint reviews and code audits.",
          ],
          tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        },
        {
          name: "Northsling Internal Web Modules",
          details: [
            "Redesigned and refined UI layouts for internal staff management tools.",
            "Integrated dynamic REST endpoints for real-time data visualization.",
            "Resolved cross-device UI inconsistencies and improved mobile accessibility.",
          ],
          tech: ["JavaScript", "React.js", "Tailwind CSS", "REST APIs"],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50/70 relative bg-grid-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3 h-3" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Engineering contributions to production software, enterprise dashboards, and cross-functional team codebases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 sm:pl-12 pb-8 last:pb-0"
            >
              {/* Vertical Glowing Timeline Line */}
              <div className="absolute left-3.5 sm:left-5 top-3 bottom-0 w-0.5 bg-gradient-to-b from-[#1769FF] via-[#3B82F6] to-[#EAF2FF]" />

              {/* Animated Pulsing Timeline Node */}
              <div className="absolute left-1.5 sm:left-3 top-2 w-5 h-5 rounded-full bg-[#1769FF] border-4 border-white shadow-[0_0_0_4px_rgba(23,105,255,0.2)] animate-pulse" />

              {/* Main Timeline Card */}
              <div className="bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,26,51,0.04)] hover:border-[#1769FF]/40 transition-all duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#EAF2FF]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A33]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-[#1769FF]">
                      <Building2 className="w-4 h-4" strokeWidth={2.3} />
                      <span>{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] text-[#1769FF] text-xs font-bold self-start sm:self-center border border-[#1769FF]/20 shadow-xs">
                    <Calendar className="w-4 h-4" strokeWidth={2.3} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed my-5">
                  {exp.summary}
                </p>

                {/* Key Projects */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Projects & Deliverables
                  </h4>

                  {exp.projects.map((project, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-slate-50/70 border border-[#EAF2FF]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-bold text-[#071A33] text-base flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1769FF]" />
                          {project.name}
                        </h5>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {project.details.map((point, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                          >
                            <ChevronRight className="w-4 h-4 text-[#1769FF] mt-0.5 shrink-0" strokeWidth={2.5} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#EAF2FF]">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-white border border-[#EAF2FF] text-[#071A33]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
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
