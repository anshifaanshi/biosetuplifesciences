import React from 'react'
import logo from '../assets/BIO.png';
import './Header.css'

function Header() {
  return (
    <div>
      <div className="header">
        <div className="bsl_logo">
          <img src={logo} alt="BSL Logo" />
        </div>
        <div className="bsl-title">
          <span className="biosetup">Biosetup</span>
          <span className="lifesciences">Lifesciences</span>
        </div>
        <div className="in_header">
          <ul>
            <li><a href="#about-container">About Us</a></li>
            <li><a href="#newsletter-container">Newslets</a></li>
            <li><a href="#career-container">Career</a></li>
            <li><a href="#events-container">Events</a></li>
            <li><a href="#team-container">Our Team</a></li>
            <li><a href="#opportunities-container">Opportunities</a></li>
            <li><a href="#bioit-container">Bio-IT Pedia</a></li>
          </ul>
        </div>
        <div className="genz"><a href="#genz">Gen-Z School</a></div>
      </div>
    </div>
  )
}

export default Header
