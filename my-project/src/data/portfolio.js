import realEstate from "../assets/Realestate.webp";
import furniture from "../assets/Furniture.webp";
import courses from "../assets/curses.webp";
import abargaam from "../assets/projects/abargaam.jpg";
import saatosa from "../assets/projects/saatosa.jpg";
import vitalflow from "../assets/projects/vitalflow.jpg";

export const cvUrl =
  "https://drive.google.com/file/d/1KlfQH3HuiJRPk4T4QTsSv5vsiamtVvll/view?usp=drivesdk";

export const projects = [
  {
    title: "Real Estate Platform",
    category: "UI/UX Design",
    image: realEstate,
    description:
      "A modern property listing experience with clean search flow, visual property cards, and responsive sections for real-estate discovery.",
    stack: ["Figma", "Responsive UI", "User Flow"],
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
  {
    title: "Furniture Store",
    category: "E-commerce UI",
    image: furniture,
    description:
      "A polished furniture shopping interface focused on product browsing, category clarity, and warm visual presentation.",
    stack: ["Figma", "E-commerce", "Product UI"],
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
  {
    title: "Courses Website",
    category: "Education UI",
    image: courses,
    description:
      "An online learning layout with course cards, structured content blocks, and clear call-to-action areas for students.",
    stack: ["React Ready", "Education", "Landing UI"],
    figma:
      "https://www.figma.com/design/vWO8j7iXWWE9hi2bXVaY5K/Untitled?node-id=0-1&t=AFl7xCyEQz1coj1P-1",
  },
  {
    title: "Abargaam",
    category: "Live Website",
    image: abargaam,
    description:
      "A deployed web project built with a clean interface, responsive layout, and production-ready presentation on Vercel.",
    stack: ["React", "Responsive UI", "Vercel"],
    liveUrl: "https://abargaam-g5fr.vercel.app/",
  },
  {
    title: "VitalFlow",
    category: "Live Website",
    image: vitalflow,
    description:
      "A polished live web experience focused on clear sections, modern visual flow, and smooth browsing across devices.",
    stack: ["React", "Frontend", "Vercel"],
    liveUrl: "https://vitalflow-mu.vercel.app/",
  },
  {
    title: "Saatosa",
    category: "Live Website",
    image: saatosa,
    description:
      "A complete website project with refined spacing, interactive sections, and a professional frontend deployment.",
    stack: ["React", "UI Development", "Vercel"],
    liveUrl: "https://saatosa.vercel.app/",
  },
];
