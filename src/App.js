import * as React from "react";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Others/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
