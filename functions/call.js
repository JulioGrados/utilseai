const moment = require('moment')

const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.assigned ? payload.assigned.username : '',
    fullDate: !payload.isCompleted
      ? moment(payload.date)
          .utc()
          .format('YYYY-MM-DD') +
        ' ' +
        payload.hour
      : moment(payload.updatedAt).format('YYYY-MM-DD') +
        ' ' +
        payload.hour
  }
}

const payloadToDataDeal = payload => {
  return {
    ...payload,
    time: payload.date ? moment(payload.date).add(5, 'hours').format('DD/MM/YYYY') : '',
    assignedName: payload.assigned ? payload.assigned.username : '',
    status: payload.deal && payload.deal.status ? payload.deal.status : '',
    stage: payload.deal && payload.deal.progress ? payload.deal.progress.name : '',
    statusPayment: payload.deal && payload.deal.progressPayment ? payload.deal.progressPayment.name : '',
    dealId: payload.deal && payload.deal._id ? payload.deal._id : '',
    email: payload.deal && payload.deal.client ? payload.deal.client ? payload.deal.client.email ? payload.deal.client.email : '' : '' : '',
    mobileCode: payload.deal && payload.deal.client ? payload.deal.client ? payload.deal.client.mobileCode ? payload.deal.client.mobileCode : '' : '' : '',
    mobile: payload.deal && payload.deal.client ? payload.deal.client ? payload.deal.client.mobile ? payload.deal.client.mobile : '' : '' : '',
    firstName: payload.deal && payload.deal.client ? payload.deal.client ? payload.deal.client.firstName ? payload.deal.client.firstName : '' : '' : '',
    lastName: payload.deal && payload.deal.client ? payload.deal.client ? payload.deal.client.lastName ? payload.deal.client.lastName : '' : '' : '',
    assessor: payload.deal && payload.deal.assessor ? payload.deal.assessor ? payload.deal.assessor.username ? payload.deal.assessor.username : '' : '' : '',
    fullDate: !payload.isCompleted
      ? moment(payload.date)
          .utc()
          .format('YYYY-MM-DD') +
        ' ' +
        payload.hour
      : moment(payload.updatedAt).format('YYYY-MM-DD') +
        ' ' +
        payload.hour
  }
}

const getFullDate = call => {
  const singleDate = moment(call.date)
    .utc()
    .format('YYYY-MM-DD')
  const fullDate = singleDate + ' ' + call.hour + ':00'
  return moment(fullDate, 'YYYY-MM-DD HH:mm:ss')
}

const getNewActivityState = call => {
  let statusActivity = ''
  if (!call.isCompleted) {
    const date = getFullDate(call)
    // console.log('------------------------------------------------------------')
    // console.log('date', moment(date).format('YYYY-MM-DD HH:mm:ss'))
    // console.log('------------------------------------------------------------')
    if (moment(date).isBefore(moment().subtract(1, 'days').endOf('day'))) {
      // console.log('------------------------------------------------------------')
      // console.log('entroo 1')
      // console.log('------------------------------------------------------------')
      statusActivity = 'delay'
    } else if (moment(date).isAfter(moment().startOf('day')) && moment(date).isBefore(moment().endOf('day'))) {
      // console.log('------------------------------------------------------------')
      // console.log('entroo 2')
      // console.log('------------------------------------------------------------')
      statusActivity = 'now'
    } else {
      // console.log('------------------------------------------------------------')
      // console.log('entroo 3')
      // console.log('------------------------------------------------------------')
      statusActivity = 'todo'
    }
  } else {
    // console.log('------------------------------------------------------------')
    // console.log('entroo 4')
    // console.log('------------------------------------------------------------')
    statusActivity = 'done'
  }

  return statusActivity
}

module.exports = {
  payloadToData,
  payloadToDataDeal,
  getNewActivityState,
  getFullDate
}
