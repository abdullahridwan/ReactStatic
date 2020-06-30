import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import MyNavbar from "./components/MyNavbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App" style={{
      marginLeft: "5%",
      marginRight: "5%"
    }}>
      <MyNavbar />
      <MainContent />
      <Footer />
    </div >
  );
}

export default App;
