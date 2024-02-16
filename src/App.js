import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Cabanas from "./components/Cabanas";
import Reception from "./components/Reception";
import Gameroom from "./components/Gameroom";
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
          <Reception />
          <Gameroom />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
