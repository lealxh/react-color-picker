import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="header">
      <h1>Jose Leal</h1>
      <ul className="nav">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/ColorPicker">Color Picker</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
