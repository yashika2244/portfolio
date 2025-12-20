import React from "react";
import { motion } from "framer-motion";

import htmlImg from "../../assets/images/html-icon.png";
import bootstrapImg from "../../assets/images/bootstrap-4-icon.png";
import cimg from "../../assets/images/c-icon.png";
import cppImg from "../../assets/images/cpp.png";
import webimg from "../../assets/images/devlloper.png";
import compImg from "../../assets/images/computer.png";
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

const Skills = () => {
  // Container animation (stagger children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="md:py-10 py-5 mt-3 md:mt-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl text-white font-extrabold md:mb-12 mb-8"
      >
        Technical Expertise
      </motion.h1>

      {/* Skill Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20"
      >
        {/* Frontend Skills */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={compImg} alt="Frontend" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">
              Frontend Technologies
            </h2>
          </div>
          <div className="mt-4 space-y-4">
            {[htmlImg, cssImg, jsImg, reactImg, tailcssImg, bootstrapImg].map((img, index) => {
              const names = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"];
              return (
                <div key={index} className="flex items-center gap-2 text-white">
                  <img className="h-8" src={img} alt={names[index]} />
                  <p className="font-semibold">{names[index]}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={backImg} alt="Backend" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">Backend Technologies</h2>
          </div>
          <div className="mt-4 space-y-4">
            {[nodeImg, expresImg].map((img, index) => {
              const names = ["Node.js", "Express.js"];
              return (
                <div key={index} className="flex items-center gap-2 text-white">
                  <img className="h-8" src={img} alt={names[index]} />
                  <p className="font-semibold">{names[index]}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Database Skills */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={backImg} alt="Database" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">Database Technologies</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img className="h-8" src={mongoImg} alt="MongoDB" />
              <p className="font-semibold">MongoDB</p>
            </div>
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={backImg} alt="Programming Languages" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">Programming Languages</h2>
          </div>
          <div className="mt-4 space-y-4">
            {[cimg, cppImg].map((img, index) => {
              const names = ["C Language", "C++ Language"];
              return (
                <div key={index} className="flex items-center gap-2 text-white">
                  <img className="h-8" src={img} alt={names[index]} />
                  <p className="font-semibold">{names[index]}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Version Control */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={backImg} alt="Version Control" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">Version Control</h2>
          </div>
          <div className="mt-4 space-y-4">
            {[gitImg, GitHubImg].map((img, index) => {
              const names = ["Git", "GitHub"];
              return (
                <div key={index} className="flex items-center gap-2 text-white">
                  <img className="h-8" src={img} alt={names[index]} />
                  <p className="font-semibold">{names[index]}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="skill-card hover:bg-gray-700 p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
        >
          <div className="flex gap-3 items-center">
            <img className="h-8" src={webimg} alt="Web Development" />
            <h2 className="text-[#fcbb38] font-semibold text-xl">Web Development</h2>
          </div>
          <div className="mt-4 space-y-2 text-white">
            <p>- Full-Stack Web Development</p>
            <p>- MERN-Stack Web Development</p>
            <p>- Responsive Web Design</p>
            <p>- UI/UX Development</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
