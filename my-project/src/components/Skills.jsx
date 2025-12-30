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

const box =
  "w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl text-white text-3xl flex items-center justify-center shadow-lg";

const glassCard =
  "bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-xl";

const Skills = () => {
  return (
    <section id="skills" className="bg-bgLight py-32 px-[10%]">
      <h2 className="text-4xl text-primary text-center mb-10">Skills</h2>

      {/* Skill Categories (Separate Section) */}
      <div className="flex justify-center gap-6 mb-20">
        <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-primary font-medium">
          Frontend
        </span>
        <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-primary font-medium">
          UI / UX
        </span>
        <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-primary font-medium">
          Backend
        </span>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Programming */}
        <div className={glassCard}>
          <h3 className="font-semibold mb-8">Programming Languages</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={box}>
                <FaHtml5 />
              </div>
              HTML
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <FaCss3Alt />
              </div>
              CSS
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
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
              <div className={box}>
                <FaReact />
              </div>
              React JS
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <FaBootstrap />
              </div>
              Bootstrap
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <SiTailwindcss />
              </div>
              Tailwind CSS
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
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
              <div className={box}>
                <FaGithub />
              </div>
              GitHub
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <FaGitAlt />
              </div>
              Git
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <VscCode />
              </div>
              VS Code
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
                <SiMysql />
              </div>
              MySQL
            </div>
            <div className="flex items-center gap-4">
              <div className={box}>
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
