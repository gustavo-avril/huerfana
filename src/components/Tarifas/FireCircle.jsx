import React from "react";

function FireCircle(props) {
  return(
    <>
      <span className="subtitle">Círculo de fuego</span>
      <div className="text">
        <ul>
          <li>COSTO POR GRUPO ${props.fire} DOLARES.</li>
          <li>INCLUYE 1 BOTELLA DE VINO.</li>
        </ul>
      </div>

    </>
  );
}

export default FireCircle;