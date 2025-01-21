import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from "./Component/Header";
import TBD from './Component/TBD';
import Main from './Component/Main';
import About from './Component/About';
import Painting from './AIfunction/Painting';
import Pmain from './Photographer/Pmain';
import Wedding from './Photographer/Wedding';

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  const backgroundStyles = {
    "/": "url('/images/background-main.jpg')",
    "/Photographer": "url('/images/profile.jpg')",
    "/Developer": "url('/images/profile-zoom.jpg')",
    "/AIfunction/Painting": "url('/images/profile.jpg')",
  };

  return (
    <div
      className="page"
      style={{
        //backgroundImage: backgroundStyles[location.pathname] || "none",
        backgroundSize: "cover", // Ensure image fits
        backgroundPosition: "center",
        minHeight: "100vh", // Full height of the viewport
      }}
    >
      {/* Shared Header */}
      <Header />


      {/* Dynamic Page Content */}
      <Routes>
        <Route path="/TBD" element={<TBD />} />
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/AIfunction/Painting" element={<Painting />} />
        <Route path="/Photographer" element={<Pmain />} />
        <Route path="/Photographer/Wedding" element={<Wedding />} />
      </Routes>

      {/* Shared Footer */}
      <footer>
        <p>© 2025 Shuli Wang</p>
      </footer>
    </div>
  );
}

export default App;