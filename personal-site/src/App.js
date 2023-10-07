import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./src/CoolThings/ImageCarousel.js";
import InfoBar from "/Users/achyutpatel/Documents/GitHub/personal-web-repo/personal-site/src/CoolThings/InfoBar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageCarousel />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
