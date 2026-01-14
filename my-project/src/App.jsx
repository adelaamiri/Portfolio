import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 top-0 z-[999] h-[3px] w-full origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Modern background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl animate-floatSlow" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
