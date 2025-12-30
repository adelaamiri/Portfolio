import { motion } from "framer-motion";
import realEstate from "../assets/realestate.svg";
import furniture from "../assets/Furniture.svg";
import courses from "../assets/Courses.svg";

const projects = [
  {
    title: "Real Estate",
    image: realEstate,
  },
  {
    title: "FURNITURE",
    image: furniture,
  },
  {
    title: "COURSES",
    image: courses,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-bgDark py-32 px-[10%]">
      {/* Title */}
      <h2 className="text-4xl text-accent text-center mb-20">Projects</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#B7C6C4] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image with scroll */}
            <div className="h-[420px] overflow-y-auto">
              <img src={project.image} alt={project.title} className="w-full" />
            </div>

            {/* Footer */}
            <div className="bg-[#cac9c9] px-6 py-4">
              <h3 className="text-primary font-medium">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center">
        <a
          href="https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1"
          target="_blank"
          className="
            bg-white/30 backdrop-blur-lg
            px-8 py-3 rounded-full
            text-accent shadow-md
          "
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Projects;
