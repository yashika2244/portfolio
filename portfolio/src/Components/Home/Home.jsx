import React from "react";
import { motion } from "framer-motion";
import po1 from "../../assets/images/po1.jpg";

function Home() {
  const name = "Yashika Chauhan".split(""); // split into letters

  return (
    <section
      id="home"
      className="min-h-screen text-white flex items-center justify-center px-4 md:px-8"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 max-w-6xl w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-[#fcbb38] font-bold text-lg md:text-xl">
            Hey <span className="text-white">!</span>
          </p>

          <h1
            className="text-center md:text-left text-3xl md:text-6xl font-extrabold mt-2 leading-tight
             flex flex-wrap justify-center md:justify-start"
          >
            <span className="mr-2 md:mr-3">I am</span>

            {name.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-[#fcbb38] inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-slate-300 text-lg md:text-2xl mt-4">
            MERN Stack Web Developer
          </h2>

          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-md">
            Crafting scalable, clean & modern web applications with great user
            experience.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-4 md:gap-6 mt-6">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#fcbb38] text-black font-bold px-5 py-2 rounded-full hover:bg-[#e0a728] transition"
            >
              Hire <span className="text-white">Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border border-white text-white font-bold px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Projects
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[300px] h-[280px] md:w-[420px] md:h-[400px]
    rounded-3xl flex items-center justify-center shadow-xl"
        >
          {/* Decorative dots */}
          <span className="absolute top-6 left-6 w-2 h-2 bg-indigo-400 rounded-full"></span>
          <span className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full"></span>
          <span className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>


          {/* Image wrapper */}
          <div className="w-[80%] h-[85%] bg-white rounded-2xl flex items-center justify-center">
            <img
              src={po1}
              alt="Profile"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
