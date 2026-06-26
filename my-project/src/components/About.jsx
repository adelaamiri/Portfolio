import { motion } from "framer-motion";
import codeBg from "../assets/codeimg.webp";
import {
  cardReveal,
  sectionReveal,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
} from "../utils/motion";

const card =
  "bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-soft glass-shine reveal-edge";

const MotionSection = motion.section;
const MotionDiv = motion.div;

const highlights = [
  "Responsive frontend interfaces",
  "User-centered UI/UX design",
  "Backend learning with APIs and databases",
];

const About = () => {
  return (
    <MotionSection
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-[6%] md:px-[10%]"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <MotionDiv
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${codeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-bgDark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <MotionDiv
        className="absolute inset-x-0 top-0 h-28 bg-white/5 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionDiv
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        variants={staggerContainer}
      >
        <MotionDiv
          variants={slideFromLeft}
          whileHover={{ y: -8 }}
          className={card}
        >
          <h2 className="text-3xl md:text-4xl text-accent mb-6">About Me</h2>
          <p className="text-white/90 leading-7">
            I am a passionate and detail-oriented UI/UX Designer and Frontend
            Developer from Afghanistan, focused on building clean, responsive,
            and meaningful digital experiences. I enjoy combining aesthetic
            design with user-centered development, and I am growing my backend
            skills to become a stronger full-stack developer.
          </p>

          <MotionDiv className="mt-7 grid gap-3" variants={staggerContainer}>
            {highlights.map((item) => (
              <MotionDiv
                key={item}
                variants={cardReveal}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85"
              >
                {item}
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          variants={slideFromRight}
          whileHover={{ y: -8 }}
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["UI/UX", "Frontend", "Backend"].map((item) => (
              <span
                key={item}
                className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-medium text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default About;
