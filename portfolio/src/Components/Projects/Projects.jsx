import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";

import webcraft1 from "../../assets/images/webcraft1.png";
import webcraft2 from "../../assets/images/webcraft2.png";

import ramlal1 from "../../assets/images/ramlal1.png";
import ramlal2 from "../../assets/images/ramlal2.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: "fms",
      title: "Force Management System (FMS)",
      tagline: "Enterprise Operational Management & Duty Allocation",
      category: "Full Stack",
      featured: true,
      description:
        "A full-stack enterprise workforce dashboard built at PM Enterprises to manage personnel scheduling, duty logging, and service tracking with role-based access control.",
      highlights: [
        "Built responsive administrative dashboards with dynamic analytics and status filters.",
        "Engineered RESTful endpoints in Node.js & Express for real-time duty assignments.",
        "Designed optimized MongoDB schemas for users, tasks, and audit logs.",
        "Enhanced state management for frictionless pagination across large datasets."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      image: service4,
      liveUrl: "#", // Placeholder
      githubUrl: "https://github.com/yashika2244", // Placeholder
      badge: "Enterprise Flagship",
      isPlaceholder: true,
    },
    {
      id: "getmyservices",
      title: "GetMyServices Platform",
      tagline: "On-Demand Service Booking Marketplace",
      category: "Full Stack",
      featured: false,
      description:
        "Comprehensive service marketplace connecting homeowners with verified professionals for repairs, maintenance, and wellness with instant scheduling.",
      highlights: [
        "JWT-based dual authentication for customers and service providers.",
        "Dynamic category filtering, location-based search, and verified reviews.",
        "Live availability booking calendars and instant confirmation pipelines."
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      image: service1,
      liveUrl: "https://serivce.vercel.app/",
      githubUrl: "https://github.com/yashika2244/Serivce",
      badge: "Featured MERN App",
      isPlaceholder: false,
    },
    {
      id: "webcraft",
      title: "Webcraft UI",
      tagline: "Modern UI Kit & Responsive Component System",
      category: "Frontend",
      featured: false,
      description:
        "A modern, responsive component library and template system crafted to empower web developers to assemble accessible interfaces rapidly.",
      highlights: [
        "Fully responsive UI elements adapted for mobile, tablet, and desktop screens.",
        "Clean typography tokens, accessible contrast, and zero external baggage.",
        "Production-ready cards, modals, sliders, and navigation headers."
      ],
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
      image: webcraft1,
      liveUrl: "https://web-craft-eosin.vercel.app",
      githubUrl: "https://github.com/Prashantpal123/WebCraft",
      badge: "UI / UX Kit",
      isPlaceholder: false,
    },
    {
      id: "eventora",
      title: "Eventora – Event Platform",
      tagline: "Event Discovery, Ticketing & Registration",
      category: "Full Stack",
      featured: false,
      description:
        "A modern web platform for discovering local conferences, booking tickets, and empowering organizers to manage participant registration smoothly.",
      highlights: [
        "Comprehensive event directory with live dates, venues, and ticket types.",
        "Secure registration pipeline with automated pass confirmation.",
        "Organizer dashboard for tracking attendance and schedule updates."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: service6,
      liveUrl: "#", // Placeholder
      githubUrl: "https://github.com/yashika2244", // Placeholder
      badge: "Full Stack App",
      isPlaceholder: true,
    },
    {
      id: "ramlal",
      title: "Ram-Lal Singh SVM Portal",
      tagline: "Academic Institution Web Portal",
      category: "Frontend",
      featured: false,
      description:
        "An official institutional web application for Ram-Lal Singh Chauhan SVM featuring academic programs, notices, achievements, and parent information.",
      highlights: [
        "Real-time school notice board and announcement broadcasts.",
        "Accessible, high-readability design tuned for students and faculty.",
        "Fast-loading semantic markup with optimized assets and cross-device testing."
      ],
      techStack: ["React.js", "JavaScript", "Tailwind CSS"],
      image: ramlal1,
      liveUrl: "https://ram-lal-singh-chauhan-svm.vercel.app/#",
      githubUrl: "https://github.com/Prashantpal123/RamLal-singh-chauhan-svm",
      badge: "Web Application",
      isPlaceholder: false,
    },
  ];

  const filterOptions = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#EAF2FF]/60 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>MY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A curated collection of full-stack platforms, design systems, and real-world client applications.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#071A33] text-white shadow-[0_4px_12px_rgba(7,26,51,0.2)]"
                    : "bg-[#EAF2FF]/70 text-[#071A33] hover:bg-[#EAF2FF]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 1. FEATURED HERO PROJECT (LARGE ASYMMETRICAL 2-COLUMN SHOWCASE) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 bg-white border border-[#EAF2FF] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(7,26,51,0.06)] hover:border-[#1769FF]/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              {/* Image side (7 cols) */}
              <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-[440px] bg-slate-900 overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#071A33]/90 text-white backdrop-blur-md border border-[#1769FF]/30 shadow-xs">
                    {featuredProject.badge}
                  </span>
                </div>
              </div>

              {/* Content side (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full bg-white">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF]">
                    {featuredProject.tagline}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] mt-1 mb-3 group-hover:text-[#1769FF] transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {featuredProject.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {featuredProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1769FF] mt-0.5 shrink-0" strokeWidth={2.3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#EAF2FF] text-[#071A33] border border-[#1769FF]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#EAF2FF] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {featuredProject.liveUrl && featuredProject.liveUrl !== "#" ? (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1769FF] hover:bg-[#071A33] text-white font-bold text-xs shadow-xs transition"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
                      </a>
                    ) : (
                      <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-500 font-semibold text-xs cursor-default">
                        Internal PM Enterprises System
                      </span>
                    )}

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#EAF2FF] hover:border-slate-400 text-slate-700 font-bold text-xs shadow-xs transition"
                    >
                      <Github className="w-4 h-4" strokeWidth={2.4} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* 2. SECONDARY 2-COLUMN PROJECT SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#EAF2FF] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(7,26,51,0.04)] hover:border-[#1769FF]/40 hover:shadow-[0_16px_40px_rgba(23,105,255,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview with Gradient Overlay */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden border-b border-[#EAF2FF]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#071A33] backdrop-blur-md shadow-xs border border-[#EAF2FF]">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1769FF] block mb-1">
                    {project.tagline}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A33] group-hover:text-[#1769FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mt-2.5 mb-5">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#1769FF] mt-0.5 shrink-0" strokeWidth={2.3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#EAF2FF]">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#EAF2FF] text-[#071A33]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1769FF] hover:bg-[#071A33] text-white font-bold text-xs shadow-xs transition"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" strokeWidth={2.4} />
                    </a>
                  ) : (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 font-semibold text-xs cursor-default">
                      Staging / Internal
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-[#EAF2FF] font-bold text-xs shadow-xs transition"
                    >
                      <Github className="w-4 h-4" strokeWidth={2.4} />
                      <span>Code</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
