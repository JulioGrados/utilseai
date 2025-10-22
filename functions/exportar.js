const payloadToData = payload => {
  return {
    username: payload.username,
    email: payload.email,
    nombres: payload.firstName,
    apellidos: payload.lastName,
    dni: payload.dni,
    celular: payload.mobile
  }
}

module.exports = {
  payloadToData
}