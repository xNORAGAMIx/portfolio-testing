import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for better arrows

const projects = [
  {
    title: "Life Ledger",
    description: "Blockchain-based electronic medical records.",
    image: "/block.jpg",
    github: "https://github.com/xNORAGAMIx/Electronic-Medical-Records",
    demo: "https://github.com/xNORAGAMIx/Electronic-Medical-Records",
  },
  {
    title: "BeTheDrop",
    description:
      "MERN-based blood management and emergency alert system for blood donation.",
    image: "/bethefrop.png",
    github: "https://github.com/xNORAGAMIx/BeTheDrop",
    demo: "https://github.com/xNORAGAMIx/BeTheDrop",
  },
  {
    title: "Patient Management System (Backend)",
    description:
      "Backend for a patient management system using Spring Boot and Postgres following microservices architecture (used GRPC + Kafka).",
    image: "/java.jpg",
    github: "https://github.com/xNORAGAMIx/Microservices-JAVA",
    demo: "https://github.com/xNORAGAMIx/Microservices-JAVA",
  },
  {
    title: "Wordle Game - Spawn Point",
    description: "A simple word guessing game built with React.",
    image: "/wordle.jpg",
    github: "https://github.com/xNORAGAMIx/Spawn-Point",
    demo: "https://pointspawn.vercel.app/",
  },
  {
    title: "Sorting Visualizer",
    description: "Visualize sorting algorithms in action.",
    image: "/images/constitution.png",
    github: "https://github.com/xNORAGAMIx/Sorting-Visualizer",
    demo: "https://see-me-sort.vercel.app/",
  },
  {
    title: "Node.js Starter Package",
    description:
      "A fast & scalable backend template with pre-configured folder structure for scalability.",
    image: "/images/interview.png",
    github: "https://github.com/yourname/selector-simulator",
    demo: "https://www.npmjs.com/package/@noragami666/node-starter",
  },
  {
    title: "Dreamscape Diaries",
    description: "A web application for blogging and sharing your thoughts.",
    image: "/images/interview.png",
    github: "https://github.com/xNORAGAMIx/BLOG_PAGE",
    demo: "https://blog-page-nine-indol.vercel.app/",
  },
  {
    title: "GreenHub",
    description:
      "A frontend application built for promotion of sustainable development.",
    image: "/images/interview.png",
    github: "https://github.com/xNORAGAMIx/GREEN-CAMPUS",
    demo: "https://greenhub-campus.vercel.app/",
  },
];

const Projects = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleProjects = projects.slice(startIdx, startIdx + 3);

  const handlePrev = () => {
    if (startIdx > 0) setStartIdx(startIdx - 1);
  };

  const handleNext = () => {
    if (startIdx + 3 < projects.length) setStartIdx(startIdx + 1);
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-zinc-950 text-white"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        Featured Projects
      </h2>

      <div className="flex justify-between items-center mb-10">
        <button
          onClick={handlePrev}
          disabled={startIdx === 0}
          className="p-2 disabled:opacity-40"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 px-4">
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIdx + 3 >= projects.length}
          className="p-2 disabled:opacity-40"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
