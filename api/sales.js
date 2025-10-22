const { get, getOne, post, put, remove } = require('../lib/request')

const listSales = async params => {
  return get('/sales', params)
}

const assessorSales = async (params) => {
  return get('/sales/assessor', params)
}

const searchSales = async (params, jwt) => {
  return get('/sales/search', params, jwt)
}

const createSale = async data => {
  return post('/sales', data)
}

const resetSaveSale = async data => {
  return post('/sales/reset', data)
}

const detailSale = async (id, params) => {
  return getOne(`/sales/${id}`, params)
}

const updateSale = async (id, data) => {
  return put(`/sales/${id}`, data)
}

const updateAdminSale = async (id, data) => {
  return put(`/sales/reset/${id}`, data)
}

const updateSaleOne = async (id, data) => {
  return put(`/sales/admin/${id}`, data)
}

const removeSale = async id => {
  return remove(`/sales/${id}`)
}

module.exports = {
  listSales,
  assessorSales,
  searchSales,
  createSale,
  resetSaveSale,
  updateSale,
  updateAdminSale,
  updateSaleOne,
  detailSale,
  removeSale
}
