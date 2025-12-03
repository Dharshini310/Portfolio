import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Navbar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>

      <div className="flex justify-evenly gap-30 p-6 text-xl text-black cursor-pointer sticky top-0 bg-white  z-50">
        <h3 className="text-red-500 font-bold text-2xl">D/</h3>

        <span onClick={() => scrollToSection("about")} className="hover:text-red-500">
          About me
        </span>

        <span onClick={() => scrollToSection("skills")} className="hover:text-red-500">
          Skills
        </span>

        <span onClick={() => scrollToSection("projects")} className="hover:text-red-500">
          Projects
        </span>

        <span onClick={() => scrollToSection("contact")} className="hover:text-red-500">
          Contact
        </span>

        <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border">
          My Resume
        </button>
      </div>

      <div id="about" className="scroll-mt-28">
        <AboutMe />
      </div>

      <div id="skills" className="scroll-mt-28">
        <Skills />
      </div>

      <div id="projects" className="scroll-mt-28">
        <Projects />
      </div>

      <div id="contact" className="scroll-mt-28">
        <Contact />
      </div>

    </div>
  )
}

export default Navbar
