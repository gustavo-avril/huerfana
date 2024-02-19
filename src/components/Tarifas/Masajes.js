import React from "react";

function Masajes() {
  const masajeRelajante = 30;
  return (
    <>
      <span className="subtitle">
        SERVICIO DE MASAJE RELAJANTE Y ANTIESTRESS QUE INCLUYE: (PREVIA RESERVA)
      </span>
      <div className="text">
        <ul>
          <li>HIDRATACIÓN FACIAL Y CORPORAL.</li>
          <li>ACEITES ESENCIALES.</li>
          <li>DURACIÓN 45 MINUTOS.</li>
          <li>COSTO {masajeRelajante} DOLARES POR PARTICIPANTE.</li>
        </ul>
      </div>
    </>
  );
}

export default Masajes;
