import React, { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Added min-h-screen to ensure full height */
    <div className="bg-gray-900 min-h-screen text-white selection:bg-indigo-500">
      
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          
          {/* LOGO */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <h3 className="text-xl font-bold tracking-tight">
                Divya <span className="text-indigo-500">Joshi</span>
              </h3>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="-m-2.5 p-2.5 text-gray-200 text-2xl"
            >
              ☰
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold hover:text-indigo-400 transition">Home</a>
            <a href="#" className="text-sm font-semibold hover:text-indigo-400 transition">About</a>
            <a href="#" className="text-sm font-semibold hover:text-indigo-400 transition">Projects</a>
            <a href="#" className="text-sm font-semibold hover:text-indigo-400 transition">Contact</a>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-gray-900 p-6 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Divya <span className="text-indigo-500">Joshi</span></h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-6 text-xl">
              <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - Centered using Flex and min-h-screen */}
      <div className="relative isolate flex flex-col items-center justify-center min-h-screen px-6 pt-14 lg:px-8">

        {/* TOP GRADIENT */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 blur-3xl pointer-events-none">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto w-[36rem] h-[20rem] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-20"
          />
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-3xl text-center">
          
          {/* PROFILE IMAGE FROM UNSPLASH */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" 
              alt="Developer Workspace" 
              className="rounded-full w-32 h-32 object-cover border-4 border-indigo-500 shadow-xl"
            />
          </div>

          <h1 className="text-5xl font-bold text-white sm:text-7xl tracking-tight">
            Hi, I'm Divya Joshi👋
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl max-w-2xl mx-auto">
            MSc Computer Science | MERN Stack Developer <br/>
            Building robust web applications with modern technologies.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-indigo-600 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:bg-indigo-500 transition-all hover:scale-105"
            >
              View Projects
            </a>

            <a href="#" className="text-white font-semibold hover:text-indigo-400 transition">
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 blur-3xl pointer-events-none">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto w-[36rem] h-[20rem] bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-20"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;