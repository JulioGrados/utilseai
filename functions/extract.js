'use strict'

const extract = require('extract-zip')

const getExtract = async source => {
  try {
    const response = await extract(source, { dir: target })
    return response
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = {
  getExtract
}
