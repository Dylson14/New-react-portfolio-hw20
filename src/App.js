// import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { render } from "react-dom";
import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import About from './components/aboutme'
import Landing from './components/landingpage'
import Navtitle from './components/navbar'
import Resume from './components/resume'
import Projects from './components/projects'
import Contact from './components/contact'


function App() {

    return (
      <div>
          <Navtitle />

        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    
      </div>
  );
}

export default App;

