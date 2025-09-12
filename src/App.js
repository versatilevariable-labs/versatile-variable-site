import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home page (includes Hero + Courses + Footer) */}
        <Route path="/" element={<Home />} />

        {/* Individual sections as separate routes */}
        <Route path="/courses" element={<CoursesSection />} />
        <Route path="/footer" element={<Footer />} />

        {/* 404 Fallback */}
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
