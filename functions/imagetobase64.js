'use strict'

const fs = require('fs')

const getImagetoBase64 = async url => {
  const image = await fs.readFileSync(url);
  const base64Image = new Buffer.from(image).toString('base64')
  const dataURI = 'data:image/jpeg;base64,' + base64Image
  return dataURI
}

module.exports = {
  getImagetoBase64
}