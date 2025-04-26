import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Green Community Hub",
    description: "An eco-platform connecting individuals and businesses to promote sustainability.",
    image: "/images/greenhub.png",
    github: "https://github.com/yourname/green-community-hub",
    demo: "https://greenhub.live",
  },
  {
    title: "Decentralized Marketplace",
    description: "Blockchain-based P2P marketplace for secure and transparent transactions.",
    image: "/images/marketplace.png",
    github: "https://github.com/yourname/marketplace",
    demo: "https://decentmart.live",
  },
  {
    title: "Social Forensics Tool",
    description: "A tool for analyzing and documenting digital evidence from social media platforms.",
    image: "/images/forensics.png",
    github: "https://github.com/yourname/forensics-tool",
  },
  // Add more as needed...
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-zinc-950 text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
