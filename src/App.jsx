import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import StatsSection from "./components/StatsSection";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <StatsSection />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
