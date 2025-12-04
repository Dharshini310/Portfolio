import React from "react";
import aboutme from "../assets/aboutme4.jpg";

function AboutMe({ darkMode }) {

  const containerStyle = {
    backgroundColor: darkMode ? "#000000" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const textStyle = {
    color: darkMode ? "#d1d5db" : "#000000", 
  };

  const borderColor = darkMode ? "#374151" : "#e5e7eb"; 

  return (
    <div style={containerStyle} className="py-16 px-10 transition-all duration-300">
      <h1 className="font-semibold text-left text-3xl p-5" style={{ color: "#ef4444" }}>
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <p className="text-center p-4 text-lg leading-relaxed" style={textStyle}>
          Hi, I’m <em style={{ fontWeight: "bold", color: "#ef4444" }}>G. Dharshini</em>, a
          dedicated Full Stack Developer passionate about creating clean,
          responsive, and user-friendly web applications. I enjoy working with
          modern technologies like React, Node.js, Express, MongoDB, Java,
          Angular, and Spring Boot, and I love turning ideas into meaningful
          digital products.
          <br /><br />
          I focus on writing clean code, building efficient interfaces, and
          developing scalable APIs. I’m always learning new tools and improving
          my skills to become a better engineer. My goal is to create solutions
          that are intuitive, functional, and impactful.
        </p>

        <img
          src={aboutme}
          alt="aboutme"
          className="w-72 rounded-xl shadow-lg"
          style={{ border: `2px solid ${borderColor}` }}
        />
      </div>
    </div>
  );
}

export default AboutMe;
