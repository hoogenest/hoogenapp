import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    
    <Navbar border ="border border-white"bg=" gradient### warning#####" expand="lg" fixed="top" className="dark1 rounded-4" >
      <Container >
        <Navbar.Brand  href="#home"><img
              src="./img/hoogenLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top imgSet"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse in={open} id="basic-navbar-nav">
          <Nav className="me-auto text-center square warning " >
            <Nav.Link onClick={() => setOpen(!open)}className="abu" href="#home">HOME</Nav.Link>
            <Nav.Link onClick={() => setOpen(!open)}className="abu" href="#about">ABOUT</Nav.Link>
            <Nav.Link onClick={() => setOpen(!open)}className="abu"href="#project">PROJECT</Nav.Link>
            <Nav.Link onClick={() => setOpen(!open)}className="abu" href="#contact">CONTACT</Nav.Link>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

