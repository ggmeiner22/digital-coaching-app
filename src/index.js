import React from "react";
import ReactDOM from "react-dom/client";  // Import createRoot from react-dom/client
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FirstSemester from "./Components/First-Semester/FirstSemester";
import SecondSemester from "./Components/Second-Semester/SecondSemester";
import Home from "./Components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));  // Initialize root

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The root path ("/") should only match when the URL is exactly "/" */}
        <Route path="/" element={<About />} index />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/firstsemester" element={<FirstSemester />} />
        <Route path="/secondsemester" element={<SecondSemester />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
