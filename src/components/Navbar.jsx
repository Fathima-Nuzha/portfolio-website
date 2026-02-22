import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 bg-[#0B1120]/70 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-white tracking-wide cursor-pointer"
        >
          NU<span className="text-blue-500">SHA</span>
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

            <li
              onClick={() => scrollToSection("hero")}
              className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => scrollToSection("work")}
              className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

          </ul>

          {/* CTA Button → LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fathima-nusha-509ba8278"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Let’s Connect
          </a>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
