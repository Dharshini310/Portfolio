import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} transition-all duration-300`}>
      <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-4 lg:gap-8 p-4 lg:p-6 text-lg lg:text-xl cursor-pointer sticky top-0 z-50 shadow-md
        transition-all duration-300">
        
        <h3 className="text-red-500 font-bold text-2xl">D/</h3>

        <span onClick={() => scrollToSection("about")} className="hover:text-red-500">About Me</span>
        <span onClick={() => scrollToSection("skills")} className="hover:text-red-500">Skills</span>
        <span onClick={() => scrollToSection("projects")} className="hover:text-red-500">Projects</span>
        <span onClick={() => scrollToSection("contact")} className="hover:text-red-500">Contact</span>

        <a href="https://drive.google.com/file/d/1CLCPpSxeWT-0eeTm_ZLsoWhPbIxhwPIU/view?usp=drive_link">
          <button className={`${darkMode ? "bg-white text-black hover:bg-black hover:text-white border" : "bg-black text-white hover:bg-white hover:text-black border"} px-3 py-1 rounded transition`}>
            My Resume
          </button>
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Sections */}
      <div id="about" className="scroll-mt-16">
        <AboutMe darkMode={darkMode} />
      </div>

      <div id="skills" className="scroll-mt-16">
        <Skills darkMode={darkMode} />
      </div>

      <div id="projects" className="scroll-mt-16">
        <Projects darkMode={darkMode} />
      </div>

      <div id="contact" className="scroll-mt-16">
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Navbar;
