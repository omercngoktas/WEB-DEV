import React from "react";
// import KatieZaferes from "../images/katie-zaferes.png";
import Star from "../images/star.png"

export default function Card(props) {
    const starImgPath = require("../images/star.png");

    return (
        <div className="card">
            <img src={props.img} className="card--img"></img>
            <div className="card--stats">
                <img src={starImgPath}/>
                <span>{props.rating}</span>
                <span className="gray">({props.rewievCount}) - </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="price">From ${props.price}</span> / person</p>
        </div>
    );
}