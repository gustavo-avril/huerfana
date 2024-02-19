import React from "react";
import "../css/tarifas.css";

function Tarifas() {
  const parejas = 100;
  const meru = 80;
  const banya = 30;
  const masajeRelajante = 30;
  return (
    <div className="intro">
      <h1 className="title-wrapper">Tarifas</h1>

      <div className="green-bg">
        <span className="title">cabañas</span>
      </div>
      <span className="subtitle">para parejas</span>
      <div className="text">
        <ul>
          <li>
            <strong>PRECIO:</strong> ${parejas} DIARIOS POR PAREJA.
          </li>
          <li>
            <strong>INCLUYE:</strong> TRAGO DE BIENVENIDA, DESAYUNO TIPO BRUNCH,
            CAFÉ PREVIO AL DESAYUNO Y USO DE LAS INSTALACIONES.
          </li>
          <li>(CUALQUIERA DE NUESTRAS CABAÑAS SON PARA PAREJAS)</li>
        </ul>
      </div>
      <hr />
      <span className="subtitle">familiares</span>
      <div className="text">
        <ul>
          <li>
            <strong>PRECIO:</strong> ${parejas / 2} DIARIOS POR PERSONA
          </li>
          <li>
            <strong>CAPACIDAD MÁX.:</strong> 5 PERSONAS CONTANDO LOS NIÑOS
          </li>
          <li>
            <strong>INCLUYE:</strong> TRAGO DE BIENVENIDA, DESAYUNO TIPO BRUNCH,
            CAFÉ PREVIO AL DESAYUNO Y USO DE LAS INSTALACIONES.
          </li>
          <li>
            INFANTES DE 0 HASTA 2 AÑOS NO TENDRÁN RECARGO, A PARTIR DE LOS 3
            AÑOS HASTA LOS 9 AÑOS PAGARAN MEDIA TARIFA ($25) A PARTIR DE LOS 10
            AÑOS EN ADELANTE SE CONSIDERARÁN ADULTOS, ACOMPAÑADOS SIEMPRE POR
            DOS O MÁS ADULTOS EN UNA MISMA CABAÑA. CAPACIDAD MÁX.: 5 PERSONAS
            CONTANDO LOS NIÑOS.
          </li>
        </ul>
      </div>

      <div className="green-bg">
        <span className="title">habitacion meru</span>
      </div>
      <span className="subtitle">para parejas</span>
      <div className="text">
        <ul>
          <li>
            <strong>PRECIO:</strong> ${meru} DIARIOS POR PAREJA
          </li>
          <li>
            <strong>INCLUYE:</strong> TRAGO DE BIENVENIDA, DESAYUNO TIPO BRUNCH,
            CAFÉ PREVIO AL DESAYUNO Y USO DE LAS INSTALACIONES.
          </li>
        </ul>
      </div>

      <div className="green-bg">
        <span className="title">servicios</span>
      </div>
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
    </div>
  );
}

export default Tarifas;
