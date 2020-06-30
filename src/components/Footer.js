import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"


function Footer() {
  return (
    <div style={{ marginTop: "1%" }}>
      <Navbar expand="lg" style={{ backgroundColor: "#4FCC64" }}>

        <Navbar.Brand style={{ color: "white", fontSize: "15px" }}>Follow me on Github!</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Footer