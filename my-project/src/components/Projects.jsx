import { motion } from "framer-motion";
import realEstate from "../assets/realestate.svg";
import furniture from "../assets/Furniture.svg";
import courses from "../assets/Courses.svg";
import { FaFigma } from "react-icons/fa";

const projects = [
  {
    title: "Real Estate",
    image: realEstate,
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
  {
    title: "FURNITURE",
    image: furniture,
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
  {
    title: "COURSES",
    image: courses,
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-bgDark py-32 px-[6%] md:px-[10%]">
      <h2 className="text-4xl text-accent text-center mb-20">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-soft glass-shine"
          >
            <div className="h-[420px] overflow-y-auto scrollbar-hide">
              <img src={project.image} alt={project.title} className="w-full" />
            </div>

            <div className="bg-white/15 px-6 py-4 flex items-center justify-between">
              <h3 className="text-white font-medium">{project.title}</h3>

              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xl hover:scale-110 transition"
                aria-label="Open Figma"
              >
                <FaFigma />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/20 backdrop-blur-2xl border border-white/25
          px-8 py-3 rounded-full text-accent shadow-soft hover:scale-105 transition glass-shine"
        >
          See More my projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
