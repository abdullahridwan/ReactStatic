import React from "react"
import { Row, Col } from "react-bootstrap"



function MidMain() {
  return (
    <div className="myHome">
      <Row>
        <Col class="col-md-6">
          <div id="midMain-Img">
            <img src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" id="myPic" class="img-responsive fit-image" />
          </div>
        </Col>
        <Col class="col-md-6">
          <h1 id="midMain-title"> React Components </h1>
          <p id="midMain-para"> In this project, I practiced using Parent and Child
          components, modular stylesheets, and getting used to the
          modular aspect of React. Lastly, this was made with react-bootstrap
            which was really fun to learn!</p>
        </Col>
      </Row>
    </div>
  )
}

export default MidMain