'use strict'

const axios = require('axios')
const url = require('config').dlocal.url
const apikey = require('config').dlocal.apikey
const secretkey = require('config').dlocal.secretkey


const paymentDlocal = async (data) => {
  try {
    const response = await axios(
      {
        method: 'POST',
        url: url + '/v1/payments',
        data: data,
        headers: {
          'Authorization': 'Bearer ' + apikey + ':' + secretkey,
          'Accept': 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    throw error
  }
}

const getPaymentDlocal = async (id) => {
  try {
    const response = await axios(
      {
        method: 'GET',
        url: url + '/v1/payments/' + id,
        headers: {
          'Authorization': 'Bearer ' + apikey + ':' + secretkey,
          'Accept': 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  paymentDlocal,
  getPaymentDlocal
}
