import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);

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

  // Ensure portal target exists (SSR safe)
  useEffect(() => setMounted(true), []);

  // Active section highlight
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Mobile Menu (Portal)
  const MobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Centered Card */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(10px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="
              relative w-full max-w-[420px]
              rounded-3xl
              bg-white/80 backdrop-blur-2xl
              border border-white/40
              shadow-soft
              p-7 sm:p-8
            "
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
                <span className="font-semibold text-textDark">Menu</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-textDark/70 hover:text-textDark transition text-xl"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Links */}
            <ul className="space-y-3 text-textDark font-medium text-center">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-3 rounded-2xl transition
                      ${
                        active === l.id
                          ? "text-accent bg-white/35"
                          : "hover:text-accent hover:bg-white/25"
                      }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                block mt-6 text-center
                bg-textDark text-accent
                px-6 py-3 rounded-full text-sm
                shadow-lg
                hover:scale-[1.03] active:scale-[0.98]
                transition
              "
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* NAVBAR */}
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

          {/* Desktop CV */}
          <a
            href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-textDark text-accent px-5 py-2 rounded-full text-sm
            hover:scale-105 transition shadow-lg"
          >
            Download CV
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-textDark"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Render Mobile Menu via Portal */}
      {mounted && createPortal(MobileMenu, document.body)}
    </>
  );
};

export default Navbar;
