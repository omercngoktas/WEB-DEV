import './App.css';
import reactpng from "./images/React-icon.svg.png";

function App() {
  return (
    <div>
      <img src={reactpng} alt="Couldn't load the image" width={40} className="image-class"></img>      
      <h1 id="h1-id">Fun facts about React</h1>
      <ul id="ul-id">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
