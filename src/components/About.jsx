import React from "react";

function About() {
  return (
    /* Added min-h-screen and flex to center content vertically */
    <div id="about" className="bg-gray-900 text-white min-h-screen flex items-center py-20 px-6 lg:px-20">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE - Added decorative border and glow */}
          <div className="relative group justify-self-center lg:justify-self-start">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80"
                alt="Divya Joshi Coding"
                className="rounded-2xl shadow-2xl w-full max-w-md aspect-[4/5] object-cover border border-gray-800"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                About <span className="text-indigo-500">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-indigo-500 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-bold italic">Divya Joshi</span>, 
                a results-driven <span className="text-indigo-400">MERN Stack Developer</span>. 
                My journey in technology started with a <span className="text-white border-b border-indigo-500">BSc in Computer Science</span>, 
                which I further strengthened with an <span className="text-white border-b border-pink-500">MSc in Computer Science</span>.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                With a deep understanding of core CS fundamentals, I specialize in architecting 
                modern web solutions. I love the challenge of turning complex problems into 
                simple, elegant, and high-performing code.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-gray-700 pl-4 italic">
                Currently, I am diving deep into advanced React patterns and scalable 
                Node.js architectures to build world-class digital products.
              </p>
            </div>

            {/* SKILLS TAGS - Enhanced with hover effects */}
            <div className="pt-4 flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800/50 hover:bg-indigo-500/20 border border-gray-700 hover:border-indigo-500 px-4 py-2 rounded-xl text-sm font-semibold text-indigo-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;