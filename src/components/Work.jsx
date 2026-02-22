import { motion } from "framer-motion";
import ProjectsTab from "./ProjectsTab";
import CertificationsTab from "./CertificationsTab";
import TechStackTab from "./TechStackTab";

const Work = ({ activeTab, setActiveTab }) => {

  return (
    <section
      id="work"
      className="min-h-screen scroll-mt-24 bg-[#0B1120] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            MY <span className="text-blue-500">TECH JOURNEY</span>
          </h2>

          <p className="text-gray-400 mt-4 tracking-widest text-sm">
            REAL PROJECTS • CONTINUOUS LEARNING • PRACTICAL EXPERIENCE
          </p>

        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-16 text-sm md:text-base font-medium uppercase">

          {["projects", "certifications", "techstack"].map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative transition duration-300 ${
                activeTab === tab
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >

              {tab === "projects" && "Projects"}
              {tab === "certifications" && "Certifications"}
              {tab === "techstack" && "Tech Stack"}

              {activeTab === tab && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-500"></span>
              )}

            </button>

          ))}

        </div>

        {/* Content */}
        <div>
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "certifications" && <CertificationsTab />}
          {activeTab === "techstack" && <TechStackTab />}
        </div>

      </div>
    </section>
  );
};

export default Work;