import { motion } from "framer-motion";

const projects = [
  {
    title: "Green Community Hub",
    description: "An online platform to connect individuals and organizations with eco-friendly initiatives.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "https://greenhub.example.com",
  },
  {
    title: "Decentralized Marketplace",
    description: "Blockchain-based platform for peer-to-peer commerce using Ethereum smart contracts.",
    tech: ["Solidity", "React", "IPFS"],
    link: "https://decentmarket.example.com",
  },
  {
    title: "Campus Ride Sharing",
    description: "A MERN stack application for students to share rides within campus.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://campusride.example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0a0a0a]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#121212] rounded-2xl p-6 hover:-translate-y-2 transition-all border border-gray-800 hover:border-teal-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-md mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-teal-400 font-medium">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-[#1a1a1a] px-2 py-1 rounded-lg">{tech}</span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-teal-300 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
