import React from "react"
import TopMain from "./TopMain"
import MidMain from "./MidMain"
import "./MainContent.css"

function MainContent() {
  return (
    <div className="home">
      <TopMain />
      <MidMain />
    </div>
  )
}


export default MainContent