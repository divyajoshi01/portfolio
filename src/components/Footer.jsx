import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION: Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">

          {/* LEFT: LOGO OR NAME */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Divya <span className="text-indigo-500">Joshi</span>
            </h3>
            <p className="text-xs mt-2 text-gray-500 uppercase tracking-widest">
              MERN Stack Developer
            </p>
          </div>
          {/* CENTER: NAV aS */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex-1 flex justify-center md:justify-end gap-6 text-xl">
            <a href="https://www.linkedin.com/in/divyajoshi-dev" target="_blank" rel="noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300 transform">
              <FaLinkedin />
            </a>
            <a href="https://github.com/divyajoshi01" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-125 transition-all duration-300 transform">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/bestofdivya/" target="_blank" rel="noreferrer" className="hover:text-pink-500 hover:scale-125 transition-all duration-300 transform">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/bestofdivyaa" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:scale-125 transition-all duration-300 transform">
              <FaFacebook />
            </a>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Divya Joshi. All rights reserved. <span className="text-pink-300">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;