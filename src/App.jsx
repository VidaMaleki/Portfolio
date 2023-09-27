import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";


function App() {
    return (
        <>
          <HashRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/experience" element={<Experience/>} />
            </Routes>
          </HashRouter>
        </>
    );
}

export default App;
