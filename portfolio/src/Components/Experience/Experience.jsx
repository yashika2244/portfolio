import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "PM Enterprises",
      duration: "Jul 2025 – Oct 2025",
      description:
        "Worked as a Full Stack Developer, contributing to real-world enterprise applications by building scalable features, improving UI/UX, and integrating backend services.",
      projects: [
        {
          name: "Force Management System (FMS)",
          details: [
            "Built responsive dashboards and forms using React & Tailwind CSS.",
            "Developed RESTful APIs with Node.js & Express.",
            "Integrated MongoDB for users, tasks, and service records.",
            "Optimized performance with efficient state management.",
            "Collaborated in an agile team environment.",
          ],
        },
        {
          name: "Northsling Internal Web Modules",
          details: [
            "Enhanced UI layouts for internal tools.",
            "Integrated APIs with dynamic rendering.",
            "Fixed UI bugs and ensured responsiveness.",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative pt-10 px-4 "
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-50 mb-16">
          Professional <span className="text-amber-500">Experience</span>
        </h1>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Line */}
          <span className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-300 to-amber-600 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <span className="absolute left-[10px] top-8 w-4 h-4 bg-amber-500 rounded-full ring-4 ring-amber-200" />

                {/* Card */}
                <div className="ml-8 bg-white backdrop-blur border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <span className="inline-block text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 font-medium mt-1">
                    {exp.company}
                  </p>

                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Projects */}
                  <div className="mt-6 space-y-6">
                    {exp.projects.map((project, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold text-amber-600 mb-2">
                          {project.name}
                        </h4>
                        <ul className="space-y-2">
                          {project.details.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="mt-2 w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
