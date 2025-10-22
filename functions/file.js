const path = require('path')
const config = require('config')
const fs = require('fs').promises

let SERVER_PATH
if (config.media.env === 'production') {
  SERVER_PATH = '/opt/media/uploads'
} else {
  SERVER_PATH = path.join(__dirname, '../../media/uploads')
}


const filePdf = async (pdf_base64, voucher_id) => {
  const fileroot = '/receipts/' + voucher_id + '.pdf'
  try {
    await fs.writeFile(SERVER_PATH + fileroot, pdf_base64, { encoding: 'base64' })
    return fileroot
  } catch (error) {
    throw error
  }
}

module.exports = {
  filePdf
}
