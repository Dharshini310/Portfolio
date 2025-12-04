import React, { useState } from "react";
import contact from "../assets/contact.jpg";
import axios from "axios";

function Contact({ darkMode }) {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !suggestion) {
      alert("Please fill the form");
      return;
    }
    try {
      await axios.post("https://portfolio-backend-jbe3.onrender.com/postdata", {
        email,
        suggestion,
      });
      alert("Suggestion submitted successfully");
      setEmail("");
      setSuggestion("");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email already exists");
      } else {
        alert("Error submitting data");
      }
      setEmail("");
      setSuggestion("");
    }
  };

  const containerStyle = {
    backgroundColor: darkMode ? "#000000" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#111827" : "#f3f4f6",
    borderColor: darkMode ? "#374151" : "#d1d5db",
  };

  return (
    <div style={containerStyle} className="py-16 px-5 transition-all duration-300">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <img
          src={contact}
          alt="contact"
          className="w-full lg:w-1/3 max-h-[400px] object-cover rounded-xl shadow-lg"
        />

        <form
          style={cardStyle}
          className="shadow-lg border rounded-xl p-10 w-full lg:w-1/2 transition-all duration-300"
          onSubmit={handleSubmit}
        >
          <h2 style={{ color: "#ef4444" }} className="text-2xl font-semibold mb-6 text-center">
            Contact Me
          </h2>

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              borderColor: darkMode ? "#374151" : "#d1d5db",
            }}
          />

          <textarea
            rows={6}
            placeholder="Enter Your Suggestions"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="border w-full p-3 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              borderColor: darkMode ? "#374151" : "#d1d5db",
            }}
          ></textarea>

          <button
            style={{
              backgroundColor: darkMode ? "#ffffff" : "#000000",
              color: darkMode ? "#000000" : "#ffffff",
            }}
            className="w-full py-2 rounded-lg hover:opacity-80 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
