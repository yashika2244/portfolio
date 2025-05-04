import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // renamed to avoid conflict with react-router
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Education", path: "education" },
    { name: "Projects", path: "projects" },
    { name: "Skills", path: "skills" },
    { name: "Contact Us", path: "contact" },
  ];

  return (
    <>
      <section
        style={{
          background: "linear-gradient(to right, #1a202c, #2d3748, #000000)",
        }}
        className="sticky top-0 md:p-1 pl-4 z-50 w-full    md:mx-0"
      >
        <div className="header flex container md:items-center  justify-between md:gap-[150px] lg:justify-center lg:gap-72 w-full">
          <h1 className="text-[#f4f4f4] font-bold md:ml-16  text-2xl ">
            Yashika Chauhan
          </h1>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <IoMdMenu onClick={toggleSidebar} className="text-white text-3xl" />
          </div>

          {/* Desktop navigation */}
          <div className="justify-center hidden md:block">
            <ul className="flex gap-[20px] lg:gap-[50px] h-full  mt-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-white font-[700] hover:text-[#fcbb38] hover:scale-110 transition-transform cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-5 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✖
        </button>
        <ul className="mt-10 space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleSidebar}
                className="block p-2 hover:bg-gray-700 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
