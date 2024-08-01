import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from '../src/Components/Detailspage.js'; // Ensure this path is correct
import './App.css'
import Main from "./Components/Main"; // Ensure Main component is defined and imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:info" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
