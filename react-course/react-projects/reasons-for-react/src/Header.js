import React from "react"
import reactpng from "./images/React-icon.svg.png";

function Header() {
    return (
        <header>
        <nav className='nav'>
          <img src={reactpng} className="react-logo"></img>
          <ul className='ul-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header