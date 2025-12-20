import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
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
      {/* HEADER */}
      <header
        style={{
          background: "linear-gradient(to right, #1a202c, #2d3748, #000000)",
        }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-[#f4f4f4] font-bold text-xl md:text-2xl">
            Yashika Chauhan
          </h1>

          {/* MOBILE MENU */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            <IoMdMenu />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-12">
              {navItems.map((item) => (
                <li key={item.path} className="relative group">
                  <ScrollLink
                    to={item.path}
                    smooth
                    duration={500}
                    offset={-70}
                    spy
                    activeClass="text-[#fcbb38]"
                    className="text-white font-semibold cursor-pointer transition-colors"
                  >
                    {item.name}
                  </ScrollLink>

                  {/* underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fcbb38] transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✖
        </button>

        <ul className="mt-16 space-y-5">
          {navItems.map((item) => (
            <li key={item.path}>
              <ScrollLink
                to={item.path}
                smooth
                duration={500}
                offset={-70}
                onClick={toggleSidebar}
                className="block px-3 py-2 rounded hover:bg-gray-700 cursor-pointer transition"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
