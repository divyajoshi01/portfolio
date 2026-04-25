import React from 'react'
import Home from './components/Home'
import About from './components/About'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
     <Home/> 
     <About/>
     <SkillsSection/>
      <Projects/>
      <Contact/> 
     <Footer/>
     
    </>
  )
}

export default App;
