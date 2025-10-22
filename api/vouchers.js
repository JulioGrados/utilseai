const { get, getOne, post, put, remove } = require('../lib/request')

const listVouchers = async params => {
  return get('/vouchers', params)
}

const createVoucher = async data => {
  return post('/vouchers', data)
}

const detailVoucher = async (id, params, jwt) => {
  return getOne(`/vouchers/${id}`, params, jwt)
}

const detailAdminVoucher = async (id, params, jwt) => {
  return getOne(`/vouchers/admin/${id}`, params, jwt)
}

const getOneVoucher = async (params, jwt) => {
  return getOne(`/vouchers/search`, params, jwt)
}

const updateVoucher = async (id, data) => {
  return put(`/vouchers/${id}`, data)
}

const resetAdminVoucher = async (id, data) => {
  return put(`/vouchers/admin/${id}`, data)
}

const removeVoucher = async id => {
  return remove(`/vouchers/${id}`)
}

module.exports = {
  listVouchers,
  createVoucher,
  updateVoucher,
  resetAdminVoucher,
  detailVoucher,
  detailAdminVoucher,
  removeVoucher,
  getOneVoucher
}
