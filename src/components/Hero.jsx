import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import nuzha from "../assets/nuzha.png";

const Hero = ({ setActiveTab }) => {
  const roles = [
    "FULL STACK DEVELOPER",
    "CYBER SECURITY ENTHUSIAST",
    "CONTENT WRITER",
  ];

  const handleViewProjects = () => {
    setActiveTab("projects");
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-24 bg-[#0B1120] text-white flex items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[200px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-blue-500">
              <Typewriter
                words={["Fathima Nusha"]}
                loop={1}
                cursor={false}
                typeSpeed={100}
              />
            </span>
          </h2>

          {/* Roles */}
          <div className="mt-8 flex flex-wrap gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ y: -300, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.2 + index * 0.25,
                }}
                className="relative px-6 py-2 border border-blue-500 rounded-full text-blue-400 text-sm tracking-widest overflow-hidden"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: 2 + index * 0.25,
                  }}
                  className="absolute inset-0 bg-blue-500/30 blur-xl"
                />
                <span className="relative z-10">{role}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-gray-400 max-w-lg text-lg">
            Cybersecurity-driven IT undergraduate passionate about secure systems,
  networking and modern full-stack development focused on real-world solutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">

            <button
              onClick={handleViewProjects}
              className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full font-semibold 
              hover:bg-blue-500 hover:text-white 
              hover:shadow-lg hover:shadow-blue-500/40 
              transition duration-300"
            >
              View Projects
            </button>

            <a
              href="/Fathima_Nusha_Resume.pdf"
              download="Fathima_Nusha_Resume"
              className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full 
              hover:bg-blue-500 hover:text-white 
              transition duration-300"
            >
              Download CV
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE — FULL IMAGE FIT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >

            {/* Image Fully Covering Card */}
            <img
              src={nuzha}
              alt="Fathima Nusha"
              className="w-full h-full object-cover object-top"
            />

            {/* Bottom Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Open to Work */}
            <p className="absolute bottom-4 left-4 text-white text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Open to Work
            </p>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
