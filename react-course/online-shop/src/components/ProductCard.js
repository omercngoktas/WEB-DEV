import React from "react";
import Card from "react-bootstrap/Card";
import "../style.css"; 

export default function productCard(props) {
    return (
        <Card className="card--class">
            <img src={require("../static/products/"+ props.image +"-1-product.webp")} className="image--class"></img>
            <h4 className="title--class">{props.title}</h4>
            <div className="basket--class">
                <h5 className="basket--text">In the basket</h5>
                <h3 className="price--class">${props.price}</h3>
            </div>
        </Card>
    );
}













// import React from "react";
// import Card from "react-bootstrap/Card";
// import image1 from "../static/products/10547961582846888-1-product.webp";
// import "../style.css"; 

// export default function productCard() {
//     return (
//         <Card className="card--class">
//             <img src={image1} className="image--class"></img>
//             <h4 className="title--class">Cropped Stay Groovy off white</h4>
//             <div className="basket--class"><h5>In the basket</h5><h3>$10.9</h3></div>
//         </Card>
//     );
// }