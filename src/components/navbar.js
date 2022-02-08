import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function Navtitle() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header-color'>
        <Container>
          <Navbar.Brand href="/">Dylson's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link to="/resume" className="nav-padding">Resume</Link>
              <Link to="/about" className="nav-padding">About Me</Link>
              <Link to="/projects" className="nav-padding">Projects</Link>
              <Link to="/contact" className="nav-padding">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
    )
}


