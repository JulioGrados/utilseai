const templateCertificate = (body) => {
  return `<div style="font-family: inherit; text-align: inherit">
    Saludos estimado(a) <strong>${body.nombre}</strong><br>
    <br>
    Es un gusto saludarle y a la vez felicitarle por su interés en adquirir nuevas competencias y crecer profesionalmente. A continuación le brindamos la información relacionada al inicio de nuestro <strong>${body.curso}</strong>.<br>
    <br>
    <strong>Información:</strong><br><br>
    <ul>
      <li>Fecha de inicio: <strong>Consultar a la asesora.</strong>.<br></li>
      <li>Precio normal: <strong>S/ ${body.precio}</strong>.<br></li>
      <li>Precio especial 🎁: Responde rápido a este correo para brindarte un <strong>descuento especial</strong>.<br></li>
      <li>Modalidad: 100% virtual.<br></li>
      <li>Certificado: Por <strong>${body.horas}</strong> horas académicas, con envío hasta la puerta de su casa.<br></li>
    </ul>
    <br>
    <strong>Formas de pago:</strong><br><br>
    <ul>
      <li>Banco de Crédito del Perú BCP: Puede realizar el pago a nuestra Cuenta Corriente BCP Soles 570-2495897-0-53 desde cualquier oficina, agente o internet. También puede depositarnos desde otros bancos usando el CCI (Código de cuenta interbancario) 00257000249589705305.<br></li>
      <li>BBVA Banco Continental: Puede realizar el pago a nuestra Cuenta Corriente BBVA Banco Continental Soles 0011-0249-0100176224-02 desde cualquier oficina, agente o internet.<br></li>
      <li>PayPal.<br></li>
      <li>Una vez realizado deberá enviarnos una foto o escaneo del voucher al WhatsApp <a target="_blank" href="https://wa.me/51987184188">https://wa.me/51987184188</a> o al correo <a href="mailto:cursos@eai.edu.pe" title="cursos@eai.edu.pe">cursos@eai.edu.pe</a>.<br></li>
    </ul>
    <br>
    <strong>Testimonios de estudiantes:</strong><br><br>
    <ul>
      <li>Plataforma: <a href="https://www.eai.edu.pe/testimonios/">https://www.eai.edu.pe/testimonios</a>.<br></li>
      <li>Facebook: <a href="https://www.facebook.com/eainnovacion/reviews">https://www.facebook.com/eainnovacion/reviews</a>.<br></li>
    </ul>
    <br>
    <strong>Consultas:</strong> Para cualquier consulta puede llamarnos al <a href="tel:51987184188">51987184188</a>, escribirnos al WhatsApp <a target="_blank" href="https://wa.me/51987184188?text=Hola, deseo información del curso">https://wa.me/51987184188</a> o enviarnos un correo electrónico a <a href="mailto:cursos@eai.edu.pe" target="_blank">cursos@eai.edu.pe</a>.<br>
    <strong>Brochure:</strong> Adjuntamos brochure solicitado.<br>
    <strong>Catálogo de cursos:</strong> <a href="https://www.eai.edu.pe/cursos/" title="https://www.eai.edu.pe/cursos/">https://www.eai.edu.pe/cursos/</a><br>
    <br>
    --<br>
    Atte.<br>
    Área Comercial<br>
    Escuela Americana de Innovación<br>
    WhatsApp: <a target="_blank" href="https://wa.me/51987184188?text=Hola, deseo información del curso">https://wa.me/51987184188</a><br>Calle Las Camelias 877, Oficina 302 - San Isidro - Lima
  </div>`
}

module.exports = {
  templateCertificate
}

