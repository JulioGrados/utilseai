const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.assigned ? payload.assigned.username : '',
    linkedName: payload.linked ? payload.linked.names : '',
    fullDate: moment(payload.createdAt).format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = {
  payloadToData
}
