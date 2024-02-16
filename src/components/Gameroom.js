import React from "react";
import "../css/sections.css";

function Gameroom() {
  return (
    <>
      <div className="title-wrapper">
        <h1>Salon de Usos Multiples</h1>
      </div>

      <div className="gallery">
        <img src="img/salon/salon1.webp" alt="Recepcion Fachada" />
        <img src="img/salon/salon2.webp" alt="Recepcion Interior" />
        <img src="img/salon/salon3.webp" alt="Recepcion Interior" />
        <img src="img/salon/salon4.webp" alt="Recepcion Interior" />
        <img src="img/salon/salon5.webp" alt="Recepcion Interior" />
        <img src="img/salon/salon6.webp" alt="Recepcion Interior" />
      </div>
    </>
  );
}

export default Gameroom;
