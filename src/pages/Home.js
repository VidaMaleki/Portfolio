import React from "react";
import '../App.css';
import './Home.css';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="home">
        <div className='hero-container'>
        <h1>All in One Calculator</h1>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
