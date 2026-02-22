import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Attendance System",
      description:
        "An intelligent attendance management system integrating face recognition and automated record handling to enhance institutional efficiency.",
      tech: ["React", "Node.js", "MongoDB", "Python"],
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A scalable full-stack web application with secure authentication, product management, and optimized checkout workflows.",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "University Result System",
      description:
        "A secure result processing and management platform designed for academic institutions with role-based access control.",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive developer portfolio built with performance-focused design and clean UI principles.",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0B1120] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of secure, scalable, and performance-focused applications 
            developed using modern technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-2xl p-10 mb-16 hover:border-blue-500/40 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {featuredProject.title}
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {featuredProject.tech.map((tech, index) => (
              <span
                key={index}
                className="text-sm px-4 py-1 rounded-full border border-white/20 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/40"
            >
              <h3 className="text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
