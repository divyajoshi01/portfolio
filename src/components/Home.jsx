import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white selection:bg-indigo-500 overflow-x-hidden">

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex lg:flex-1"
          >
            <a to="#" className="-m-1.5 p-1.5">
              <h3 className="text-xl font-bold tracking-tight">
                Divya<span className="text-indigo-500">Joshi</span>
              </h3>
            </a>
          </motion.div>

          <div className="flex lg:hidden">
            <button onClick={() => setMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-200 text-2xl">
              ☰
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex lg:gap-x-12"
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a key={item} to={`#${item.toLowerCase()}`} className="text-sm font-semibold hover:text-indigo-400 transition">
                {item}
              </a>
            ))}
          </motion.div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <div className="relative isolate flex flex-col items-center justify-center min-h-screen px-6 pt-14 lg:px-8">

        {/* Background Gradients (Animated) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-x-0 -top-40 -z-10 blur-3xl pointer-events-none"
        >
          <div
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            className="mx-auto w-[36rem] h-[20rem] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-20"
          />
        </motion.div>

        {/* CONTENT AREa  */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          {/* PROFILE IMAGE */}
          <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/17/16/08/ai-generated-8579695_1280.jpg"
              alt="Divya Joshi"
              className="rounded-full w-32 h-32 object-cover border-4 border-indigo-500 shadow-xl"
            />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-white sm:text-7xl tracking-tight">
            Hi, I'm Divya Joshi
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl max-w-2xl mx-auto">
            MSc Computer Science | MERN Stack Developer <br />
            Building robust web applications with modern technologies.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
            <a to="/DivyaJoshi_CV.pdf" target="_blank" className="bg-indigo-600 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:bg-indigo-500 transition-all hover:scale-105">
              Download CV
            </a>

            <a to="#contact" className="bg-gray-800 px-6 py-3 rounded-full text-white font-semibold hover:text-indigo-400 transition">
              Contact Me <span>→</span>
            </a>

            {/* Social Icons with Hover motion */}
            {[
              { icon: <FaLinkedin size={20} />, to: "https://linkedin.com/in/divyajoshi-dev", color: "hover:text-indigo-500" },
              { icon: <FaGithub size={20} />, to: "https://github.com/divyajoshi01", color: "hover:text-white" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                to={social.to}
                target="_blank"
                className={`bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-white ${social.color} transition-colors shadow-md`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;