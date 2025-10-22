const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.assigned ? payload.assigned.username : '',
    linkedName: payload.linked ? payload.linked.names : '',
    templateName: payload.template ? payload.template.name : '',
    fullDate: moment(payload.createdAt).format('YYYY-MM-DD HH:mm:ss')
  }
}

const dataToPayload = data => {
  return {
    assignedName: data.assigned.username || undefined,
    linkedName: data.linked.names || undefined,
    templateName: data.template.name || undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
