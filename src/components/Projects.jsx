import React from "react";

function Projects({ darkMode }) {
  const containerStyle = {
    backgroundColor: darkMode ? "#000000" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#111827" : "#f3f4f6",
    borderColor: darkMode ? "#374151" : "#d1d5db",
  };

  const textStyle = {
    color: darkMode ? "#d1d5db" : "#111827",
  };

  const linkStyle = {
    color: darkMode ? "#60a5fa" : "#3b82f6",
    textDecoration: "underline",
  };

  const subTextStyle = {
    color: darkMode ? "#9ca3af" : "#4b5563",
  };

  return (
    <div style={containerStyle} className="py-16 px-10 transition-all duration-300">
      <h1 style={{ color: "#ef4444" }} className="font-semibold text-left text-3xl p-5">
        Projects
      </h1>
      <div style={cardStyle} className="border rounded-xl p-8 mb-10 transition-all duration-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">MentorMesh</h2>
          <a href="https://github.com/Dharshini310/Mentor_Mesh" style={linkStyle}>
            Github Link
          </a>
        </div>

        <p style={textStyle} className="text-center mt-8 text-lg leading-relaxed">
          I developed a full-stack social web application that enables users to
          create, like, and save posts, delivering an engaging and interactive
          experience. To ensure secure data handling, I implemented robust
          JWT-based authentication along with well-structured RESTful APIs.
          Additionally, I enhanced the overall user experience by designing a
          responsive interface and integrating real-time toast notifications
          for seamless and intuitive interactions.
        </p>

        <p style={subTextStyle} className="text-center mt-4 font-medium">
          Skills Used : React.JS || Express.JS || Node.JS || MongoDB
        </p>
      </div>
      <div style={cardStyle} className="border rounded-xl p-8 transition-all duration-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Recipe Sharing Platform</h2>
          <a href="https://github.com/Dharshini310/Recipe_Sharing_Platform" style={linkStyle}>
            Github Link
          </a>
        </div>

        <p style={textStyle} className="text-center mt-8 text-lg leading-relaxed">
          I created a responsive web application that allows users to add and
          view their favorite recipes, ensuring a smooth and user-friendly
          experience across devices. Additionally, I implemented React Hooks
          for efficient state management and enhanced the overall UI layout to
          improve usability and visual appeal.
        </p>

        <p style={subTextStyle} className="text-center mt-4 font-medium">
          Skills Used : React.JS || CSS3 || Node.JS
        </p>
      </div>
    </div>
  );
}

export default Projects;
