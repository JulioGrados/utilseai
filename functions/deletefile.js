const path = require('path')
const config = require('config')
const fs = require('fs')

let SERVER_PATH
if (config.media.env === 'production') {
  SERVER_PATH = '/opt/media/uploads'
} else {
  SERVER_PATH = path.join(__dirname, '../../media/uploads')
}


const deletefile = async (pdf_url, url) => {
  const fileroot = SERVER_PATH + url + pdf_url
  try {
    const image = await fs.unlinkSync(fileroot)
    return image
  } catch (error) {
    throw error
  }
}

module.exports = {
  deletefile
}
