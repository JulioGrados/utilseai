const axios = require('axios')

const downloadAudio = async (url) => {
  try {
    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    })
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  downloadAudio
}