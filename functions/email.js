const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.assigned ? payload.assigned.username : '',
    hour: payload.date ? payload.date : '',
    linkedName: payload.linked ? payload.linked.names : '',
    templateName: payload.template ? payload.template.name : '',
    to: payload.to ? payload.to : payload.linked ? payload.linked.ref ? payload.linked.ref.email ? payload.linked.ref.email : '' : '' : '',
    fullDate: moment(payload.createdAt).format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = {
  payloadToData
}
