import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="header">
      <h1>Color Picker</h1>
      <ul className="nav">
        <li></li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
