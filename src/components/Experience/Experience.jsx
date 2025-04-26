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
      role: "Frontend Application",
      company: "GreenHub",
      team: "4 members",
      description:
        "Collaborated on building responsive user interfaces using React, Tailwind CSS, and GSAP animations. Integrated sustainability APIs and implemented gamified features to promote user engagement.",
    },
    {
      role: "Blockchain Application",
      company: "LifeLedger",
      team: "2 members",
      description:
        "Contributed to smart contract development using Solidity and integrated IPFS for decentralized storage. Led the frontend DApp development with Web3.js, ensuring seamless interaction with Ethereum smart contracts.",
    },
    {
      role: "Full Stack Application (Express + MySQL + React)",
      company: "Nexus Drop",
      team: "5 members",
      description:
        "Developed a full-stack e-commerce platform using Express, MySQL, and React. Implemented core business logic including user authentication, product management, cart functionality, order processing, and secure payment integration.",
    }    
  ];
  return (
    <section
      id="experience"
      className="bg-zinc-950 text-white py-24 px-6 md:px-20 relative"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        Collaborations
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
