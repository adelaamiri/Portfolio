import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const MotionDiv = motion.div;

function App() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="font-sans overflow-x-hidden bg-bgLight">
      <MotionDiv
        className="fixed left-0 top-0 z-[999] h-[3px] w-full origin-left bg-accent"
        style={{ scaleX: progressScale }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(199,150,91,0.18),transparent_28%),linear-gradient(135deg,rgba(175,193,190,0.98),rgba(63,110,110,0.18))]" />
        <MotionDiv
          className="absolute inset-x-0 top-0 h-40 bg-white/10 blur-3xl"
          animate={{ y: [0, 18, 0], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
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
