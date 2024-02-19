import React from "react";
import TarifasCabanas from "../components/Tarifas/TarifasCabanas";
import Banya from "../components/Tarifas/Banya";
import Masajes from "../components/Tarifas/Masajes";
import FireCircle from "../components/Tarifas/FireCircle";
import GameRoom from "../components/Tarifas/GameRoom";
import Aclaratoria from "../components/Tarifas/Aclaratoria";
import Notes from "../components/Tarifas/Notes";
import Policies from "../components/Tarifas/Policies";
import "../css/tarifas.css";

function Tarifas() {
  return (
    <div className="intro">
      <h1 className="title-wrapper">Tarifas</h1>
      {/* Se pasan todos los precios como props para más facilidad a la hora de actualizarlos */}
      <TarifasCabanas parejas={100} meru={80} />

      <div className="green-bg">
        <span className="title">servicios</span>
      </div>
      <Banya price={30} />
      <Masajes massage={30} />
      <FireCircle fire={20} />
      <GameRoom />
      <Aclaratoria />
      <Notes />
      <Policies />
    </div>
  );
}

export default Tarifas;
