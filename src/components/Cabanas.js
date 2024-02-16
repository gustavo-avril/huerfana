import React from 'react';
import '../css/cabanas.css';
import Minigallery from './Minigallery';

function Cabanas() {
  return (
    <div className="content">
      <div className="cabana-right">
        <div className="content-left">
          <h1 className="titulo">Uonquen</h1>
          <ul>
            <li>Cabaña para 2 personas</li>
            <li>1 cama matrimonial</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Uonquen" />
          </div>
        </div>
        <div className="image-right">
          <img src="img/cabanas/uonquen/uonquen1.webp" alt="Cabaña Uonquen" />
        </div>
      </div>
      <div className="cabana-left">
        <div className="image-left">
          <img src="img/cabanas/kamarata/kamarata1.webp" alt="Cabaña Kamarata" />
        </div>
        <div className="content-right">
          <h1 className="titulo">Kamarata</h1>
          <ul>
            <li>Cabaña para 2 personas</li>
            <li>1 cama matrimonial</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Kamarata" />
          </div>
        </div>
      </div>
      <div className="cabana-right">
        <div className="content-left">
          <h1 className="titulo">Parupa</h1>
          <ul>
            <li>Cabaña max 5 personas o solo 1 pareja</li>
            <li>1 cama matrimonial, cama literal y cama individual</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Parupa" />
          </div>
        </div>
        <div className="image-right">
          <img src="img/cabanas/uonquen/parupa1.webp" alt="Cabaña Parupa" />
        </div>
      </div>
      <div className="cabana-left">
        <div className="image-left">
          <img src="img/cabanas/uonquen/kamarata1.webp" alt="Cabaña Kamarata" />
        </div>
        <div className="content-right">
          <h1 className="titulo">Kamarata</h1>
          <ul>
            <li>Cabaña max 4 personas o solo 1 pareja</li>
            <li>2 camas matrimoniales</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/`tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Canaima" />
          </div>
        </div>
      </div>
      <div className="cabana-right">
        <div className="content-left">
          <h1 className="titulo">Kavac</h1>
          <ul>
            <li>Cabaña max 5 personas o solo 1 pareja</li>
            <li>Cama matrimonial, cama litera y cama individual</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Kavac" />
          </div>
        </div>
        <div className="image-right">
          <img src="img/cabanas/uonquen/kavac1.webp" alt="Cabaña Kavac" />
        </div>
      </div>
      <div className="cabana-left">
        <div className="image-left">
          <img src="img/cabanas/uonquen/meru1.webp" alt="Cabaña Merú" />
        </div>
        <div className="content-right">
          <h1 className="titulo">Merú</h1>
          <ul>
            <li>Habitación para 2 personas</li>
            <li>1 cama matrimonial</li>
            <li>Chimenea</li>
            <li>Agua Caliente</li>
            <li>Secador</li>
            <li>Caja de seguridad</li>
            <li>Amenitties</li>
          </ul>
          <div className="button">
            <a href='/tarifas.html'>Ver Tarifas</a>
          </div>
          <div className="galeria">
            <Minigallery cabinName="Meru" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cabanas