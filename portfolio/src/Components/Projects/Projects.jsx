import React, { useEffect, useState } from "react";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";

import webcraft1 from "../../assets/images/webcraft1.png";
import webcraft2 from "../../assets/images/webcraft2.png";

import ramlal1 from "../../assets/images/ramlal1.png";
import ramlal2 from "../../assets/images/ramlal2.png";

const Projects = () => {
  const [expandIndex, setExpandIndex] = useState(null);

  const toggleExpand = (i) => {
    setExpandIndex(expandIndex === i ? null : i);
  };

  const projects = [
    {
      title: "GetMyServices Website",
      url: "https://serivce.vercel.app/",
      code: "https://github.com/yashika2244/Serivce",
      images: [service1, service2, service4, service5, service6],
      overview:
        "This service booking application connects users with trusted professionals across various categories such as home repair, cleaning, beauty, and wellness. Designed with a user-friendly interface and a secure backend, it simplifies the process of finding, booking, and managing service appointments. Users can explore verified profiles, view ratings and availability, and schedule services in just a few clicks—making everyday tasks more convenient and efficient.",
      customerFeatures: [
        "Secure authentication for both users and service providers using JWT-based login.",
        "Easily find professionals by category, location, ratings, and availability.",
        "Secure Payments (Optional): Integration with payment gateways for online consultation fees.",
        "Book services with live availability and receive instant confirmations.",
        " Both users and providers can manage profiles, update details, and view activity history.",
      ],
      providerFeatures: [
        "Profile Creation: Add specialization, experience, consultation fees, and availability.",
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      conclusion:
        "Our Service Booking Application is designed to revolutionize the booking system...",
    },
    {
      title: "Webcraft UI",
      url: "https://web-craft-eosin.vercel.app",
      code: "https://github.com/Prashantpal123/WebCraft",
      images: [webcraft1, webcraft2],
      overview:
        "Webcraft UI is a modern, responsive UI template built for web designers...",
      customerFeatures: [
        "Fully responsive web pages that adapt to mobile, tablet, and desktop screens.",
        "Interactive UI components such as buttons, cards, modals, and sliders.",
        " Clean typography and design that improves readability and user experience.",
        "Fast loading and optimized for performance.",
      ],
      providerFeatures: ["Easy customization", "Reusable components"],
      techStack: [
        "JavaScript",
        "React.js",
        "Nodejs",
        "Express.js",
        "MongoDB",
        "Tailwind css",
      ],
      conclusion:
        "Webcraft UI provides a scalable and modern interface for personal and professional websites...",
    },
    {
      title: "Ram-Lal Singh Website",
      url: "https://ram-lal-singh-chauhan-svm.vercel.app/#",
      code: "https://github.com/Prashantpal123/RamLal-singh-chauhan-svm",
      images: [ramlal1, ramlal2],
      overview:
        "A professional school website for Ram-Lal Singh to showcase school information, events, and academic programs.Provides students, parents, and staff easy access to school resources online.Focused on clean layout, responsiveness, and easy navigation.",
      customerFeatures: [
        "Sections for about the school, events, achievements, and contact information.",
        "Clean and maintainable code for future enhancements.",
        "Simple structure to update content like events, notices, and images.",
        "Easy access to important notices, announcements, and school updates.",
      ],
      providerFeatures: ["Easy to update content", "SEO friendly structure"],
      techStack: [
        "JavaScript",
        "React.js",
        "Nodejs",
        "Express.js",
        "MongoDB",
        "Tailwind css",
      ],
      conclusion:
        "Provides a professional and modern online presence for the school.",
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="lg:pt-24 px-4 md:px-8 lg:px-16  py-12">
      <h1 className="text-white text-center text-3xl md:text-5xl font-extrabold mb-12">
        My Projects
      </h1>

      <div className="flex flex-col gap-12">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 bg-[#0f172a]"
          >
            <div className="md:flex md:justify-between md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400">
                {proj.title}
              </h2>
              <div className="flex gap-2 mt-3 md:mt-0">
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-5 py-2 rounded-full transition transform hover:scale-105">
                    Preview
                  </button>
                </a>
                <a href={proj.code} target="_blank" rel="noopener noreferrer">
                  <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-5 py-2 rounded-full transition transform hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-6">
              <h3 className="text-white font-semibold text-lg">Overview</h3>
              <p className="text-gray-400 mt-2 leading-6">{proj.overview}</p>
            </div>

            {/* Carousel */}
            <div className="mt-6 relative overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-1000"
                style={{
                  transform: `translateX(-${currentIndexes[i] * 100}%)`,
                }}
              >
                {proj.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${proj.title}-${idx}`}
                    className="w-full object-cover rounded-2xl"
                  />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-amber-400 font-semibold">For Customers</h4>
                <ul className="text-gray-400 list-disc list-inside mt-2">
                  {proj.customerFeatures.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
              {expandIndex === i && (
                <div>
                  <h4 className="text-amber-400 font-semibold">
                    For Service Providers
                  </h4>
                  <ul className="text-gray-400 list-disc list-inside mt-2">
                    {proj.providerFeatures.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tech Stack & Conclusion */}
            {expandIndex === i && (
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold">Tech Stack</h4>
                  <p className="text-gray-400 mt-2">
                    {proj.techStack.join(", ")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Conclusion</h4>
                  <p className="text-gray-400 mt-2">{proj.conclusion}</p>
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => toggleExpand(i)}
                className="bg-[#187895] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#0f94b6] transition transform hover:scale-105"
              >
                {expandIndex === i ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
