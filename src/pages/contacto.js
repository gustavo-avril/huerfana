import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

function contacto() {
  return (
    <>
      <div className="intro">
        <div className="text">
          <ul>
            <li>
              Para Reservaciones: 0424-720-7950.{" "}
              <FontAwesomeIcon icon={faPhone} size="lg" className="telephone" />{" "}
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                className="whatsapp"
              />{" "}
              <FontAwesomeIcon
                icon={faTelegram}
                size="lg"
                className="telegram"
              />{" "}
              o
            </li>
            <li>
              0424-737-7031 (sólo Whatsapp){" "}
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                className="whatsapp"
              />{" "}
            </li>
            <li>
              Horario de atención desde las 8am a 12pm y de 2pm a 6pm, sábados
              de 9am a 12pm
            </li>
            <li>Coordenadas GPS: N07º59'27” W072º04'03”</li>
            <li>
              Ubícanos en Google{" "}
              <a
                href="https://goo.gl/maps/S7nB5GzLsZyLgraE8"
                target="_blank"
                rel="noreferrer"
              >
                Maps
              </a>
            </li>
            <li>Email: lahuerfana@hotmail.com</li>
            <li>
              Dirección: Aldea Río Arriba, Carretera Trasandina, Municipio José
              María Vargas.
            </li>
            <li>
              Páramo El Zumbador a 5 kms. del poblado del Cobre Estado Táchira -
              Venezuela
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default contacto;
