import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} />            
            <div className="location--title">
                <img className="card--location--img" src={require(`../images/${props.locationIcon}`)}/>
                <h4>{props.location}</h4>
                <a href="www.google.com" className="google--maps">View on Google Maps</a>
            </div>
        </div>

    );
}



            