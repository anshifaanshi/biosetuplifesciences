import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bioit from './components/Bioit';
import Newsletter from './components/Newsletter';
import Career from './components/Career';
import Team from './components/Team';
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about-container" element={<About />} />
          <Route path="#bioit-container" element={<Bioit />} />
          <Route path="#newsletter-container" element={<Newsletter />} />
          <Route path="#career-container" element={<Career />} />
          <Route path="#team-container" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;