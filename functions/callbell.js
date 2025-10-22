'use strict'

const axios = require('axios')
const url = require('config').callbell.url
const token = require('config').callbell.token


const sendCallbell = async (data) => {
  try {
    const response = await axios(
      {
        method: 'POST',
        url: url,
        data: data,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    console.log('error', error.response.data)
    throw error
  }
}

module.exports = {
  sendCallbell
}
