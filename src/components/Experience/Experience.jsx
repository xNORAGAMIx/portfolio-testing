import { useEffect, useRef } from "react";
import ExperienceItem from "./ExperienceItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(lineRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  const experienceList = [
    {
      role: "Frontend Developer",
      company: "Green Community Hub",
      duration: "Jan 2024 – Present",
      description:
        "Built responsive user interfaces with React, Tailwind, and GSAP animations. Integrated sustainability APIs and gamified achievements.",
    },
    {
      role: "Blockchain Dev",
      company: "Decentralized Marketplace",
      duration: "Aug 2023 – Dec 2023",
      description:
        "Developed smart contracts using Solidity, integrated IPFS for storage, and led the frontend DApp build with Web3.js.",
    },
    {
      role: "Full Stack Intern",
      company: "Social Forensics Tool",
      duration: "May 2023 – July 2023",
      description:
        "Built forensic automation tools for extracting social data from WhatsApp and Instagram using Electron + Node.js.",
    },
  ];
  return (
    <section id="experience" className="bg-zinc-950 text-white py-24 px-6 md:px-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        Experience
      </h2>

      {/* Scroll Line */}
      <div className="absolute left-8 top-32 bottom-0 w-[2px] bg-gray-700 z-0 overflow-hidden">
        <div ref={lineRef} className="w-full bg-cyan-400 h-0 origin-top" />
      </div>

      <div className="space-y-16 relative z-10">
        {experienceList.map((exp, idx) => (
          <ExperienceItem key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
