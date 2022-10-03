import React from "react";
import ProductCard from "./components/ProductCard";
import "./style.css";
import productData from "./static/json/products.json";

export default function App() {
  const cardComponent = productData.data.products.map(item =>{
    return (
      <ProductCard
        title = {item.title}
        price = {item.price}
        image = {item.sku}
      />
    )
  })

  return (
    <div>
      {cardComponent}
    </div>
  )
}