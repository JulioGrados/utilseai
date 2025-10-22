const { get, getOne, post, put, remove } = require('../lib/request')

const listOrders = async params => {
  return get('/orders', params)
}

const createOrder = async data => {
  return post('/orders', data)
}

const detailOrder = async (id, params) => {
  return getOne(`/orders/${id}`, params)
}

const updateOrder = async (id, data) => {
  return put(`/orders/${id}`, data)
}

const updateOrderAdmin = async (id, data) => {
  return put(`/orders/admin/${id}`, data)
}

const removeOrder = async id => {
  return remove(`/orders/${id}`)
}

const assessorOrders = async (params) => {
  return get('/orders/crm', params)
}

module.exports = {
  listOrders,
  assessorOrders,
  createOrder,
  updateOrder,
  updateOrderAdmin,
  detailOrder,
  removeOrder
}
