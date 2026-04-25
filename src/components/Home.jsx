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
      <div id="home" className="relative isolate flex flex-col items-center justify-center min-h-[90vh] px-6 lg:px-8">
        
        {/* Animated Background (Gradients) */}
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
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
            <a href="/DivyaJoshi_CV.pdf" target="_blank" className="bg-indigo-600 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:bg-indigo-500 transition-all">
              Download CV
            </a>

            <a href="#contact" className="bg-gray-800 px-6 py-3 rounded-full text-white font-semibold hover:text-indigo-400 transition">
              Contact Me <span>→</span>
            </a>

            {/* Social Icons */}
            {[
              { icon: <FaLinkedin size={20} />, to: "https://linkedin.com/in/divyajoshi-dev", color: "hover:text-indigo-500" },
              { icon: <FaGithub size={20} />, to: "https://github.com/divyajoshi01", color: "hover:text-white" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={social.to}
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