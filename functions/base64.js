'use strict'

const pdf2base64 = require('pdf-to-base64')

const getBase64 = async url => {
  try {
    const response = await pdf2base64(encodeURI(url))
    return response
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = {
  getBase64
}
