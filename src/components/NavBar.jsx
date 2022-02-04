import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="header">
      <h1>Jose Leal</h1>
      <ul className="nav">
        <li>
          <Link To="/Home">Home</Link>
        </li>
        <li>
          <Link To="/About">About</Link>
        </li>
        <li>
          <Link To="/ColorPicker">Color Picker</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
