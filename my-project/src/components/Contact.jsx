import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  cardReveal,
  sectionReveal,
  slideFromLeft,
  slideFromRight,
} from "../utils/motion";

const inputClass =
  "w-full mt-2 px-5 py-3 rounded-xl bg-white/30 backdrop-blur border border-white/40 outline-none focus:bg-white/60 focus:shadow-[0_0_25px_rgba(15,63,58,0.4)] transition-all duration-300";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionA = motion.a;
const MotionButton = motion.button;

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_bwmtgtq",
        "template_mhcrjwy",
        formRef.current,
        "OxAEEhKwvf_TNfWPS",
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        },
      );
  };

  return (
    <MotionSection
      id="contact"
      className="bg-bgLight py-32 px-[6%] md:px-[10%]"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <MotionH2
        className="text-4xl text-primary text-center mb-24"
        variants={cardReveal}
      >
        Contact Me
      </MotionH2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <MotionDiv variants={slideFromLeft}>
          <p className="text-textDark leading-7 mb-10 max-w-md">
            I welcome inquiries regarding new opportunities, collaborations, or
            professional discussions. If you have a project in mind or would
            like to connect, feel free to reach out. I look forward to working
            together on meaningful digital experiences.
          </p>

          <p className="text-textDark mb-2">Email</p>
          <a
            href="mailto:adelaamiri32@gmail.com"
            className="text-primary hover:underline"
          >
            adelaamiri32@gmail.com
          </a>

          <div className="h-[1px] bg-textDark/40 mt-6 mb-10 w-64" />

          <div className="flex gap-6 text-xl">
            <MotionA
              href="https://github.com/adelaamiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </MotionA>
            <MotionA
              href="https://www.linkedin.com/in/adela-amiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              className="w-11 h-11 bg-[#0A66C2] text-white rounded-full flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </MotionA>
            <MotionA
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </MotionA>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={slideFromRight}
          whileHover={{ y: -8 }}
          className="w-full bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-2xl glass-shine reveal-edge"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-7">
            <div>
              <label className="text-sm text-textDark">Name</label>
              <input type="text" name="name" required className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-textDark">Email</label>
              <input
                type="email"
                name="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-textDark">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-full bg-[#0F3F3A] text-[#C89B5A] font-medium tracking-wide disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </MotionButton>

            {status === "success" && (
              <p className="text-green-700 text-center mt-2">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-700 text-center mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Contact;
