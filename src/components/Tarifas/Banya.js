import React from "react";

function Banya(props) {
  return (
    <>
      <span className="subtitle">
        SAUNA{" "}
        <a href="/banya.pdf" target="_blank">
          BANYA
        </a>{" "}
        AL AIRE LIBRE (PREVIA RESERVA, MÍNIMO 2 PERSONAS)
      </span>
      <div className="text">
        <ul>
          <li>EXPERIENCIA ÚNICA QUE INCLUYE:</li>
          <li>ORIENTACIÓN Y GUIA DURANTE LA ACTIVIDAD.</li>
          <li>MERIENDA SALUDABLE.</li>
          <li>HIDRATACIÓN.</li>
          <li>COSTO {props.price} DOLARES POR PARTICIPANTE.</li>
        </ul>
      </div>
    </>
  );
}

export default Banya;
