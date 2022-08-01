import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Test from "./components/Test";


function App() {
    const names= ["alice","bob","charlie","danielle"];
    const capitalizedNames=names.map((name)=>{
        return name[0].toUpperCase() + name.slice(1)
    })
    console.log(capitalizedNames)
    
    
    return (
        <div>
            <Navbar />
            <Hero />            
            <Card 
                img={require("./images/katie-zaferes.png")}
                rating="5.0"
                rewievCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
            <Test />
        </div>
    );
};

export default App;