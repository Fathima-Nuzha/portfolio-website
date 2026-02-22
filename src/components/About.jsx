import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, FolderKanban, Briefcase } from "lucide-react";

/* ================= Animated Counter ================= */

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = () => {
      start += increment;
      if (start < value) {
        setCount(Math.ceil(start));
        requestAnimationFrame(counter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ================= Animation Variants ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

/* ================= About Section ================= */

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0B1120] text-white py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <GraduationCap className="text-blue-500" size={34} />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Who <span className="text-blue-500">Am I?</span>
          </h2>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          Final-year Information Technology undergraduate at
          <span className="text-white font-medium"> University of Vavuniya</span>
          (GPA 3.43), specializing in
          <span className="text-blue-500 font-medium"> Cybersecurity</span> and
          <span className="text-blue-500 font-medium"> Secure Full Stack Engineering</span>.
          I build scalable, secure and high-performance web applications using
          modern technologies with a focus on clean architecture and maintainable code.
        </motion.p>

        {/* Divider */}
        <div className="h-px w-24 bg-blue-500/40 mx-auto mt-16 mb-16" />

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >

          {/* Certifications */}
          <motion.div
            variants={cardVariants}
            className="group border border-white/10 rounded-xl p-8 
            bg-[#111827]/40 backdrop-blur-md
            transition-all duration-300 
            hover:-translate-y-2 
            hover:border-blue-500/60 
            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
            text-center"
          >
            <Award
              className="text-blue-500 mb-6 mx-auto group-hover:scale-110 transition duration-300"
              size={28}
            />
            <h3 className="text-5xl font-semibold mb-4">
              <AnimatedCounter value={5} suffix="+" />
            </h3>
            <p className="text-gray-400 text-sm tracking-wide">
              Professional Certifications
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={cardVariants}
            className="group border border-white/10 rounded-xl p-8 
            bg-[#111827]/40 backdrop-blur-md
            transition-all duration-300 
            hover:-translate-y-2 
            hover:border-blue-500/60 
            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
            text-center"
          >
            <FolderKanban
              className="text-blue-500 mb-6 mx-auto group-hover:scale-110 transition duration-300"
              size={28}
            />
            <h3 className="text-5xl font-semibold mb-4">
              <AnimatedCounter value={5} suffix="+" />
            </h3>
            <p className="text-gray-400 text-sm tracking-wide">
              Scalable Web Applications
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={cardVariants}
            className="group border border-white/10 rounded-xl p-8 
            bg-[#111827]/40 backdrop-blur-md
            transition-all duration-300 
            hover:-translate-y-2 
            hover:border-blue-500/60 
            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
            text-center"
          >
            <Briefcase
              className="text-blue-500 mb-6 mx-auto group-hover:scale-110 transition duration-300"
              size={28}
            />

            <h3 className="text-5xl font-semibold mb-4">
              <AnimatedCounter value={2} suffix="+" />
            </h3>

            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Years Experience</p>

              <p className="text-white font-medium whitespace-nowrap">
                Full-Stack Developer
              </p>

              <p className="text-blue-500 text-sm font-medium">
                OnCode Tech Solutions Pvt. Ltd.
              </p>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
