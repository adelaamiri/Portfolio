import { motion } from "framer-motion";
import contactImg from "../assets/contact.svg";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-bgLight py-32 px-[10%]">
      {/* Title */}
      <h2 className="text-4xl text-primary text-center mb-20">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <p className="text-textDark mb-10 leading-7">
            I welcome inquiries regarding new opportunities, collaborations, or
            professional discussions. Please feel free to get in touch if you
            have a project in mind. I look forward to the possibility of working
            together on something meaningful.
          </p>

          {/* Email */}
          <p className="text-textDark mb-2">Email</p>

          <a
            href="mailto:adelaamiri32@gmail.com"
            className="text-primary hover:underline transition"
          >
            adelaamiri32@gmail.com
          </a>

          <div className="h-[1px] bg-textDark mt-4 mb-10 w-64" />

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          src={contactImg}
          alt="contact"
          className="w-[700px] rounded-2xl"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Contact;
