import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { cardReveal, sectionReveal, staggerContainer } from "../utils/motion";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionSpan = motion.span;

const iconBox =
  "w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg transition transform group-hover:scale-110";

const glassCard =
  "group bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-xl glass-shine reveal-edge";

const categories = ["Frontend", "UI / UX", "Backend", "Databases", "Tools"];

const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "React JS", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-textDark" },
      { name: "REST API", icon: SiPostman, color: "text-orange-500" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "Design & Workflow",
    items: [
      { name: "Figma", icon: SiFigma, color: "text-pink-500" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
      { name: "Git", icon: FaGitAlt, color: "text-red-500" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
    ],
  },
];

const Skills = () => {
  return (
    <MotionSection
      id="skills"
      className="bg-bgLight py-32 px-[6%] md:px-[10%]"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <MotionH2
        className="text-4xl text-primary text-center mb-10"
        variants={cardReveal}
      >
        Skills
      </MotionH2>

      <MotionDiv
        className="flex flex-wrap justify-center gap-4 mb-20"
        variants={staggerContainer}
      >
        {categories.map((item) => (
          <MotionSpan
            key={item}
            variants={cardReveal}
            whileHover={{ y: -4, scale: 1.04 }}
            className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-primary font-medium text-sm md:text-base"
          >
            {item}
          </MotionSpan>
        ))}
      </MotionDiv>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
        variants={staggerContainer}
      >
        {skillGroups.map((group) => (
          <MotionDiv
            key={group.title}
            variants={cardReveal}
            whileHover={{ y: -8, scale: 1.01 }}
            className={glassCard}
          >
            <h3 className="font-semibold mb-8 text-textDark">
              {group.title}
            </h3>
            <div className="space-y-5">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <MotionDiv
                    key={item.name}
                    className="flex items-center gap-4 text-textDark"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <div className={`${iconBox} ${item.color}`}>
                      <Icon />
                    </div>
                    <span>{item.name}</span>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionSection>
  );
};

export default Skills;
