import React from "react";

function Skills({ darkMode }) {
  const containerStyle = {
    backgroundColor: darkMode ? "#111827" : "#f3f4f6", 
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <div style={containerStyle} className="py-16 px-10 transition-all duration-300">
      <h1 style={{ color: "#ef4444" }} className="font-semibold text-left text-3xl mb-10 pl-5">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6 font-medium">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Express.js",
          "Angular",
          "Java",
          "MongoDB",
          "MySQL",
        ].map((skill) => (
          <span
            key={skill}
            style={{
              borderColor: darkMode ? "#4b5563" : "#000000",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            className="border px-6 py-3 rounded-xl hover:bg-black hover:text-white 
                       transition-all duration-300 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
