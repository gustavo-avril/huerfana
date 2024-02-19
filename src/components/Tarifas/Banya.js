import React from "react";

function Banya() {
  const banya = 30;
  return (
    <>
      <span className="subtitle">
        SAUNA{" "}
        <a href="" target="_blank">
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
          <li>COSTO {banya} DOLARES POR PARTICIPANTE.</li>
        </ul>
      </div>
    </>
  );
}

export default Banya;
