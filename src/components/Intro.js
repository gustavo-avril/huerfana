import React from 'react';
import '../css/intro.css';
import circuito from '../img/logos/circuito.webp';
import fondonorma from '../img/logos/fondonorma.webp';
import huerfana from '../img/logos/huerfana.webp';

function Intro() {
  return (
    <div className="intro">
      <h1>Posada La Huérfana</h1>
      <p>Hospedarse en la Posada Finca La Huérfana es el modo más auténtico de disfrutar la naturaleza. Está situada a una altura de 2.300 m.s.n.m. en la región de los andes Tachirenses, Venezuela, uno de los reservorios de naturaleza virgen más ricos de nuestra cordillera. Entre el páramo Zumbador y El Cobre, rodeada de hermosas montañas atravesadas por el río El Valle y el manantial La Huérfana, la construcción de cabañas en madera y piedra cuenta con instalaciones muy confortables y la atención personalizada. Es el sitio ideal para descansar, realizar diversas excursiones, observación de aves, trekking, ciclismo de montaña, conocer pueblos típicos, visitar museos, iglesias, adicionalmente a esto la posibilidad de conocer y adentrarse en el mundo de las cosechas de hortalizas y en el cultivo de flores.</p>
      <div className="logos">
        <img src={huerfana} alt="Logo de la Huerfana" width="200" />
        <img src={fondonorma} alt="Certificado Fondo Norma" width="153" />
        <a href='www.circuitodelaexcelencia.com' target='_blank' rel='noopener noreferrer'>
          <img src={circuito} alt="Logo del Circuito de la Excelencia" width="155" />
        </a>
      </div>
    </div>
  )
}

export default Intro