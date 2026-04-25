import React from "react";
import { motion } from "framer-motion";

function About() {
  // Animations Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
  };

  return (
    <div id="about" className="bg-gray-900 text-white min-h-screen flex items-center py-20 px-6 lg:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE - Motion added */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
            className="relative group justify-self-center lg:justify-self-start"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative">
              <img
               
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Divya Joshi Developer"
                className="rounded-2xl shadow-2xl w-full max-w-md aspect-[4/5] object-cover border border-gray-800 grayscale-[20%] group-hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }} 
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                About <span className="text-indigo-500">Me</span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1.5 bg-indigo-500 rounded-full"
              ></motion.div>
            </motion.div>

            <div className="space-y-4">
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-bold italic">Divya Joshi</span>,
                a results-driven <span className="text-indigo-400">MERN Stack Developer</span>.
                My journey in technology started with a <span className="text-white border-b border-indigo-500">BSc in Computer Science</span>,
                which I further strengthened with an <span className="text-white border-b border-pink-500">MSc in Computer Science</span>.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
                With a deep understanding of core CS fundamentals, I specialize in architecting
                modern web solutions. I love the challenge of turning complex problems into
                simple, elegant, and high-performing code.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed border-l-4 border-gray-700 pl-4 italic">
                Currently, I am diving deep into advanced React patterns and scalable
                Node.js architectures to build world-class digital products.
              </motion.p>
            </div>

            {/* SKILLS TAGS - Staggered entrance and hover animations */}
            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"].map((skill, index) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500 px-4 py-2 rounded-xl text-sm font-semibold text-indigo-300 transition-all cursor-default shadow-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default About;