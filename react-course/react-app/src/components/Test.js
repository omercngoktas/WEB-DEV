import React from "react";

export default function Test() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Black"];
    const jsxColors = colors.map((color)=>{
        return `<h3>${color}</h3>`
    })

    return (
        <div>
            {jsxColors};
        </div>
    );
}