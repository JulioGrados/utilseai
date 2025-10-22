const templateReceipt = (body) => {
  return `Saludos ${body.firstName}
      <br><br>
      Se adjunta ${body.type} de Venta Electrónica Nro. ${body.code}.
      <br>
      Recuerde que para cualquier consulta administrativa puedes escribirnos a cursos@eai.edu.pe donde será un gusto atender sus consultas.
      <br><br>
      Gracias.
      <br><br>
      --
      <br>
      Atte.
      <br>
      Área Comercial
      <br>
      Escuela Americana de Innovación
      <br>
      Teléfono: (01)4800022
      <br>
      WhatsApp: https://wa.me/5114800022
      <br>
      Calle Las Camelias 877, Oficina 302 - San Isidro - Lima`
}

module.exports = {
  templateReceipt
}
