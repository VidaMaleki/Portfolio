import React from "react";
import "./Education.css";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";


const Education = () => {
  return (
    <div className="education">
      <div class="pic-wrapper">
        <div class="pic-container"></div>
      </div>
      <div class="education-1">
        <h2 class="work-experience-header">Education</h2>
        <div class="education-box">
          <div class="experience-box-header"><h3>Ada Developer Academy ( Boot camp )</h3><h4>03/2022 - 01/2023</h4></div>
          <h4>Software Engineer</h4>
        </div>
        <div class="education-box">
          <div class="experience-box-header"><h3>Islamic Azad University of Tabriz</h3><h4>09/2009 - 04/2014</h4></div>
          <h4>Bachelor's degree, Accounting</h4>
        </div>
        <h2 class="work-experience-header">Licenses & certifications</h2>

        <div class="education-box">
          <div class="experience-box-header"><div class="experience-box-header-title"><FaIcons.FaPython/><h3>Python 3 Certificate</h3></div><h4>Issued 06/2021</h4></div>
          <h4>Codecademy</h4>
        </div>
        <div class="education-box">
          <div class="experience-box-header"><div class="experience-box-header-title"><SiIcons.SiJavascript/><h3>JavaScript Certificate</h3></div><h4>Issued 09/2021</h4></div>
          <h4>Codeacademy</h4>
        </div>
        <h2 class="work-experience-header">Skils</h2>
        <div class="skills"><FaIcons.FaPython/><SiIcons.SiJavascript/><SiIcons.SiTypescript/><FaIcons.FaHtml5/><SiIcons.SiCss3/><FaIcons.FaGit/><FaIcons.FaReact/>
        <SiIcons.SiFlask/><SiIcons.SiWebpack/>
        </div>
      </div>
    </div>
  );
};

export default Education;
