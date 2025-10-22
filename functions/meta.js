const moment = require('moment')
moment.locale('es')

const payloadToData = payload => {
  return {
    ...payload
  }
}

const dataToPayload = data => {
  return {
    domain: data.domain || undefined,
    title: data.title || undefined,
    description: data.description || undefined,
    address: data.address || undefined,
    phone: data.phone || undefined,
    fb: data.fb || undefined,
    tw: data.tw || undefined,
    og: data.og || undefined,
    themeColor: data.themeColor || undefined,
    pages: data.pages || undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
