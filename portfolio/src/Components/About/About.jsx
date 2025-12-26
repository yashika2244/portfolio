import React from "react";
import resumePdf from "../../assets/images/YashikaResume.pdf";

function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-14 md:py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl transition-all duration-300">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          About <span className="text-amber-500">Me</span>
        </h1>

        {/* Sub line */}
        <p className="text-center text-gray-500 text-sm md:text-base mb-6">
          Who I am & what I do
        </p>

        {/* Intro */}
        <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
          I'm a passionate{" "}
          <span className="text-amber-600 font-semibold">
            Full-Stack Developer
          </span>{" "}
          specializing in the <span className="font-semibold">MERN stack</span>{" "}
          (MongoDB, Express.js, React.js, Node.js). I enjoy crafting scalable,
          responsive, and user-focused web applications that solve real-world
          problems.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {[
            ["Name", "Yashika Chauhan"],
            ["Date of Birth", "19 Oct 2005"],
            ["City", "Bijnor, Uttar Pradesh"],
            ["Email", "chauhanyashika820@gmail.com"],
          ].map(([label, value], index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-500 text-sm md:text-base">
                {label}
              </span>
              <span className="text-gray-800 font-semibold text-sm md:text-base">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600
                       text-white px-7 py-3 rounded-full font-semibold
                       shadow-lg hover:shadow-xl
                       transition-all duration-300 hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
