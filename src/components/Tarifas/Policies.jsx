import React from "react";

function Policies(){
  return(
    <>
      <div className="green-bg">
        <span className="title">políticas de pago y cancelación</span>
      </div>

      <span className="subtitle">políticas de pago</span>
      <div className="text">
        <ul>
          <li>Para garantizar la reserva tendrá que realizar el abono del 100% del total en nuestra Cuenta Bancaria que se le enviara a su correo o teléfono, previa verificación de disponibilidad.</li>
          <li>Infantes de 0 hasta 2 años no tendrán recargo, a partir de los 3 años hasta los 9 años pagaran media tarifa, a partir de los 10 años en adelante se considerarán adultos, acompañados siempre por dos o más adultos en una misma cabaña.</li>
        </ul>
      </div>

      <span className="subtitle">políticas de cancelación</span>
      <div className="text">
        <ul>
          <li>En caso de cancelación notificada a partir de 3 días antes de la llegada el monto pagado no será reembolsado, pero podrá ser utilizado como crédito para una futura reserva en el lapso de 6 meses.</li>
          <li>Las tarifas pueden variar y están sujetas a disponibilidad. Cualquier notificación fuera de estos lapsos no tendrá derecho a crédito.</li>
          <li>En caso de no aparecer (no show), llegadas tardías (late arrivals) o salida anticipadas (early departures) el monto pagado no será reembolsado y no podrá ser utilizado como crédito para una futura reserva.</li>
          <li>El precio de nuestros servicios incluye los elementos ofrecidos en nuestros paquetes, la no utilización por decisión del cliente de alguno de esos servicios durante su estadía, no dará derecho a reembolso.</li>
          <li>Nuestras tarifas están sujetas a cambios sin previa notificación.</li>
          <li>Queda entendido que una vez usted realice su reservación, estará aceptando las condiciones de cancelación de nuestra empresa.</li>
          <li><strong>NOTA:</strong> Si Usted notifica la cancelacion de su reserva el mismo dia de su llegada debido a algun imprevisto, el dinero sera acreditado a su favor para una proxima visita a nuestra posada si logramos ocupar nuevamente la cabaña o habitacion que le habiamos asignado.</li>
        </ul>
      </div>
    </>
  );
}

export default Policies;