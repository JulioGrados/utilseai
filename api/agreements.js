const { get, getOne, post, put, remove } = require('../lib/request')

const listAgreements = async params => {
  return get('/agreements', params)
}

const listOpenAgreements = async params => {
  return get('/open/agreements', params)
}

const createAgreement = async data => {
  return post('/agreements', data)
}

const detailAgreement = async (id, params) => {
  return getOne(`/agreements/${id}`, params)
}

const detailOpenAgreement = async (params) => {
  return getOne(`/open/agreements/detail/`, params)
}

const updateAgreement = async (id, data) => {
  return put(`/agreements/${id}`, data)
}

const removeAgreement = async id => {
  return remove(`/agreements/${id}`)
}

module.exports = {
  listAgreements,
  createAgreement,
  detailAgreement,
  detailOpenAgreement,
  updateAgreement,
  removeAgreement,
  listOpenAgreements
}
