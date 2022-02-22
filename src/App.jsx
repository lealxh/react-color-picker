import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "./components/About"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="bgImage">
      <BrowserRouter>
        <NavBar />
        <div className="hero">
          <div className="hero-inner">
            <Routes>
              <Route path="/About" element={<About />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
