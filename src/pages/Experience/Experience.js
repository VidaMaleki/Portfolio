import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Experience.css";

import { 
  allComponents, 
  provideFASTDesignSystem 
} from "@microsoft/fast-components";
import {provideFluentDesignSystem , fluentCard} from '@fluentui/web-components';


provideFASTDesignSystem().register(allComponents);
provideFluentDesignSystem().register(fluentCard);



function Experience() {
  
  return (
    <div className="experience-container">
      <div class="work-experience">
        <h2 class="work-experience-header">Work Experience</h2>
        <div class="experience-box">
          <div class="experience-box-header"><div class="experience-box-header-title"><FaIcons.FaMicrosoft/><h3>Microsoft</h3></div><h4>08/2022 - 01/2023</h4></div>
          <h4>Software Engineer</h4>
          <ul class="experience-box-list">
            <li>Sole developer of the Office in Sidebar project that reached 172k DAU.</li>
            <li>Experienced at creating reusable webcomponents</li>
            <li>Technologies: Webpack, Fast and Fluent UI elements, TypeScript, CSS, HTML, Figma, and C++</li>
          </ul>
        </div>
        <div class="experience-box">
          <div class="experience-box-header"><div class="experience-box-header-title"><FaIcons.FaTree/><h3>Ada Developer Academy</h3></div><h4>03/2022 - 01/2023</h4></div>
          <h4>Software Engineer</h4>
          <ul class="experience-box-list">
            <li>Worked on multiple projects using JavaScript, CSS, HTML, React, Python, Flask, SQL</li>
            <li>Technologies: JavaScript, CSS, HTML, React, Python, Flask, SQL , REST API</li>
            <li>FrameWorks: Flask and React</li>
          </ul>
        </div>
        <div class="experience-box">
          <div class="experience-box-header"><h3>Umpqua Bank</h3><h4>01/2020 - 12/2020</h4></div>
          <h4>Universal Associate</h4>
          <ul class="experience-box-list">
            <li>Good ability to recommend solutions to improve financial wellness success</li>
            <li>Success in making outbound calls for appointment confirmations, orders pickups and error/ correction </li>
          </ul>
        </div>
        <div class="experience-box">
          <div class="experience-box-header"><h3>KeyBank</h3><h4>09/2018 - 12/2019</h4></div>
          <h4>Lead Teller</h4>
          <ul class="experience-box-list">
            <li>Getting promotion from Teller to Lead Teller position in 6 months</li>
            <li>Getting Ripple effect reward and Ultra performance reward for Q1 & Q2 2019</li>
            <li>Growing 3 surveys to 18 year-over-year with %100 in client experience</li>
            <li>Successfully referred key@work presentations, financial Advisor appointments, Mortgage referrals and key private bank prospects</li>
            <li>Trained 3 new employees and coached them for customer service and sales skills</li>
          </ul>
          
        </div>
        <div class="experience-box">
          <div class="experience-box-header"><h3>Zarrin Naghsh</h3><h4>09/2018 - 12/2019</h4></div>
            <h4 >Accounting Assistant - Sale Supervisor</h4>
            <ul class="experience-box-list">
              <li>Effectively worked as part of a team of venders in a manufacture company</li>
              <li>Successfully fostered relationships with retailers from around world and provided them with the goods and services to suit their individual business needs</li>
              <li>Operated under multiple roles to facilitate company needs as they arose</li>
              <li>Engaged in suggestive selling and resolved customer complaints</li>
            </ul>
          </div>
        </div>
     
    </div>
  );
}

export default Experience;
