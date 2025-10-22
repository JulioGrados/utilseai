'use strict'

const axios = require('axios')
const urlPaycash = require('config').paychash.url
const keys = require('config').paychash.keys
const id = require('config').paychash.id


const paymentPaycash = async (data, token, country) => {
  try {
    const replaceCountry = urlPaycash.replace('pais', country)
    const response = await axios(
      {
        method: 'POST',
        url: replaceCountry + '/reference',
        data: data,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    )

    return response
  } catch (error) {
    console.log('errorrrrr', error)
    throw error
  }
}

const getToken = async (country) => {
  try {
    const keySearch = keys.find(key => key.country === country)
    const replaceCountry = urlPaycash.replace('pais', country)
    const response = await axios(
      {
        method: 'GET',
        url: replaceCountry + '/authre' + '?key=' + keySearch.key
      }
    )

    return response
  } catch (error) {
    // console.log('errorrrrr', error)
    throw error
  }
}

module.exports = {
  paymentPaycash,
  getToken
}
