const { get, post, put, remove } = require('../lib/request')

const countConfirmations = async params => {
  return get('/open/confirmations/count', params)
}

const listConfirmations = async (params, jwt) => {
  return get('/confirmations', params, jwt)
}

const createConfirmation = async data => {
  return post('/confirmations', data)
}

const detailOpenConfirmation = async (id, params) => {
  return get(`/open/confirmations/detail/${id}`, params)
}

const updateOpenConfirmation = async (id, params) => {
  return put(`/open/confirmations/activation/${id}`, params)
}

const updateConfirmation = async (id, data) => {
  return put(`/confirmations/${id}`, data)
}

const removeConfirmation = async id => {
  return remove(`/confirmations/${id}`)
}


module.exports = {
  listConfirmations,
  createConfirmation,
  updateConfirmation,
  updateOpenConfirmation,
  detailOpenConfirmation,
  removeConfirmation,
  countConfirmations
}
