const slug = require('slug')
const path = require('path')
const config = require('config')
const fs = require('fs').promises
global.window = { document: { createElementNS: () => { return {}; } } };
global.navigator = {};
global.btoa = () => {};
global.atob = () => {};
global.html2pdf = () => { }
global.split = () => {}
global.RGBColor = require('rgbcolor')

const PDF = require('../functions/warrant')
const { getImagetoBase64 } = require('../functions/imagetobase64')
const moment = require('moment')

let SERVER_PATH
if (config.media.env === 'production') {
  SERVER_PATH = '/opt/media/uploads'
} else {
  SERVER_PATH = path.join(__dirname, '../../media/uploads')
}

const createPDF = async (id, name, course, shortCourse, horas, inicio, fin, colegio, code, type, free, emit, tables) => {
  const count = shortCourse.length
  const sizeLetter = (count <= 71) ? 19 : (count <= 81) ? 17 : 15

  const pdf = new PDF()
  const fonts = pdf.fonts()

  pdf.doc.setProperties({
    title: `Certificado - ${course} - ${name}`.toUpperCase(),
    creator: 'Escuela Americana de Innovación'
  })

  const center = (pdf.doc.internal.pageSize.getWidth() - 50) / 2

  console.log('center', pdf.doc.internal.pageSize.getWidth() - 60)

  const dir = path.resolve(SERVER_PATH, '../public/img/certificado.jpeg')
  const img = await getImagetoBase64(dir)  

  pdf.image({
    img,
    y: 0,
    x: 0,
    width: 297.0000833333333,
    height: 210.0015555555555
  })

  pdf.text({
    y: -12,
    x: center,
    text: 'CERTIFICADO',
    size: 34,
    fontStyle: 'bold',
    align: 'center'
  })

  pdf.text({
    y: 3,
    x: center,
    text: 'CURSO DE ESPECIALIZACIÓN',
    size: 19,
    fontStyle: 'bold',
    align: 'center'
  })

  pdf.text({
    y: 18,
    x: center,
    text: shortCourse.toUpperCase(),
    size: sizeLetter,
    fontStyle: 'bold',
    align: 'center'
  })

  pdf.text({
    y: 28,
    x: center,
    text: 'Otorgado a:',
    size: 17,
    fontStyle: 'normal',
    align: 'center'
  })

  pdf.text({
    y: 38,
    x: center,
    text: name,
    size: 19,
    fontStyle: 'bold',
    align: 'center'
  })
  // realizado el ${inicio} hasta el ${fin}, con un total de ${horas} horas académicas.
  pdf.text({
    y: 49,
    x: center,
    text: `Por concluir y cumplir los requisitos de aprobación del curso realizado el ${inicio} hasta el ${fin}, con un total de ${horas} horas académicas.`,
    size: 15,
    fontStyle: 'normal',
    align: 'center'
  })

  pdf.text({
    y: 138,
    x: 5,
    text: `Código de verificación: ${code}`,
    size: 11,
    fontStyle: 'normal',
    align: 'left'
  })

  let finalY = 75
  console.log(tables)

  if (finalY - 30 > 180) {
    pdf.addPage()
    finalY = 10
  } else {
    finalY -= 15
  }

  const data = pdf.output()
  const fileroot = '/certificates/free/' + `certificado-${slug(course)}-${slug(name)}` + '.pdf'
  console.log('SERVER_PATH', SERVER_PATH + fileroot)
  try {
    await fs.writeFile(SERVER_PATH + fileroot, data, 'binary')
    return fileroot
  } catch (error) {
    throw error
  }
}

const getDateStart = ( certificate, course ) => {
  let now = new Date(certificate.date.toString())
  let evaluations = course.numberEvaluation
  if (evaluations <= 10) {
    evaluations = 70
  } else {
    evaluations = evaluations * 7
  }
  let start = evaluations * (24 * 60 * 60 * 1000)
  start = new Date(Date.parse(now) - start)
  return start 
}

const lastNameSpace = (user) => {
  let lastName = user.lastName
  const end = lastName.substring(
    lastName.length - 1,
    lastName.length
  )

  if (end === ' ') {
    lastName = lastName.substring(
      0,
      lastName.length - 1
    )
  }
  
  return lastName
}


const constancePDF = async ( user, course, lessons, enrol, certificate ) => {
  let constanceData = []
  let evaluations = []

  enrol.exams.forEach(item => evaluations.push(item))
  enrol.tasks.forEach(item => evaluations.push(item))
  lessons.sort((a, b) => (a.order > b.order ? 1 : -1))

  constanceData = lessons.map(item => {
    const calification =
      item.evaluation &&
      item.evaluation.name &&
      evaluations.find(element => element.name === item.evaluation.name)

    const data = {
      _id: item._id,
      number: item.order,
      lesson: item.name,
      score: calification && calification.score ? calification.score : '-',
      date: calification && calification.date ? calification.date : ''
    }
    return data
  })
  constanceData = constanceData.sort((a, b) => (a.number > b.number ? 1 : -1))
  const start = getDateStart(certificate, course)
  const lastName = lastNameSpace(user)
  const tables = [
    {
      title: 'Curso de Execel Profesional',
      columns: [
        { header: 'MOD.', dataKey: 'number' },
        { header: 'TEMA', dataKey: 'lesson' },
        { header: 'NOTA', dataKey: 'score' }
      ],
      data: constanceData
    }
  ]

  // console.log('entrooooooooooooooo')
  const encodePDF = await createPDF(
    user._id.toString(),
    lastName + ', ' + user.firstName,
    course.name,
    course.shortName,
    course.academicHours,
    moment(start).format('LL'),
    moment(certificate.date).format('LL'),
    course.agreement ? course.agreement.ref ? course.agreement.ref.institution : course.agreement.institution : '',
    certificate.shortCode,
    user.dni,
    user.document,
    moment(new Date()).format('LL'),
    tables
  )
    // console.log('encodePDF', encodePDF)
  return encodePDF
}

// const constancePDF = () => {
//   var doc = new jsPDF()
//   doc.setFontSize(40);
//   doc.text(35, 25, "Paranyan loves jsPDF")
//   var data = doc.output()
//   var url = Base64.encode(data);
//   console.log('url', url)
//   return url
// }

module.exports = {
  constancePDF,
  lastNameSpace
}