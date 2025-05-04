import React from "react";

function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 md:py-15 flex flex-col items-center justify-center  "
    >
      <div className="bg-white border-4 border-white rounded-3xl  w-full max-w-5xl px-1 py-1 lg:p-12 transition   cursor-pointer shadow-white ">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 md:mb-6 mb-3">
          About <span className="text-amber-500">Me</span>
        </h1>

        {/* Intro paragraph */}
        <p className="text-gray-700 md:text-lg text-[14px] font-[500] leading-relaxed text-center md:mb-10 mb-2 max-w-2xl mx-auto">
          I'm a passionate{" "}
          <strong className="text-amber-600">Full-Stack Developer</strong>{" "}
          specializing in the <strong>MERN stack</strong> (MongoDB, Express.js,
          React.js, Node.js). I love building scalable, responsive, and
          intuitive web applications that solve real-world problems.
        </p>

        {/* Profile Details Grid */}

        <div className="grid md:grid-cols-2 gap-3 md:gap-6   text-gray-800 font-medium text-lg md:mb-10  md:pl-0    mb-3">
          <div className="flex justify-between  md:text-lg text-[15px]">
            <span>Name:</span>
            <span className="text-gray-600 font-semibold">Yashika Chauhan</span>
          </div>
          <div className="flex   justify-between  md:text-lg text-[15px]">
            <span>Date of Birth:</span>
            <span className="text-gray-600 font-semibold">19/10/2005</span>
          </div>
          <div className="flex justify-between  md:text-lg text-[15px]">
            <span>City:</span>
            <span className="text-gray-600 font-semibold">
              Bijnor, Uttar Pradesh
            </span>
          </div>
          <div className="flex  justify-between md:text-lg text-[15px]">
            <span>Email:</span>
            <span className="text-gray-600   font-semibold  ">
              chauhanyashika820@gmail.com
            </span>
          </div>

        </div>

        {/* Download CV Button */}
        <div className="w-full flex justify-center">
          <a
            href="/Yashika-Chauhan-CV.pdf" // Replace with actual file path
            download
            className="bg-amber-500 hover:bg-amber-600 text-white md:px-6 px-4 py-2 lg:py-3 rounded-full font-bold shadow-lg transition transform hover:scale-95"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
