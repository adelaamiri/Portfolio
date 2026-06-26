import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../assets/img prtofolio.webp";
import { cvUrl } from "../data/portfolio";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const Hero = () => {
  const [role] = useTypewriter({
    words: ["UI/UX Designer", "Frontend Developer", "Backend Learner"],
    loop: true,
    delaySpeed: 1600,
    typeSpeed: 90,
    deleteSpeed: 55,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen bg-bgLight flex flex-col md:flex-row
      items-center justify-between px-[6%] md:px-[10%] pt-32 md:pt-40 pb-20 gap-16"
    >
      <MotionDiv
        className="absolute inset-x-[6%] top-28 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      <MotionDiv
        initial={{ x: -90, opacity: 0, filter: "blur(12px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="text-center md:text-left"
      >
        <div className="inline-block bg-white/20 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-soft glass-shine reveal-edge">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-textDark/70">
            Portfolio 2026
          </p>
          <h1 className="text-[28px] sm:text-[34px] md:text-[44px] leading-snug text-primary">
            Hi, I'm <span className="text-accent">Adela Amiri</span>
            <br />
            I'm a{" "}
            <span className="text-accent font-semibold">
              {role}
              <Cursor cursorStyle="|" />
            </span>
            <br />
            from Afghanistan, crafting clean and user-centered digital
            experiences.
          </h1>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-textDark text-accent shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white/25 backdrop-blur-xl border border-white/30 text-primary shadow-lg hover:scale-105 transition"
            >
              Contact Me
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-accent text-textDark shadow-lg hover:scale-105 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </MotionDiv>

      <MotionImg
        src={heroImg}
        alt="Adela Amiri portfolio portrait"
        className="w-[280px] sm:w-[380px] md:w-[520px] rounded-3xl shadow-soft border border-white/20"
        initial={{ x: 90, opacity: 0, rotate: 2, filter: "blur(12px)" }}
        animate={{ x: 0, opacity: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.025, rotate: -1 }}
      />
    </section>
  );
};

export default Hero;
