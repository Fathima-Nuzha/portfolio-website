import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll To Top Button */}

      {showTop && (

        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="
          fixed bottom-10 right-10
          w-14 h-14
          rounded-full
          bg-blue-500/10
          border border-blue-500/40
          text-blue-400
          flex items-center justify-center
          backdrop-blur-md
          shadow-[0_0_20px_rgba(59,130,246,0.35)]
          hover:bg-blue-500
          hover:text-white
          hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
          transition duration-300
          z-50
          "
        >
          <FaArrowUp size={18} />
        </motion.button>

      )}

      {/* Footer */}

      <footer className="relative bg-[#0B1120] text-white pt-16 pb-8 px-6 border-t border-blue-500/10">

        <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">

            {/* Name + Summary */}

            <div className="text-center md:text-left">

              <h3 className="text-2xl font-bold text-blue-500 mb-2">
                Fathima Nusha
              </h3>

              <p className="text-gray-400 text-sm max-w-md">
                BSc Information Technology undergraduate passionate about
                cybersecurity, networking and modern web development —
                building secure and practical solutions through continuous
                learning and real-world projects.
              </p>

            </div>

            {/* Navigation */}

            <div className="text-center md:text-left">

              <h4 className="text-lg font-semibold mb-4 text-white">
                Explore
              </h4>

              <div className="flex gap-8 text-gray-400 text-sm font-medium">

                <motion.a whileHover={{ y: -2 }} href="#hero" className="hover:text-blue-400 transition">
                  Home
                </motion.a>

                <motion.a whileHover={{ y: -2 }} href="#about" className="hover:text-blue-400 transition">
                  About
                </motion.a>

                <motion.a whileHover={{ y: -2 }} href="#work" className="hover:text-blue-400 transition">
                  Experience
                </motion.a>

                <motion.a whileHover={{ y: -2 }} href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </motion.a>

              </div>

            </div>

            {/* Social Links */}

            <div className="flex space-x-5">

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Fathima-Nuzha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-blue-500 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/fathima-nusha-509ba8278"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:nuzhaimthikaf123@gmail.com"
                className="text-xl text-gray-400 hover:text-blue-500 transition"
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </div>

          {/* Copyright */}

          <div className="text-center text-gray-500 text-xs border-t border-blue-500/10 pt-6">
            © {new Date().getFullYear()} Fathima Nusha — Designed & Built with Passion.
          </div>

        </div>

      </footer>

    </>
  );
};

export default Footer;