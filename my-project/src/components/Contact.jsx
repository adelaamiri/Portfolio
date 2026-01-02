import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
        "OxAEEhKwvf_TNfWPS"
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
        }
      );
  };

  return (
    <section id="contact" className="bg-bgLight py-32 px-[6%] md:px-[10%]">
      <h2 className="text-4xl text-primary text-center mb-24">Contact Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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

          {/* SOCIAL */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="w-11 h-11 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            w-full
            bg-white/20 backdrop-blur-2xl
            border border-white/30
            rounded-3xl p-10 shadow-2xl
          "
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-7">
            {/* Name */}
            <div>
              <label className="text-sm text-textDark">Name</label>
              <input
                type="text"
                name="name"
                required
                className="
                  w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/30 backdrop-blur
                  border border-white/40
                  outline-none
                  focus:bg-white/60
                  focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
                  transition-all duration-300
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-textDark">Email</label>
              <input
                type="email"
                name="email"
                required
                className="
                  w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/30 backdrop-blur
                  border border-white/40
                  outline-none
                  focus:bg-white/60
                  focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
                  transition-all duration-300
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-textDark">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="
                  w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/30 backdrop-blur
                  border border-white/40
                  outline-none resize-none
                  focus:bg-white/60
                  focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
                  transition-all duration-300
                "
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              className="
                w-full py-3 rounded-full
                bg-[#0F3F3A] text-[#C89B5A]
                font-medium tracking-wide
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent successfully
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-2">
                ❌ Something went wrong
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
