import { motion } from "framer-motion";
import codeBg from "../assets/codeimg.webp";

const card =
  "bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-soft glass-shine";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-[6%] md:px-[10%]"
    >
      {/* ===== Background Image ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${codeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ===== Dark + Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-bgDark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* ===== Soft Floating Glow ===== */}
      <motion.div
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-32 w-[600px] h-[600px] rounded-full bg-black/30 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* About */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${card} hover:-translate-y-2 transition-transform duration-300`}
        >
          <h2 className="text-3xl md:text-4xl text-accent mb-6">About Me</h2>
          <p className="text-white/90 leading-7">
            I am a passionate and detail-oriented UI/UX Designer and Frontend
            Developer from Afghanistan, focused on building clean, responsive,
            and meaningful digital experiences. I love combining aesthetic
            design with user-centered development, and I’m continuously
            improving my skills to grow into a full-stack developer.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${card} hover:-translate-y-2 transition-transform duration-300`}
        >
          <h2 className="text-3xl md:text-4xl text-accent mb-6">Education</h2>
          <p className="text-white/90 leading-7">
            I completed school and studied two semesters of Computer Science at
            Allama University. Due to the situation in Afghanistan, I continued
            my learning through Upskill Academy, completing UI/UX and Frontend
            courses and currently studying Backend Development to become a
            Full-Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
