import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";


function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/experience" element={<Experience/>} />
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
