import React from "react";
import '../App.css';
import './Home.css';
import Footer from '../components/Footer';
import p_video from '../videos/p_video.mp4'

function Home() {
  return (
    <>
    <div>
      <div className="home-container">
      
        <div class="video-container">
          <video src={p_video} autoplay loop muted/>
        </div>
        <h1 >Vida Ghorbannezhad Maleki</h1>
        <p>Full-stack developer</p>
        <div>
          <button>Resume</button>
          <button></button>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
