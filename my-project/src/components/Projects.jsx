import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { cardReveal, sectionReveal, staggerContainer } from "../utils/motion";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionArticle = motion.article;

const Projects = () => {
  return (
    <MotionSection
      id="projects"
      className="relative overflow-hidden bg-bgDark py-32 px-[6%] md:px-[10%]"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <MotionDiv
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      />

      <MotionDiv className="text-center mb-16" variants={cardReveal}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
          Selected Work
        </p>
        <h2 className="text-4xl text-accent">Projects</h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/75 leading-7">
          A focused collection of UI/UX, frontend-ready, dashboard, and
          education platform projects, with clean layouts and practical product
          thinking.
        </p>
      </MotionDiv>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-20"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <MotionArticle
            key={project.title}
            variants={cardReveal}
            whileHover={{ y: -10, scale: 1.01 }}
            className="group bg-white/15 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-soft glass-shine reveal-edge"
          >
            <div className="h-[320px] overflow-y-auto scrollbar-hide bg-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full min-h-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-accent">
                  {project.category}
                </span>
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xl hover:scale-110 transition"
                  aria-label={`Open ${project.title} in Figma`}
                >
                  <FaFigma />
                </a>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MotionArticle>
        ))}
      </MotionDiv>

      <MotionDiv className="flex justify-center" variants={cardReveal}>
        <a
          href="https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/20 backdrop-blur-2xl border border-white/25 px-8 py-3 rounded-full text-accent shadow-soft hover:scale-105 transition glass-shine"
        >
          See More Projects
        </a>
      </MotionDiv>
    </MotionSection>
  );
};

export default Projects;
