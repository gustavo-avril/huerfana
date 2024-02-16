import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../img/logo-huerfana.webp';
import facebook from '../img/facebook.webp';
import twitter from '../img/twitter.webp';
import tripadvisor from '../img/tripadvisor.webp';
import instagram from '../img/instagram.webp'

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <div className="grupo">
          <div id="logo">
            <Link to="/"> <img src={logo} alt="Logo" /> </Link>
          </div>
          <div className="redes">
            <div class="instagram">
              <a href="http://www.instagram.com/posadafincalahuerfana" target="_blank" rel="noreferrer">
                <img src={instagram} width="38" height="38" alt="Instagram"/>
              </a>
            </div>
            <div class="facebook">
              <a href="https://www.facebook.com/posadafincalahuerfana/?fref=ts" target="_blank" rel="noreferrer">
                <img src={facebook} width="38" height="38" alt="Facebook"/>
              </a>
            </div>
            <div class="twitter">
              <a href="http://twitter.com/#!/posada_huerfana/" target="_blank" rel="noreferrer">
                <img src={twitter} width="38" height="38" alt="Twitter"/>
              </a>
            </div>
            <div class="tripadvisor">
              <a href="https://www.tripadvisor.com.ve/Hotel_Review-g5982096-d4463002-Reviews-Posada_Finca_la_Huerfana-El_Cobre_Andean_Region.html" target="_blank" rel="noreferrer">
                <img src={tripadvisor} width="38" height="38" alt="Trip Advisor"/>
              </a>
            </div>
          </div>
        </div>
        <nav className="menu nav">
          <ul>
            <li className={window.location.pathname === '/inicio' ? 'active' : ''}>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li className={window.location.pathname === '/tarifas' ? 'active' : ''}>
              <Link to="/tarifas">Tarifas, Servicios y Spa</Link>
            </li>
            <li className={window.location.pathname === '/aves' ? 'active' : ''}>
              <Link to="/aves">Aves</Link>
            </li>
            <li className={window.location.pathname === '/contacto' ? 'active' : ''}>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className={window.location.pathname === '/excursiones' ? 'active' : ''}>
              <Link to="/excursiones">Excursiones</Link>
            </li>
            <li className={window.location.pathname === '/sugerencias' ? 'active' : ''}>
              <Link to="/sugerencias">Sugerencias</Link>
            </li>
            <li className={window.location.pathname === '/faq' ? 'active' : ''}>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;