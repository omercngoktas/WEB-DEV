import './style.css';
import Contact from "./components/Contact";
import React from "react";

function App() {
  return (
    <div className="contacts">
      <Contact 
        img={require("./images/whiskerson.png")}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img={require("./images/fluffykins.png")}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img={require("./images/felix.png")}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img={require("./images/pumpkin.png")}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
