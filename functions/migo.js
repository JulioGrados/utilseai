'use strict'

const axios = require('axios')
const urlMigo = require('config').migo.url
const tokens = require('config').migo.tokens

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const getNamesUser = async dni => {
  const random = getRandomInt(0, tokens.length)
  const token = tokens[random]
  
  console.log(urlMigo + dni + '?token=' + token)
  try {
    const response = await axios(
      {
        method: 'GET',
        url: urlMigo + dni + '?token=' + token
      }
    )
    console.log('response', response)
    const lastName =
      response.data.apellidoPaterno + ' ' + response.data.apellidoMaterno
    const firstName = response.data.nombres
    return { firstName, lastName }
  } catch (error) {
    console.log('errorrrrr', error)
    throw error
  }
}

module.exports = {
  getNamesUser
}
