import React from "react"
import { Row, Col } from "react-bootstrap"

function TopMain() {
  return (
    <div className="myHome" style={{ marginTop: "1%" }}>
      <Row>
        <Col class="col-md-6">
          <h1 id="myHome-title"> React App Static </h1>
        </Col>
        <Col class="col-md-6">
          <div id="midMain-Img">
            <img src="/r.jpg" id="myPic" class="img-responsive fit-image" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TopMain