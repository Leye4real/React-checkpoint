import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Navbar, Nav, Card, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <React.Fragment>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
    </React.Fragment>
  );
};


export default MyNavbar
