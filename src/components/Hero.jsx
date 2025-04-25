import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white px-6 md:px-12 overflow-hidden"
    >
      {/* 🟣 Animated Blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[#2dd4bf] rounded-full mix-blend-lighten filter blur-3xl opacity-30 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <p className="text-teal-400 text-lg md:text-xl mb-2">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Manas Das</h1>

        {/* 🧵 Typewriter */}
        <h2 className="text-2xl md:text-4xl text-gray-400 font-medium mb-6">
          <Typewriter
            words={[
              "I design and build digital experiences.",
              "Full-Stack Web Developer.",
              "Tech Enthusiast & Problem Solver.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-md md:text-lg text-gray-500 max-w-xl mx-auto">
          I'm a full-stack developer focused on crafting clean & user-friendly
          experiences. Currently pursuing my MCA and building creative projects
          using React, Node.js & Blockchain.
        </p>
      </motion.div>

      {/* 🔻 Scroll-down arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
