/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../style.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <img src={require(`../images/${props.src}`)} className="navbar--icon"></img>
            <h1 className="navbar--title">
                {props.title}
            </h1>
        </nav>
    );
}