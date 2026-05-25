import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white selection:bg-indigo-500 overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <div
        id="home"
        className="relative isolate flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 py-16"
      >

        {/* Animated Background */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-x-0 -top-40 -z-10 blur-3xl pointer-events-none overflow-hidden"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="mx-auto w-[22rem] sm:w-[30rem] lg:w-[36rem] h-[16rem] sm:h-[20rem] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-20"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="mx-auto max-w-3xl text-center w-full"
        >

          {/* PROFILE IMAGE */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <img
              src="divya.jpeg"
              alt="Divya Joshi"
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover border-4 border-indigo-500 shadow-xl"
            />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Hi, I'm Divya Joshi
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fadeInUp}
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400 max-w-2xl mx-auto px-2"
          >
            MSc Computer Science | MERN Stack Developer <br />
            Building robust web applications with modern technologies.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >

            <a
              href="/divya_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base text-white font-bold shadow-lg hover:bg-indigo-500 transition-all"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="bg-gray-800 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base text-white font-semibold hover:text-indigo-400 transition"
            >
              Contact Me <span>→</span>
            </a>

            {/* Social Icons */}
            {[
              {
                icon: <FaLinkedin size={20} />,
                to: "https://linkedin.com/in/divyajoshi-dev",
                color: "hover:text-indigo-500"
              },
              {
                icon: <FaGithub size={20} />,
                to: "https://github.com/divyajoshi01",
                color: "hover:text-white"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={social.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white ${social.color} transition-colors shadow-md`}
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