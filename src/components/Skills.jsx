import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiSolidity,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={30} color="#61DAFB" />, label: "React.js" },
  { icon: <FaNodeJs size={30} color="#68A063" />, label: "Node.js" },
  { icon: <FaJava size={30} color="#007396" />, label: "Java" },
  { icon: <SiJavascript size={30} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <SiTailwindcss size={30} color="#38BDF8" />, label: "Tailwind CSS" },
  { icon: <SiMysql size={30} color="#00758F" />, label: "MySQL" },
  { icon: <FaDocker size={30} color="#2496ED" />, label: "Docker" },
  { icon: <FaGitAlt size={30} color="#F05032" />, label: "Git" },
  { icon: <SiSolidity size={30} color="#363636" />, label: "Solidity" },
  { icon: <SiFirebase size={30} color="#FFCA28" />, label: "Firebase" },
  { icon: <FaAws size={30} color="#FF9900" />, label: "AWS" }, // ✅ Added AWS here
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-[#0d0d0d]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center space-y-2 text-white p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
            whileHover={{ scale: 1.15 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div>{skill.icon}</div>
            <span className="text-sm text-gray-300">{skill.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 text-gray-400 text-center text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I&apos;ve worked with frontend and backend technologies to build full-stack
        applications, explored blockchain with Solidity, and am comfortable using
        Docker, Git, Firebase, and AWS for deployment and integration.
      </motion.p>
    </section>
  );
};

export default Skills;
