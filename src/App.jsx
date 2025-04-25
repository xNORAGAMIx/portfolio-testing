import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans">
      <Navbar/>
      <Hero/>
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
