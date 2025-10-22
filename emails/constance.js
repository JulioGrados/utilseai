const templateConstance = (firstName, course) => {
  return `Saludos ${firstName}
      <br><br>
      Felicitaciones por aprobar el Curso de ${course}, a continuación le adjuntamos el certificado digital correspondiente.
      <br>
      Nota: Si los nombres y apellidos difieren de como se muestran en su documento de identidad por favor indíquenos respondiendo este correo para poder hacer la verificación.
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
  templateConstance
}
