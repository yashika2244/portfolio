import React from "react";
import { motion } from "framer-motion";
import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Code2, 
  Sparkles
} from "lucide-react";
import { SiPostman, SiVite } from "react-icons/si";

import htmlImg from "../../assets/images/html-icon.png";
import bootstrapImg from "../../assets/images/bootstrap-4-icon.png";
import cppImg from "../../assets/images/cpp.png";
import cssImg from "../../assets/images/css.png";
import jsImg from "../../assets/images/javascript.png";
import reactImg from "../../assets/images/react.png";
import tailcssImg from "../../assets/images/tailwind.png";
import backImg from "../../assets/images/database.png";
import expresImg from "../../assets/images/express.png";
import nodeImg from "../../assets/images/node.png";
import gitImg from "../../assets/images/git.png";
import GitHubImg from "../../assets/images/github.png";
import mongoImg from "../../assets/images/mongodb.png";
import restApiImg from "../../assets/images/restapi.png";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      badge: "User Interface & Experience",
      skills: [
        { name: "React.js", category: "Core UI", img: reactImg, tag: "v19 / SPA" },
        { name: "JavaScript (ES6+)", category: "Language", img: jsImg, tag: "Async / DOM" },
        { name: "Tailwind CSS", category: "Styling", img: tailcssImg, tag: "Utility First" },
        { name: "HTML5", category: "Markup", img: htmlImg, tag: "Semantic" },
        { name: "CSS3", category: "Design", img: cssImg, tag: "Flexbox / Grid" },
        { name: "Bootstrap", category: "Framework", img: bootstrapImg, tag: "Responsive" },
      ]
    },
    {
      title: "Backend & API Architecture",
      icon: Server,
      badge: "Server & Microservices",
      skills: [
        { name: "Node.js", category: "Runtime", img: nodeImg, tag: "Event-Driven" },
        { name: "Express.js", category: "Framework", img: expresImg, tag: "REST Middleware" },
        { name: "RESTful APIs", category: "Architecture", img: restApiImg, tag: "CRUD & Auth" },
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      badge: "Data Models & Schemas",
      skills: [
        { name: "MongoDB", category: "NoSQL", img: mongoImg, tag: "Mongoose / BSON" },
        { name: "MySQL / DBMS", category: "Relational", img: backImg, tag: "SQL Queries" },
      ]
    },
    {
      title: "Tools & Core Engineering",
      icon: Wrench,
      badge: "Workflow & Fundamentals",
      skills: [
        { name: "Git", category: "VCS", img: gitImg, tag: "Branching" },
        { name: "GitHub", category: "Platform", img: GitHubImg, tag: "CI / Collaboration" },
        { name: "Postman", category: "Testing", reactIcon: <SiPostman className="w-5 h-5 text-[#FF6C37]" />, tag: "API Verification" },
        { name: "Vite", category: "Bundler", reactIcon: <SiVite className="w-5 h-5 text-[#646CFF]" />, tag: "Fast HMR" },
        { name: "C & C++", category: "Language", img: cppImg, tag: "DSA & Problem Solving" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/70 relative bg-grid-mesh">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-bl from-[#EAF2FF] to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" strokeWidth={2.3} />
            <span>Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Technologies powering modern applications.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Hands-on expertise across full-stack development, modern frontend toolchains, and backend services.
          </p>
        </div>

        {/* 4 Category Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,26,51,0.04)] hover:border-[#1769FF]/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#EAF2FF]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shadow-xs">
                      <CatIcon className="w-5 h-5 text-[#1769FF]" strokeWidth={2.3} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#071A33]">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400">
                        {cat.badge}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#1769FF] bg-[#EAF2FF] px-2.5 py-1 rounded-full border border-[#1769FF]/20">
                    {cat.skills.length} Techs
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#EAF2FF] hover:border-[#1769FF] hover:bg-gradient-to-r hover:from-white hover:to-[#EAF2FF]/40 shadow-xs hover:shadow-[0_8px_20px_rgba(23,105,255,0.12)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {/* Tech Icon Container */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:border-[#1769FF]/40 transition-all shadow-xs">
                        {skill.img ? (
                          <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          skill.reactIcon
                        )}
                      </div>

                      {/* Tech Info */}
                      <div className="min-w-0">
                        <span className="font-bold text-sm text-[#071A33] block truncate group-hover:text-[#1769FF] transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] font-semibold text-[#1769FF]">
                            {skill.category}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[10px] text-slate-400 truncate">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
