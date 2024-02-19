import React from "react";

function Notes() {
  return(
    <>
      <div className="green-bg">
        <span className="title">notas</span>
      </div>

      <div className="text">
        <ul>
          <li>Las cabañas no tienen cocina.</li>
          <li>No esta permitido el uso de electrodomésticos (microondas, planchas, hornillas eléctricas, licuadoras, etc).</li>
          <li>Las cabañas familiares no tienen habitaciones separadas.</li>
          <li>Las cabañas tienen chimenea.</li>
          <li>Niños menores de 2 años gratis.</li>
          <li>Las propinas no están incluidas.</li>
          <li>Horario de comedor: desayunos desde las 9 AM hasta las 11 AM.</li>
          <li>Estacionamiento privado.</li>
          <li>Hora de ENTRADA (Check-in) 3:00 p.m.</li>
          <li>Hora de SALIDA (Check-out) 12:00 m.</li>
          <li>Trabajamos con transferencias bancarias y depósitos.</li>
          <li>Servicio personalizado hasta las 9PM.</li>
        </ul>
      </div>
    </>
  );
}

export default Notes;