import { motion } from "framer-motion";
import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-bgDark py-32 px-[10%]
      flex flex-col gap-20"
    >
      <div className="flex items-center justify-between">
        {/* TEXT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-accent mb-8">About Me</h2>

          <p className="text-white max-w-md leading-7">
            I am a passionate and detail-oriented UI/UX Designer and Frontend
            Developer from Afghanistan, with a deep interest in crafting digital
            experiences that are both beautiful and functional. With a strong
            background in design thinking and user-centered development, I have
            worked on multiple real-world projects that reflect my creativity,
            dedication, and technical skills. Currently, I am expanding my
            knowledge by learning Backend Development, aiming to become a
            full-stack developer in the near future. My journey in tech is more
            than just a career path — it’s a mission to grow, innovate, and
            empower others through design and code. In every project I take on,
            I strive to combine aesthetic design with clean, responsive, and
            accessible code. I believe that great user experiences are built
            with empathy, purpose, and continuous learning. Let’s build
            something meaningful together.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-accent mb-8">Education</h2>

          <p className="text-white max-w-md leading-7">
            I successfully completed my school education and studied two
            semesters of Computer Science at Allama University. Unfortunately,
            due to the current situation in Afghanistan, I was unable to
            continue my studies there. To continue my learning journey, I joined
            Upskill Academy, where I completed professional courses in UI/UX
            Design, Frontend Development, and am currently studying Backend
            Development. I hold recognized certificates from these programs and
            am on my path to becoming a Full-Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
