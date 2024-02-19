import React from "react";
import TarifasCabanas from "../components/Tarifas/TarifasCabanas";
import Banya from "../components/Tarifas/Banya";
import Masajes from "../components/Tarifas/Masajes";
import "../css/tarifas.css";

function Tarifas() {
  return (
    <div className="intro">
      <h1 className="title-wrapper">Tarifas</h1>

      <TarifasCabanas />

      <div className="green-bg">
        <span className="title">servicios</span>
      </div>
      <Banya />
      <Masajes />
    </div>
  );
}

export default Tarifas;
