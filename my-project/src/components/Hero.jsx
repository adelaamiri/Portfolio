import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../assets/img prtofolio.webp";

const Hero = () => {
  const [role] = useTypewriter({
    words: ["UI/UX Designer", "Frontend Developer"],
    loop: true,
    delaySpeed: 1600,
    typeSpeed: 90,
    deleteSpeed: 55,
  });

  return (
    <section
      id="home"
      className="min-h-screen bg-bgLight flex flex-col md:flex-row
      items-center justify-between px-[6%] md:px-[10%] pt-32 md:pt-40 gap-16"
    >
      {/* TEXT */}
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <div className="inline-block bg-white/20 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-soft glass-shine">
          <h1 className="text-[28px] sm:text-[34px] md:text-[44px] leading-snug text-primary">
            Hi, I’m <span className="text-accent">Adela Amiri</span>
            <br />
            I’m a{" "}
            <span className="text-accent font-semibold">
              {role}
              <Cursor cursorStyle="|" />
            </span>
            <br />
            from Afghanistan, crafting clean and user-centered digital
            experiences.
          </h1>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-textDark text-accent shadow-lg
              hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white/25 backdrop-blur-xl border border-white/30
              text-primary shadow-lg hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.img
        src={heroImg}
        alt="hero"
        className="w-[280px] sm:w-[380px] md:w-[520px] rounded-3xl shadow-soft border border-white/20"
        initial={{ x: 90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      />
    </section>
  );
};

export default Hero;
