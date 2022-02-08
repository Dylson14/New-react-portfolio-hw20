import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import About from './components/aboutme'
import Landing from './components/landingpage'

function App() {

    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header-color'>
      <Container>
      <Navbar.Brand href="/">Dylson's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/resume">Resume</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
          </Navbar>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    
</div>
  );
}

export default App;

