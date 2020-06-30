import React from "react"
import Button from 'react-bootstrap/Button';
/*
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
*/
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function MyNavbar() {
  return (
    <Navbar style={{ backgroundColor: "#4FCC64" }} expand="lg">
      <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>React-Practice</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}

export default MyNavbar