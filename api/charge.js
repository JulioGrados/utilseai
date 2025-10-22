const { get, getOne, post, put, remove } = require('../lib/request')

const listCharge = async params => {
  return get('/charge', params)
}

const createCharge = async data => {
  return post('/charge', data)
}

const createChargedLocal = async data => {
  return post('/open/charge/dlocal', data)
}

const detailCharge = async (id, params) => {
  return getOne(`/charge/${id}`, params)
}

const detailOpenCharge = async params => {
  return getOne('/open/charge/detail', params)
}

const updateCharge = async (id, data) => {
  return put(`/charge/${id}`, data)
}

const removeCharge = async id => {
  return remove(`/charge/${id}`)
}

module.exports = {
  listCharge,
  createCharge,
  createChargedLocal,
  detailOpenCharge,
  updateCharge,
  detailCharge,
  removeCharge
}
