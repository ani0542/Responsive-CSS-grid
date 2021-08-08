import React from 'react'
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Pages/Navbar"
import Header from "./Pages/Header";
import Boxes from "./Pages/Boxes"
import Info from "./Pages/Info"
import Footer from "./Pages/Footer"
// import "./styles/main.css"
import "./styles/main.css";

function App() {
  return (
    <>
          <div className='wrapper'>
                   <Navbar/>
                   <Header/>
                   <Boxes/>
                   <Info/>
                   <Portfolio/>
                   <Footer/>     
          </div>
 
    </>
  )
}

export default App
