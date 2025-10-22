const { get, getOne, post, put, remove } = require('../lib/request')

const listPayments = async params => {
  return get('/payments', params)
}

const listOpenPayments = async params => {
  return get('/open/payments', params)
}

const createPayment = async data => {
  return post('/payments', data)
}

const detailPayment = async (id, params, jwt) => {
  return getOne(`/payments/${id}`, params, jwt)
}

const updatePayment = async (id, data) => {
  return put(`/payments/${id}`, data)
}

const removePayment = async id => {
  return remove(`/payments/${id}`)
}

module.exports = {
  listPayments,
  createPayment,
  updatePayment,
  detailPayment,
  removePayment,
  listOpenPayments
}
