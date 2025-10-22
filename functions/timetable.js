const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.linked ? payload.linked.username : '',
    fullDate: moment(payload.date).format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = {
  payloadToData
}
