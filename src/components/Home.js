import React from 'react';
import './Home.css';
import Backanimation from './Backanimation';
import Header from './Header';
import Bioit from './Bioit';
import About from './About';
import Career from './Career';
import Newsletter from './Newsletter';
import Team from './Team';

function Home() {

  return (
    <div>
      <Backanimation />
      <div className="container" id='container'>
        <Header />
        <div className="main-content">
          <div className="network-bg"></div>
          <div className='biosetup-title'>
            <span className="biosetup-title">Biosetup</span>
            <span className="lifesciences-title">Lifesciences</span>
          </div>
          <p className="subtitle">A hub for scientific research and learning</p>
        </div>
      </div>
      <div className="bioit-container" id='bioit-container'>
        <Bioit />
      </div>
      <div className="about-container" id='about-container'>
        <About />
      </div>
      <div className="newsletter-container" id='newsletter-container'>
        <Newsletter />
      </div>
      <div className="team-container" id='team-container'>
        <Team />
      </div>
      <div className="career-container" id='career-container'>
        <Career />
      </div>
    </div>
  );
}

export default Home;
