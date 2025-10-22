const axios = require('axios')

const getImagetoBase64Axios = async url => {
  try {
    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    })
    const buffer = Buffer.from(response.data, 'binary').toString('base64')
    return buffer
  } catch (error) {
    throw error
  }
}

module.exports = {
  getImagetoBase64Axios
}