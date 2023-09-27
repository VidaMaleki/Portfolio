import React from "react";
import "./Projects.css";
import {
  allComponents,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";
import AdiesCapstoneHub from '../../image/AdiesCapstoneHub.png'

provideFASTDesignSystem().register(allComponents);

function Projects() {
  return (
    <div className="projects-container">
      <div class="projects-wrapper">
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt="Adies Capstone Hub"
            src={AdiesCapstoneHub}
          />
          <div class="ex-first-card">
            <h2>Adies Capstone Hub</h2>
            <p>
              Technologies: Next.js, TypeScript, CSS, Tailwind, HTML, and Render
            </p>
            <br></br>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://adiescapstonehub.onrender.com/';"
              target="blank_"
            >
              Demo
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://play-lh.googleusercontent.com/m_VdEQPNBg0prla-_Grnmbu0acIOJ-4K_Iv2oAy_R5hyWg5QK3txmKmDqRjAnCtHXw"
          />
          <div class="ex-first-card">
            <h2>All-in-One-Calculator</h2>
            <p>
              Technologies: React, JavaScript, CSS, HTML, git, and react Routs
            </p>
            <br></br>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://vidamaleki.github.io/All-in-one-calculator/';"
              target="blank_"
            >
              Demo
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg"
          />
          <div class="ex-first-card">
            <h2>Portfolio</h2>
            <p>
              Technologies: React, JavaScript, Fast web compenents, CSS, and
              HTML
            </p>
            <br></br>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://vidamaleki.github.io/portfolio/';"
            >
              Demo
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://www.brainspores.com/wp-content/uploads/2014/07/task-management-tool.jpg"
          />
          <div class="ex-first-card">
            <h2>Inspiration Board</h2>
            <p>
              Technologies: FuLl-stack app,React, JavaScript, CSS, HTML, Python,
              Flask, PostgreSQL{" "}
            </p>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/front-end-inspiration-board';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://cdn.dribbble.com/userupload/3692039/file/original-0dfac1d65cff0214143668f92a2792df.jpg?resize=400x0"
          ></img>
          <div class="ex-first-card">
            <h2>Chat Log</h2>
            <p>
              Technologies: FuLl-stack app,React, JavaScript, CSS, HTML, Python,
              Flask, PostgreSQLL
            </p>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/react-chatlog';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://www.shutterstock.com/image-vector/weather-forecast-poster-temperature-humidity-260nw-1711691812.jpg"
          />
          <div class="ex-first-card">
            <h2>Weather report</h2>
            <p>
              Technologies: React, JavaScript, CSS, HTML and Location and Temp
              API
            </p>
            <br></br>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/weather-report';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"
          />
          <div class="ex-first-card">
            <h2>Task List</h2>
            <p>
              Technologies: FuLl-stack app,React, JavaScript, CSS, HTML, Python,
              Flask, PostgreSQL
            </p>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/task-list-front-end';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"
          />
          <div class="ex-first-card">
            <h2>Solar system Api</h2>
            <p>
              Technologies: FuLl-stack app,React, JavaScript, CSS, HTML, Python,
              Flask, PostgreSQL
            </p>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/solar-system-api';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
        <fast-card class="first-card">
          <img
            class="first-card-img"
            alt=""
            src="https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"
          />
          <div class="ex-first-card">
            <h2>Js-Adagrams</h2>
            <p>
              Technologies: React, JavaScript, Fast web compenents, CSS, and
              HTML
            </p>
            <br></br>
            <fast-button
              class="button-1"
              onclick="window.location.href='https://github.com/VidaMaleki/js-adagrams';"
            >
              GitHub
            </fast-button>
          </div>
        </fast-card>
      </div>
    </div>
  );
}

export default Projects;
