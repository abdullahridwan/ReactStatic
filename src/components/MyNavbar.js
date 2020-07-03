import React from "react"
import Button from 'react-bootstrap/Button';
/*
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
*/
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function MyNavbar() {
  return (
    <Router>
      <Navbar style={{ backgroundColor: "#4FCC64" }} expand="lg">
        <Nav.Link href="#link">Link</Nav.Link>

      </Navbar>
    </Router>

  )
}

export default MyNavbar



/*
    <Navbar style={{ backgroundColor: "#4FCC64" }} expand="lg">
      <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>React-Practice</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    */