import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './components.css'


const NavigationBar = () => (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about" className="nav-link">About</Nav.Link>
      <Nav.Link href="/skills" className="nav-link">Skills</Nav.Link>
      <Nav.Link href="/surprise" className="nav-link">Surprise</Nav.Link>
    </Nav>
  </Navbar>
)

export default NavigationBar;
