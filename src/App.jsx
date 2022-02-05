import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "./components/About"
import ColorPicker from "./components/ColorPicker"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="hero">
        <div className="hero-inner">
          <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/ColorPicker" element={<ColorPicker selectedColor={"#000"} Colors={["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"]} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
