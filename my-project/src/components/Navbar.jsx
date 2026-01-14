import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About & Education" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const ids = links.map((l) => l.id);

    const onScroll = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl
      backdrop-blur-2xl bg-white/20 rounded-full shadow-soft px-6 py-3 border border-white/25"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-textDark font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition relative ${
                  active === l.id ? "text-accent" : "hover:text-accent"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <a
          href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-textDark text-accent px-5 py-2 rounded-full text-sm
          hover:scale-105 transition shadow-lg"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden text-2xl text-textDark"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Animated */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 rounded-2xl bg-white/30 backdrop-blur-2xl
            shadow-soft p-6 text-center border border-white/25"
          >
            <ul className="space-y-4 text-textDark font-medium">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`transition ${
                      active === l.id ? "text-accent" : "hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-textDark text-accent px-6 py-2 rounded-full text-sm shadow-lg"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
