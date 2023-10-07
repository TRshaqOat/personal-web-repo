import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import lake from "./assets/lake.jpg";
import meadow from "./assets/meadow.jpg";
import waterfall from "./assets/waterfall.jpg";

function App() {
  const images = [lake, meadow, waterfall];
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
