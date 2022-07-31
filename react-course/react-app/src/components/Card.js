import React from "react";
// import KatieZaferes from "../images/katie-zaferes.png";
import Star from "../images/star.png"

export default function Card() {
    const imagePath = require("../images/katie-zaferes.png");
    const starImgPath = require("../images/star.png");

    return (
        <div className="card">
            <img src={imagePath} className="card--img"></img>
            <div className="card--stats">
                <img src={starImgPath}/>
                <span>5.0</span>
                <span className="gray">(6) - </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zarefes</p>
            <p><span className="price">From $136</span> / person</p>
        </div>
    );
}