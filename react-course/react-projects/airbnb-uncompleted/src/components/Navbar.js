import React from "react";
import airbnb from "../images/airbnb.png";
// import "../App.css";

function Navbar() {
    return (
        <nav className="nav-class">
            <img src={airbnb} className="nav--img"></img>
        </nav>
    );
}

export default Navbar;