import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl
      backdrop-blur-xl bg-white/20 rounded-full shadow-lg px-6 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#0F3F3A] font-medium">
          <li>
            <a href="#home" className="hover:text-[#C89B5A]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#C89B5A]">
              About & Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#C89B5A]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#C89B5A]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#C89B5A]">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CV Button */}
        <a
          href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#0F3F3A] text-[#C89B5A] px-5 py-2 rounded-full text-sm
          hover:scale-105 transition"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#0F3F3A]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="md:hidden mt-4 rounded-2xl bg-white/30 backdrop-blur-xl
          shadow-lg p-6 text-center"
        >
          <ul className="space-y-4 text-[#0F3F3A] font-medium">
            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About & Education
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#0F3F3A] text-[#C89B5A]
            px-6 py-2 rounded-full text-sm"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
