import { motion } from "framer-motion";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-bgLight
      flex flex-col md:flex-row
      items-center justify-between
      px-[6%] md:px-[10%]
      pt-32 md:pt-40
      gap-16"
    >
      {/* TEXT */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] leading-snug text-primary">
          Hi, I’m <span className="text-accent">Adela Amiri</span>
          <br />
          a passionate UI/UX
          <br />
          designer from Afghanistan, focused on crafting clean and user-centered
          digital experiences.
        </h1>
      </motion.div>

      {/* IMAGE */}
      <motion.img
        src={heroImg}
        alt="hero"
        className="w-[280px] sm:w-[360px] md:w-[500px] rounded-2xl"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
};

export default Hero;
