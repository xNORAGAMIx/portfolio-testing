import { motion } from "framer-motion";

const ExperienceItem = ({ experience }) => {
  return (
    <motion.div
      className="relative pl-10 border-l border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-md" />
      <h4 className="text-lg font-semibold text-white group cursor-default">
        <span className="group-hover:underline transition-all duration-200">
          {experience.role}
        </span>{" "}
        <span className="text-cyan-400">@ {experience.company}</span>
      </h4>

      <p className="text-sm text-gray-400 mb-2">{experience.duration}</p>
      <p className="text-gray-300 text-sm">{experience.description}</p>
    </motion.div>
  );
};

export default ExperienceItem;
