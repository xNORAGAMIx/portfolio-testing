import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left - Contact Info */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-teal-400 text-lg font-semibold">Contact Me</h3>
          <a
            href="https://www.google.com/maps/place/West+Bengal,+India/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors duration-300"
          >
            <FaMapMarkerAlt className="text-teal-400" />
            <span>West Bengal, India</span>
          </a>
          <a
            href="tel:+919641752610"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors duration-300"
          >
            <FaPhoneAlt className="text-teal-400" />
            <span>+91 9641xxxx10</span>
          </a>
          <a
            href="mailto:noragami0021@gmail.com"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors duration-300"
          >
            <FaEnvelope className="text-teal-400" />
            <span>noragami0021@gmail.com</span>
          </a>
        </div>

        {/* Center - Social Links */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/manas-d-552168146/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/xNORAGAMIx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:noragami0021@gmail.com"
            className="hover:text-teal-400 transition-colors duration-300 text-2xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Right - Copyright */}
        <motion.div
          className="text-center md:text-right text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} <span className="text-teal-400">Manas Das</span>. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
