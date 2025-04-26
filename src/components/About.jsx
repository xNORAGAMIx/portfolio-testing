import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-32 bg-black text-white flex flex-col md:flex-row items-start gap-16"
    >
      {/* Left Column - Image and Basic Info */}
      <div className="flex flex-col items-center md:items-start md:sticky md:top-32">
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 bg-gray-700 rounded-full overflow-hidden mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/3.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg font-light leading-relaxed text-gray-300 max-w-md">
            I'm a developer who enjoys building beautiful and functional web
            experiences. I focus on clean UI, accessible code, and smooth
            interactions. With a strong background in JavaScript, React, and
            backend technologies, I love turning ideas into reality.
          </p>
        </motion.div>
      </div>

      {/* Right Column - Additional Content */}
      <div className="flex-1 space-y-10">
        {/* Timeline Section */}
        <motion.div
          className="bg-gray-900 p-8 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Journey</h3>
          <div className="space-y-4 relative pl-6 border-l-2 border-gray-700">
            {[
              { year: "2023-2026", title: "Masters of Computer Applications", description: "Maulana Azad National Institute of Technology, Bhopal" },
              { year: "2019-2022", title: "B.Sc Computer Scienece", description: "University of Calcutta" },
              { year: "2017-2019", title: "Don Bosco Siliguri", description: "CISCE - Higher Secondary School" },
              { year: "2007-2017", title: "Don Bosco Oodlabari", description: "CISCE - Secondary School" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[11px] top-1"></div>
                <p className="text-sm text-gray-400">&nbsp; &nbsp; {item.year}</p>
                <h4 className="text-lg font-medium">&nbsp; &nbsp;{item.title}</h4>
                <p className="text-gray-300">&nbsp; &nbsp;{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          className="bg-gray-900 p-8 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Fun Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "☕", text: "Tea Lover", subtext: "3 cups/day" },
              { icon: "🧠", text: "Problem Solver", subtext: "400+ Leetcode" },
              { icon: "🎮", text: "Gamer", subtext: "RPG & Adventure" },
              { icon: "🏞️", text: "Adventurist", subtext: "Mountains & rivers" },
            ].map((fact, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-2 bg-gray-800 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-3xl">{fact.icon}</span>
                <span className="font-medium">{fact.text}</span>
                <span className="text-sm text-gray-400">{fact.subtext}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Icons Decoration */}
        <motion.div 
          className="hidden lg:flex items-center justify-center gap-8 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {["⚛️", "🟨", "🔗", "💻", "🚀"].map((icon, idx) => (
            <motion.div
              key={idx}
              className="text-4xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, idx % 2 === 0 ? 10 : -10, 0]
              }}
              transition={{ 
                duration: 3 + idx, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;