import React from "react"
import ReactLogo from "../images/react-logo.png"

function Navbar() {
    return (
        <nav className="nav-class">
            <img src={ReactLogo} className="react-logo"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar