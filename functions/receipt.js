const moment = require('moment')
const axios = require('axios')
const { token, url } = require('config').facture


const payloadToData = payload => {
  return {
    ...payload,
    ticket: payload.isBill ? 'Sí' : 'No',
    fullDate: moment(payload.date).format('YYYY-MM-DD HH:mm:ss'),
    assignedName: payload.assigned ? payload.assigned.username : '',
    linked: payload.linked ? payload.linked.username : '',
    cancel: (payload.isTicket || payload.isFacture) ? true : false
  }
}

const dataToPayload = data => {
  return {
    amount: data.amount || undefined,
    assigned: data.assigned || undefined,
    businessName: data.businessName || undefined,
    code: data.code || undefined,
    dni: data.dni || undefined,
    isBill: data.isBill || false,
    names: data.names || undefined,
    ruc: data.ruc || undefined,
    sequential: data.sequential || undefined,
    serie: data.serie || undefined,
    status: data.status || undefined,
    voucher_id: data.voucher_id || undefined,
    unsubscribe: data.unsubscribe || undefined,
    annular: data.annular || undefined,
    exonerated: data.exonerated || undefined,
    methodName: data.methodName || undefined,
    assigned: data.assigned || undefined,
    dateEmit: data.dateEmit || undefined,
    date: data.date || undefined
  }
}

const payloadTicket = payload => {
  const taxes = sumTaxes(payload.items)
  const part = ('00000000'.substring(0, '00000000'.length - payload.count.toString().length))
  const sequential = part + payload.count.toString()
  return {
    nro_document: 'BA01-' + sequential,
    sequential: sequential,
    date: moment().format('YYYY-MM-DD'),
    invoice_type: '03',
    method_name: payload.receipt.methodName,
    amount_total: parseFloat((payload.receipt.amount - taxes).toFixed(4)),
    type_receipt: 'A4',
    currency: payload.receipt.money && payload.receipt.money.code,
    taxes: [
      {
        tax_total: parseFloat(taxes.toFixed(2)),
        tribute_code: payload.receipt.exonerated ? '9997' : '1000'
      }
    ],
    type_operation: 1,
    total_taxes: parseFloat(taxes),
    customer: {
      document: payload.user && payload.user.dni ? payload.user.dni : '-',
      client_id: payload.user && payload.user.dni ? payload.user.dni.toString() : sequential,
      type_document: payload.user && payload.user.document ? codeDocument(payload.user.document) : '-',
      business_name: payload.user.lastName + ' ' + payload.user.firstName,
      telephone: '',
      email: '',
      address: ''
    },
    items: payload.items,
    discount: parseFloat('0.00'),
    seller: 'Escuela Americana de Innovación S.A.C.',
    observation: ''
  }
}

const payloadFacture = payload => {
  const taxes = sumTaxes(payload.items)
  const part = ('00000000'.substring(0, '00000000'.length - payload.count.toString().length))
  const sequential = part + payload.count.toString()
  return {
    nro_document: 'FA01-' + sequential,
    sequential: sequential,
    date: moment().format('YYYY-MM-DD'),
    invoice_type: '01',
    method_name: payload.receipt.methodName,
    amount_total: parseFloat((payload.receipt.amount - taxes).toFixed(4)),
    type_receipt: 'A4',
    currency: payload.receipt.money && payload.receipt.money.code,
    taxes: [
      {
        tax_total: parseFloat(taxes.toFixed(2)),
        tribute_code: '1000'
      }
    ],
    type_operation: 1,
    total_taxes: parseFloat(taxes),
    customer: {
      document: payload.company.ruc,
      client_id: payload.company.increase,
      type_document: '6',
      business_name: payload.company.businessName,
      telephone: '',
      email: '',
      address: payload.company.address ? payload.company.address : ''
    },
    items: payload.items,
    discount: parseFloat('0.00'),
    seller: 'Escuela Americana de Innovación S.A.C.',
    observation: ''
  }
}

const setFacture = async body => {
  // const data = JSON.stringify(body)
  try {
    const response = await axios.post(url + 'efactura/', body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    return response
  } catch (error) {
    throw error.response
  }
}

const unsubscribeReceipt = async body => {
  // const data = JSON.stringify(body)
  try {
    const response = await axios.post(url + 'unsubscribe/', body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    return response
  } catch (error) {
    throw error.response.data
  }
}

const noteReceipt = async body => {
  // const data = JSON.stringify(body)
  try {
    const response = await axios.post(url + 'credit_note/', body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    return response
  } catch (error) {
    throw error.response.data
  }
}

const sumTaxes = items => {
  let sum = 0
  items.forEach(item => {
    sum += parseFloat(item.tax_unit_item)
  })
  return sum
}

const codeDocument = document => {
  if (document === 'DNI') {
    return '1'
  } else if (document === 'Carné de Extranjería') {
    return '4'
  } else if (document === 'Pasaporte') {
    return '7'
  } else {
    return 'X'
  }
}

module.exports = {
  payloadToData,
  payloadTicket,
  payloadFacture,
  setFacture,
  unsubscribeReceipt,
  noteReceipt,
  dataToPayload
}
