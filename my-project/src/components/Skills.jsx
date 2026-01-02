import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFigma, SiMongodb } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

/* Icon Box with color & hover */
const iconBox =
  "w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg \
   bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg \
   transition transform hover:scale-110";

/* Glass Card */
const glassCard =
  "bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-xl";

const Skills = () => {
  return (
    <section id="skills" className="bg-bgLight py-32 px-[6%] md:px-[10%]">
      <h2 className="text-4xl text-primary text-center mb-10">Skills</h2>

      {/* Skill Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {["Frontend", "UI / UX", "Backend"].map((item) => (
          <span
            key={item}
            className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-lg
            border border-white/30 text-primary font-medium
            text-sm md:text-base"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Programming */}
        <div className={glassCard}>
          <h3 className="font-semibold mb-8">Programming Languages</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-orange-500`}>
                <FaHtml5 />
              </div>
              HTML
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-blue-500`}>
                <FaCss3Alt />
              </div>
              CSS
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-yellow-400`}>
                <FaJsSquare />
              </div>
              JavaScript
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className={glassCard}>
          <h3 className="font-semibold mb-8">Frameworks / Design</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-cyan-400`}>
                <FaReact />
              </div>
              React JS
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-purple-500`}>
                <FaBootstrap />
              </div>
              Bootstrap
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-teal-400`}>
                <SiTailwindcss />
              </div>
              Tailwind CSS
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-pink-500`}>
                <SiFigma />
              </div>
              Figma
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className={glassCard}>
          <h3 className="font-semibold mb-8">Tools & Databases</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-gray-800`}>
                <FaGithub />
              </div>
              GitHub
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-red-500`}>
                <FaGitAlt />
              </div>
              Git
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-blue-400`}>
                <VscCode />
              </div>
              VS Code
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-sky-600`}>
                <SiMysql />
              </div>
              MySQL
            </div>
            <div className="flex items-center gap-4">
              <div className={`${iconBox} text-green-500`}>
                <SiMongodb />
              </div>
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
