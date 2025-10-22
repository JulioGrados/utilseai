const path = require('path')
const config = require('config')
const fs = require('fs')

let SERVER_PATH
if (config.media.env === 'production') {
  SERVER_PATH = '/opt/media/uploads'
} else {
  SERVER_PATH = path.join(__dirname, '../../media/uploads')
}


const pdfbs64 = async (pdf_url) => {
  const fileroot = SERVER_PATH + '/certificates/free/' + pdf_url
  try {
    const image = await fs.readFileSync(fileroot)
    const base64Image = new Buffer.from(image).toString('base64')
    return base64Image
  } catch (error) {
    throw error
  }
}

module.exports = {
  pdfbs64
}
