import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Cabanas from "./components/Cabanas";
import Reception from "./components/Reception";
import Gameroom from "./components/Gameroom";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Tarifas from "./pages/tarifas.js";
import Aves from "./pages/aves.js";
import Contacto from "./pages/contacto.js";
import Sugerencias from "./pages/sugerencias.js";
import Excursiones from "./pages/excursiones.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider className="slider" />
                  <Intro />
                  <Cabanas />
                  <Reception />
                  <Gameroom />
                  <Gallery />
                </>
              }
            />
            <Route path="/" element={<App />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/aves" element={<Aves />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/excursiones" element={<Excursiones />} />
            <Route path="/sugerencias" element={<Sugerencias />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
