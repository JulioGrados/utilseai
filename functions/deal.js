const payloadToData = payload => {
  const courses = []
  payload.students && payload.students.forEach(s => {
    s.courses.forEach(c => {
      if (!courses.includes(c.name)) {
        courses.push(c.name)
      }
    })
  })
  return {
    ...payload,
    identifier: payload._id ? payload._id.toString() : '',
    hour: payload.createdAt ? payload.createdAt : '',
    names:
      payload.client &&
      payload.client.firstName + ' ' + payload.client.lastName,
    firstName: payload.client && payload.client.firstName,
    lastName: payload.client && payload.client.lastName,
    email: payload.client && payload.client.email,
    reasign: payload.reasign ? payload.reasign : 0,
    mobile: payload.client && payload.client.mobile,
    assigned: payload.assessor && payload.assessor.username,
    progressName: payload.progress && payload.progress.name,
    progressPaymentName: payload.progressPayment
      ? payload.progressPayment.name
      : 'No tiene',
    ref: undefined,
    coursesNames: courses ? courses.join(', ') : ''
  }
}

module.exports = {
  payloadToData
}
