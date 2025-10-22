const path = require('path')
const config = require('config')
const fs = require('fs')

let SERVER_PATH
if (config.media.env === 'production') {
  SERVER_PATH = '/opt/media/uploads'
} else {
  SERVER_PATH = path.join(__dirname, '../../media/uploads')
}

const portfolioFile = async (fileroot) => {
  try {
    const files = await fs.readdirSync(SERVER_PATH + fileroot)
    return files
  } catch (error) {
    throw error
  }
}

module.exports = {
  portfolioFile
}