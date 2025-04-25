import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="w-full bg-[#0d0d0d] text-white py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-teal-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Want to work together or have a question? Drop me a message!
        </motion.p>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            // handle submission logic
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-[#1a1a1a] rounded-xl text-white outline-none border border-[#333] focus:border-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#1a1a1a] rounded-xl text-white outline-none border border-[#333] focus:border-teal-400"
              required
            />
          </div>
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 bg-[#1a1a1a] rounded-xl text-white outline-none border border-[#333] focus:border-teal-400"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-teal-400 text-black font-semibold rounded-xl hover:bg-teal-300 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
