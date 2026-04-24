import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* LOGO OR NAME */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Divya <span className="text-indigo-500">Joshi</span>
          </h3>
          <p className="text-xs mt-2 text-gray-500 uppercase tracking-widest">
            MERN Stack Developer & MSc CS Graduate
          </p>
        </div>

        {/* NAV LINKS - Matching your Nav style */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
        </div>

        {/* SOCIAL ICONS - With Glow Effect on hover */}
        <div className="flex justify-center gap-8 mb-10 text-2xl">
          <a href="#" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300 transform">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white hover:scale-125 transition-all duration-300 transform">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-pink-500 hover:scale-125 transition-all duration-300 transform">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500 hover:scale-125 transition-all duration-300 transform">
            <FaFacebook />
          </a>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-gray-800/50 pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="text-gray-400">Divya Joshi</span>. Built with React & Tailwind.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;