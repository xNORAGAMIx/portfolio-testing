import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { value: 3, label: "Years of Learning" },
  { value: 400, label: "Problems Solved" },
  { value: 8, label: "Projects Completed" },
  { value: 98, label: "Cups of Tea ☕" },
];

const StatItem = ({ value, label, index, isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl font-bold text-cyan-400">
        {value}+
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="py-28 px-6 md:px-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-6 md:gap-x-12">
        {stats.map((stat, idx) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            label={stat.label}
            index={idx}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
