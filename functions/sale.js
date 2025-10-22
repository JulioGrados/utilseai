const moment = require('moment')

const convertDateSpanish = (day, month, year) => {
  // var localLocale = moment(date)
  let monthDate = ''
  switch (month) {
    case 0: 
      monthDate = 'Enero'
      break
    case 1:
      monthDate = 'Febrero'
      break
    case 2:
      monthDate = 'Marzo'
      break
    case 3:
      monthDate = 'Abril'
      break
    case 4:
      monthDate = 'Mayo'
      break
    case 5:
      monthDate = 'Junio'
      break
    case 6:
      monthDate = 'Julio'
      break
    case 7:
      monthDate = 'Agosto'
      break
    case 8:
      monthDate = 'Septiembre'
      break
    case 9:
      monthDate = 'Octubre'
      break
    case 10:
      monthDate = 'Noviembre'
      break
    case 11:
      monthDate = 'Diciembre'
      break
    default:
      console.log('no encontro')
  }
  return day + ' de ' + monthDate + ' del ' + year
}

const payloadToData = payload => {
  const coursesNames = payload.courses
    ? payload.courses.map(item => item.name).join(', ')
    : ''

  const residue = payload.orders
    ? sumAmountOrders(payload.orders, 'Por Pagar')
    : 0
  const courseResiude = payload.orders
    ? coursesOrders(payload.orders, 'Por Pagar')
    : ''
  const order = payload.orders && payload.orders[0]
  const firstPayDate = order && order.voucher && order.voucher.ref && order.voucher.ref.date ? convertDateSpanish(moment(order.voucher.ref.date).add(5, 'hours').format('D'), moment(order.voucher.ref.date).add(5, 'hours').month(), moment(order.voucher.ref.date).add(5, 'hours').format('YYYY')) : ''
  const closeDate =
    order && order.voucher && order.voucher.ref && order.voucher.ref.date ?
    convertDateSpanish(moment(order.voucher.ref.date).add(2, 'M').format('D'), moment(order.voucher.ref.date).add(2, 'M').month(), moment(order.voucher.ref.date).add(2, 'M').format('YYYY')) : ''
    
  return {
    ...payload,
    residue,
    courseResiude,
    closeDate,
    firstPayDate,
    linkedNames: payload.user && payload.user.ref ? payload.user.ref.firstName + ' ' + payload.user.ref.lastName : payload.user.names,
    linkedFirstName: payload.user && payload.user.ref ? payload.user.ref.firstName : '',
    linkedLastName: payload.user && payload.user.ref ? payload.user.ref.lastName : '',
    linkedEmail: payload.user && payload.user.ref ? payload.user.ref.email : '',
    linkedMobile: payload.user && payload.user.ref ? payload.user.ref.mobile : '',
    userName: payload.user && payload.user.names,
    assignedName: payload.assigned && payload.assigned.username,
    numberOrders: payload.orders && payload.orders.length,
    currency: payload.currency && payload.currency.toUpperCase(), 
    fullDate: moment(payload.dateOfSale).format('YYYY-MM-DD HH:mm:ss'),
    numberOrdersPay:
      payload.orders &&
      payload.orders.filter(item => item.status === 'Pagada').length,
    coursesNames,
    name: 'Venta del ' + moment(payload.dateOfSale).format('DD/MM/YYYY'),
    courses: payload.courses
      ? payload.courses.map(course => ({
          ...course,
          _id: course._id || course.ref
        }))
      : []
  }
}

const dataToPayload = data => {
  return {
    amount: data.amount || undefined,
    currency: data.currency || undefined,
    dateOfSale: data.dateOfSale || undefined,
    status: data.status || undefined,
    user: data.user
      ? {
          names: data.user.personalInfo
            ? data.user.personalInfo.names
            : data.user.username,
          ref: data.user._id || data.user.ref || undefined
        }
      : undefined,
    assigned: data.assigned
      ? {
          username: data.assigned.username || undefined,
          ref: data.assigned._id || data.assigned.ref || undefined
        }
      : undefined,
    orders: data.orders || [],
    courses: data.courses
      ? data.courses.map(course => ({
          ...course,
          ref: course._id || course.ref
        }))
      : []
  }
}

const sumAmountOrders = (orders = [], status = '') => {
  let sum = 0
  orders.forEach(item => {
    if (status) {
      if (item.status === status) {
        sum += parseFloat(item.amount)
      }
    } else {
      sum += parseFloat(item.amount)
    }
  })
  return sum
}

const coursesOrders = (orders = [], status = '') => {
  let sum = ''
  if (status) {
    const filterOrders = orders.filter(item => item.status === status)
    filterOrders.forEach((item, index) => {
      const course = item.course ? item.course.name : ''
      if (index === 0) {
        sum = sum + course
      } else {
        sum = sum + ', ' + course
      }  
    })
  } else {
    orders.forEach((item, index) => {
      const course = item.course ? item.course.name : ''
      if (index === 0) {
        sum = sum + course
      } else {
        sum = sum + ', ' + course
      }
    })
  }
  
  return sum
}

const existOrders = (orders = []) => {
  const valids = orders.filter(item => item.isCompleted)
  return valids
}

const sumPriceCourses = (courses = [], status) => {
  let sum = 0
  courses.forEach(item => {
    if (status) {
      if (item.status === status) {
        sum += parseFloat(item.price)
      }
    } else {
      sum += parseFloat(item.price)
    }
  })
  return sum
}

module.exports = {
  payloadToData,
  dataToPayload,
  sumPriceCourses,
  coursesOrders,
  existOrders,
  sumAmountOrders
}
