const payloadToData = payload => {
  return {
    ...payload,
    linked: payload.linked
      ? payload.linked.ref
        ? {
            username: payload.linked.ref.username || undefined,
            dni: payload.linked.ref.dni || undefined,
            firstName: payload.linked.ref.firstName || undefined,
            lastName: payload.linked.ref.lastName || undefined,
            email: payload.linked.ref.email || undefined,
            rate: payload.linked.ref.department || undefined,
            city: payload.linked.ref.city || undefined,
            ref: payload.linked.ref._id || undefined
          }
        : undefined
      : undefined,
    names: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.firstName + ' ' + payload.linked.ref.lastName
        : ''
      : '',
    emails: payload.linked
      ? payload.linked.ref
        ? payload.linked.ref.email
        : payload.linked.email
      : '',
    name: payload.linked
    ? payload.linked.ref
      ? payload.linked.ref.firstName
      : payload.linked.firstName
    : '',
    last: payload.linked
    ? payload.linked.ref
      ? payload.linked.ref.lastName
      : payload.linked.lastName
    : '',
    nameCourse: payload.course
      ? payload.course.ref
        ? payload.course.ref.name
        : payload.course.name
      : ''
  }
}

const dataToPayload = data => {
  return {
    firstName: data.linked ? data.linked.firstName || undefined : '',
    lastName: data.linked ? data.linked.lastName || undefined : '',
    dni: data.linked ? data.linked.dni || undefined : '',
    city: data.linked ? data.linked.city || undefined : '',
    department: data.linked ? data.linked.department || undefined : '',
    linked: data.linked
      ? data.linked.ref
        ? {
            ref: data.linked.ref || undefined
          }
        : undefined
      : undefined,
    rate: data.rate || undefined,
    moodleId: data.moodleId || undefined,
    status: data.status || undefined,
    comment: data.comment || undefined,
    course: data.course
      ? {
          name: data.course.name || undefined,
          slug: data.course.slug || undefined,
          ref: data.course.ref || undefined,
          category: data.course.category
            ? {
                name: data.course.category.name || undefined,
                ref: data.course.category.ref || undefined
              }
            : undefined
        }
      : undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
