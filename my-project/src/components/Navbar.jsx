import logo from "../assets/logo.svg"; // مسیر لوگو خودت

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl
      backdrop-blur-xl bg-white/20 rounded-full shadow-lg px-6 py-3"
    >
      <div className="flex items-center justify-around">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-[#0F3F3A] font-medium">
          <li>
            <a href="#home" className="hover:text-[#C89B5A] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#C89B5A] transition">
              About & Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#C89B5A] transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#C89B5A] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#C89B5A] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Download CV */}
        {/* <a
          href="/cv.pdf" // فایل CV داخل public
          download
          className="bg-[#0F3F3A] text-[#C89B5A] px-5 py-2 rounded-full text-sm
          hover:scale-105 transition"
        >
          Download CV
        </a> */}
        <a
          href="https://drive.google.com/file/d/1Iz5hiTkJ_7M-edcNtooP2wsXX8OwKGtN/view?usp=drivesdk"
          className="bg-[#0F3F3A] text-[#C89B5A] px-5 py-2 rounded-full text-sm
  hover:scale-105 transition"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
