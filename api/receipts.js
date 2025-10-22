const { get, getOne, post, put, remove } = require('../lib/request')

const listReceipts = async params => {
  return get('/receipts', params)
}

const createReceipt = async data => {
  return post('/receipts', data)
}

const sendFacture = async data => {
  return post('/receipts/facture', data)
}

const createFacture = async (id, data) => {
  return put(`/receipts/facture/${id}`, data)
}

const detailReceipt = async (id, params) => {
  return getOne(`/receipts/${id}`, params)
}

const detailAdminReceipt = async (id, params, jwt) => {
  return getOne(`/receipts/admin/${id}`, params, jwt)
}

const updateAdminReceipt = async (id, data) => {
  return put(`/receipts/admin/${id}`, data)
}

const updateReceipt = async (id, data) => {
  return put(`/receipts/${id}`, data)
}

const onlyUpdateReceipt = async (id, data) => {
  return put(`/receipts/update/${id}`, data)
}

const removeReceipt = async id => {
  return remove(`/receipts/${id}`)
}

const resetAdminReceipt = async (id) => {
  return remove(`/receipts/admin/${id}`)
}

const noteAdminReceipt = async (id, data) => {
  return put(`/receipts/note/${id}`, data)
}

module.exports = {
  listReceipts,
  createReceipt,
  createFacture,
  sendFacture,
  updateReceipt,
  detailReceipt,
  detailAdminReceipt,
  updateAdminReceipt,
  removeReceipt,
  resetAdminReceipt,
  onlyUpdateReceipt,
  noteAdminReceipt
}
