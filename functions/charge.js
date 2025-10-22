const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    linkedEmail: payload.linked ? payload.linked.ref ? payload.linked.ref.email : payload.linked.email : '',
    linkedFirstName: payload.linked ? payload.linked.ref ? payload.linked.ref.firstName : payload.linked.names : '',
    linkedLastName: payload.linked ? payload.linked.ref ? payload.linked.ref.lastName : payload.linked.names : '',
    assignedName: payload.assigned ? payload.assigned.username : '',
    fullDate:  moment(payload.startDate).utc().subtract(5, 'hours').format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = {
  payloadToData
}
