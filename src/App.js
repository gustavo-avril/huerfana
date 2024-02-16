import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Cabanas from "./components/Cabanas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Slider className="slider" />
          <Intro />
          <Cabanas />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
