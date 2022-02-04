import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "./components/About"
import ColorPicker from "./components/ColorPicker"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="hero">
        <div className="hero-inner">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/ColorPicker" element={<ColorPicker selectedColor={"white"} Colors={["#ff1744", "#d500f9", "#00b0ff", "#00e676", "#ffea00"]} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
