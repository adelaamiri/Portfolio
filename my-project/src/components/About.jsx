import { motion } from "framer-motion";

const card =
  "bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-soft glass-shine";

const About = () => {
  return (
    <section
      id="about"
      className="bg-bgDark py-24 md:py-32 px-[6%] md:px-[10%]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className={card}
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

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className={card}
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
