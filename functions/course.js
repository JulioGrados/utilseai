const moment = require('moment')
moment.locale('es')

const payloadToData = payload => {
  const teacher = payload.teachers && payload.teachers[0]
  const teacherName = teacher && teacher.names
  const teacherDescription = teacher && teacher.description

  return {
    ...payload,
    opengraph: payload.opengraph ? payload.opengraph : '',
    teacherName,
    teacherDescription,
    categoryName: payload.category && payload.category.name,
    authorName: payload.author && payload.author.username,
    agreementName: payload.agreement && payload.agreement.institution,
    startCourse: moment()
      .add(7, 'days')
      .format('LL'),
    teachersNames:
      payload.teachers && payload.teachers.map(item => item.username).join(', ')
  }
}

const dataToPayload = data => {
  // console.log(data)
  return {
    name: data.name || undefined,
    slug: data.slug || undefined,
    shortName: data.shortName || undefined,
    content: data.content || undefined,
    isFree: data.isFree || false,
    isForo: data.isForo || false,
    isConfirmation: data.isConfirmation || false,
    isHidden: data.isHidden || false,
    numberEvaluation: data.numberEvaluation || undefined,
    typeOfEvaluation: data.typeOfEvaluation || undefined,
    price: data.price || undefined,
    discount: data.discount || undefined,
    moodleId: data.moodleId || undefined,
    brochure: data.brochure || undefined,
    brochures: data.brochures || undefined,
    published: data.published || undefined,
    migrateMod: data.migrateMod || undefined,
    migrateCert: data.migrateCert || undefined,
    migrateTesty: data.migrateTesty || undefined,
    academicHours: data.academicHours || undefined,
    description: data.description || undefined,
    descriptionGeneral: data.descriptionGeneral || undefined,
    priceOffert: data.priceOffert || undefined,
    image: data.image || undefined,
    shortimage: data.shortimage || undefined,
    opengraph: data.opengraph || undefined,
    titleSEO: data.titleSEO || undefined,
    descriptionSEO: data.descriptionSEO || undefined,
    percentageTeacher: data.percentageTeacher || undefined,
    category: data.category
      ? {
          name: data.category.name,
          slug: data.category.slug,
          ref: data.category._id || data.category.ref || undefined
        }
      : undefined,
    author: data.author
      ? {
          username: data.author.username || undefined,
          ref: data.author._id || data.author.ref || undefined
        }
      : undefined,
    agreement: data.agreement
      ? {
          institution: data.agreement.institution || undefined,
          ref: data.agreement._id || data.agreement.ref || undefined
        }
      : undefined,
    googleId: data.googleId || undefined,
    teachers: data.teachers || undefined,
    coins: data.coins || undefined,
    countries: data.countries || undefined,
    labels: data.labels || undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
