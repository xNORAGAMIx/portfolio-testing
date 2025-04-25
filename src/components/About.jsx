import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-32 bg-black text-white flex flex-col md:flex-row items-center gap-16"
    >
      {/* Image */}
      <motion.div
        className="w-60 h-60 md:w-80 md:h-80 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Replace src with your photo */}
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">About Me</h2>
        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
          I'm a developer who enjoys building beautiful and functional web
          experiences. I focus on clean UI, accessible code, and smooth
          interactions. With a strong background in JavaScript, React, and
          backend technologies, I love turning ideas into reality.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
