import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from "./Component/Header";
import TBD from './Component/TBD';
import Main from './Component/Main';
import About from './Component/About';
import Dmain from './Developer/Dmain';
import Pmain from './Photographer/Pmain';
import Wedding from './Photographer/Wedding';
import Family from './Photographer/Family';
import Personal from './Photographer/Personal';
import Testimonials from './Component/Testimonials';

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
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/TBD" element={<TBD />} />
        <Route path="/Developer" element={<Dmain />} />
        <Route path="/Photographer" element={<Pmain />} />
        <Route path="/Photographer/Wedding" element={<Wedding />} />
        <Route path="/Photographer/Family" element={<Family />} />
        <Route path="/Photographer/Personal" element={<Personal />} />
      </Routes>
      {/* Shared Footer */}
      <footer>
        <p>© 2025 Shuli Wang</p>
      </footer>
    </div>
  );
}

export default App;