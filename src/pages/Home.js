import React from "react";
import '../App.css';
import './Home.css';
import * as FaIcons from "react-icons/fa";

function Home() {
  return (
    <>
        <div className="home-container">
          <h1 >VIDA MALEKI</h1>
          <p>S O F T W A R E  E N G I N E E R</p>
          <div className="social-icons">
            <div >
              <a className="home-social-icon" href="https://github.com/VidaMaleki" >
                  <FaIcons.FaGithub/>
              </a>
            </div>
            <div >
              <a className="home-social-icon" href="https://www.linkedin.com/in/vida-ghorbannezhad-maleki-4082a4197/" >
                  <FaIcons.FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
