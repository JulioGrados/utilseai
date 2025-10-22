const { getFullName } = require('./transform')

const payloadToData = payload => {
  return {
    ...payload,
    courseName: payload.course
      ? payload.course.ref
        ? payload.course.ref.name
        : payload.course.name
      : '',
    linkedEmail: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : ''
      : '',
    linkedSearchEmail: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : ''
      : '',
    linkedFirstName: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.firstName
        : ''
      : '',
    linkedLastName: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.lastName
        : ''
      : '',
    linkedLastName: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.lastName
        : ''
      : '',
    linkedMobile: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.mobile
        : ''
      : ''
  }
}

const payloadToGeneralData = payload => {
  return {
    ...payload,
    courseName: payload.course
      ? payload.course.ref
        ? payload.course.ref.name
        : payload.course.name
      : '',
    linkedEmail: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : ''
      : '',
    linkedLinkEmail: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : ''
      : '',
    linkedFirstName: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.firstName
        : ''
      : '',
    linkedLastName: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.lastName
        : ''
      : '',
  }
}

const calculatePromScore = (enrol, typeOfEvaluation) => {
  let isFinished = true
  let note = 0

  if (typeOfEvaluation === 'exams') {
    if (enrol.exams) {
      enrol.exams.forEach(item => {
        if (item.isTaken) {
          note += item.score
        } else {
          isFinished = false
        }
      })
      note = note / enrol.exams.length
    } else {
      isFinished = false
      note = 0
    }
  } else if (typeOfEvaluation === 'tasks') {
    if (enrol.tasks) {
      enrol.tasks.forEach(item => {
        if (item.isTaken) {
          note += item.score
        } else {
          isFinished = false
        }
      })
      note = note / enrol.tasks.length
    } else {
      isFinished = false
      note = 0
    }
  } else {
    enrol.exams.forEach(item => {
      if (item.isTaken) {
        note += item.score
      } else {
        isFinished = false
      }
    })
    enrol.tasks.forEach(item => {
      if (item.isTaken) {
        note += item.score
      } else {
        isFinished = false
      }
    })
    note = note / (enrol.tasks.length + enrols.tasks.length)
  }

  return {
    isFinished,
    note
  }
}

const calculatePromBoth = (exams, tasks) => {
  let isFinished = true
  let note = 0

  if (exams && exams.length && tasks && tasks.length) {
    exams.forEach(item => {
      item.score && (note += item.score)
      if (!item.score || !(item.score > 11)) {
        isFinished = false
      }
    })
    tasks.forEach(item => {
      item.score && (note += item.score)
      if (!item.score || !(item.score > 11)) {
        isFinished = false
      }
    })
    if (note > 0) {
      note = note / (tasks.length + exams.length)
    }
  } else {
    isFinished = false
    note = 0
  }
  return {
    isFinished,
    note
  }
}

const calculateProm = array => {
  let isFinished = true
  let note = 0

  if (array && array.length) {
    array.forEach(item => {
      item.score && (note += item.score)
      if (!item.score || !(item.score > 11)) {
        isFinished = false
      }
    })

    if (note > 0) {
      note = note / array.length
    }
  } else {
    isFinished = false
    note = 0
  }
  return {
    isFinished,
    note
  }
}

module.exports = {
  payloadToData,
  payloadToGeneralData,
  calculatePromScore,
  calculateProm,
  calculatePromBoth
}
