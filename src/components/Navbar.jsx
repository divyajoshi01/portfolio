import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-gray-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white tracking-tight">
              Divya<span className="text-indigo-500">Joshi</span>
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex gap-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white text-3xl focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[-1]"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-gray-900 p-8 shadow-2xl z-[101]"
            >
              <div className="flex flex-col gap-y-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-semibold text-white hover:text-indigo-400 border-b border-white/5 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="/DivyaJoshi_CV.pdf" 
                  className="mt-4 text-center bg-indigo-600 py-3 rounded-lg font-bold text-white shadow-lg shadow-indigo-500/20"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;