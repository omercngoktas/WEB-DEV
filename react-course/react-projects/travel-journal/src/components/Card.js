import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--main--img">
                <img className="card--img" src={props.imageUrl} />         
            </div>
            <div className="card--components">
                <div className="location--title">
                    <img className="card--location--img" src={require(`../images/${props.locationIcon}`)}/>
                    <h4 className="location--text">{props.location}</h4>
                    <a href={props.googleMapsUrl} className="google--maps" target="_blank">View on Google Maps</a>
                </div>
                <div className="card--title">
                    <h1>{props.title}</h1>
                </div>
                <div className="card--date">
                    <h5>{props.startDate}&nbsp;-&nbsp;</h5>
                    <h5>{props.endDate}</h5>
                </div>
                <div className="card--description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    );
}


            