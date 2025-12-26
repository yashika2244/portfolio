import React from "react";
import { motion } from "framer-motion";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const educationData = [
    {
      year: "2023-2026",
      title: "Bachelor of Computer Applications (BCA)",
      institute: "IFTM University [Moradabad]",
      desc: "Pursuing BCA with focus on Web Development, MERN Stack, C++, Git/GitHub, OS, and DSA. Aim: Career in Full-Stack Development & Software Engineering.",
    },
    {
      year: "2023-2024",
      title: "Certifications",
      descItems: [
        { name: "Tailwind CSS Bootcamp", note: "Level up styling skills" },
        { name: "JavaScript Bootcamp", note: "Deep dive into JS fundamentals" },
      ],
    },
    {
      year: "2022-2023",
      title: "Intermediate (12th)",
      institute: "Uttar Pradesh Board",
      desc: "Completed 12th with Mathematics, Physics, Chemistry, Hindi & English. Strong foundation in analytical thinking & problem solving.",
    },
  ];

  return (
    <section id="education" className="py-16 ">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        Education <span className="text-orange-400"> &</span> Certifications
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid gap-y-10 gap-x-8 md:grid-cols-2"
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col md:flex-row items-start md:items-center md:space-x-6"
          >
            {/* Year badge */}
            <div className="flex-shrink-0 w-24 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#fcbb38] to-[#d41010] text-black font-bold shadow-lg mb-3 md:mb-0">
              {edu.year}
            </div>

            {/* Card content */}
            <div className="hover:bg-gray-700 bg-gray-800 transition-all ease-in-out duration-300 p-6 rounded-2xl shadow-xl w-full md:max-w-md border-l-4 border-[#fcbb38]">
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                {edu.title}
              </h3>
              {edu.institute && (
                <h4 className="text-gray-400 italic text-sm md:text-base mb-3">
                  {edu.institute}
                </h4>
              )}
              {edu.desc && (
                <p className="text-gray-200 text-sm md:text-base">{edu.desc}</p>
              )}
              {edu.descItems &&
                edu.descItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#07621b] rounded p-3 mt-3 hover:bg-[#0a831f] transition-colors"
                  >
                    <h5 className="text-white font-semibold">{item.name}</h5>
                    <p className="text-gray-100 text-xs mt-1">{item.note}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;
