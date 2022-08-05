import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

export default function App() {
    const cardComponent = data.map(item => {
        return (
            <Card
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
                locationIcon= "location-icon.png"
            />
        )
    })
    console.log(cardComponent)
    return (
        <div>
            <Navbar src="world-icon.png" title="my travel journal"/>
            {/* <Card
                title= {cardComponent.title}
                location= {cardComponent.location}
                googleMapsUrl= {cardComponent.googleMapsUrl}
                startDate= {cardComponent.startDate}
                endDate= {cardComponent.endDate}
                description= {cardComponent.description}
                imageUrl= {cardComponent.imageUrl}
                locationIcon= "location-icon.png"
            /> */}
            {cardComponent}
            
        </div>
    );
}