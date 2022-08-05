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
            />
        )
    })
    console.log(cardComponent)
    return (
        <div>
            <Navbar src="world-icon.png" title="my travel journal"/>
            <Card
                title= "Mount Fuji"
                location= "Japan"
                googleMapsUrl= "https://goo.gl/maps/1DGM5WrWnATgkSNB8"
                startDate= "12 Jan, 2021"
                endDate= "24 Jan, 2021"
                description= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                imageUrl= "https://source.unsplash.com/WLxQvbMyfas"
                locationIcon= "location-icon.png"
            />
            
        </div>
    );
}