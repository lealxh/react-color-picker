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
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/ColorPicker" element={<ColorPicker />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
