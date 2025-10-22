const { getFullName } = require('./transform')

const payloadToData = payload => {
  return {
    ...payload,
    courseName: payload.course
      ? payload.course.ref
        ? payload.course.ref.name
        : payload.course.shortName
      : '',
    linkedName: payload.linked ? getFullName(payload.linked) : '',
    linkedEmail: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : ''
      : '',
    agreementName: payload.agreement ? payload.agreement.ref ? payload.agreement.ref.institution : payload.agreement.institution : ''
  }
}

const dataToPayload = data => {
  return {
    code: data.code,
    shortCode: data.shortCode,
    score: data.score,
    date: data.date,
    emission: data.emission,
    file1: data.file1,
    file2: data.file2,
    course: data.course
      ? {
        shortName: data.course.shortName || undefined,
        academicHours: data.course.academicHours || undefined,
        ref: data.course.ref || undefined,
      }
      : undefined,
    linked: data.linked
      ? {
        firstName: data.linked.firstName || undefined,
        lastName: data.linked.lastName || undefined,
        ref: data.linked.ref || undefined,
      }
      : undefined,
    agreement: data.agreement
      ? {
          institution: data.agreement.institution || undefined,
          ref: data.agreement._id || data.agreement.ref || undefined
        }
      : undefined,
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
