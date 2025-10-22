const { get, getOne, post, put, remove } = require('../lib/request')

const listCompanies = async params => {
  return get('/companies', params)
}

const listOpenCompanies = async params => {
  return get('/open/companies', params)
}

const createCompany = async data => {
  return post('/companies', data)
}

const detailCompany = async (id, params) => {
  return getOne(`/companies/${id}`, params)
}

const updateCompany = async (id, data) => {
  return put(`/companies/${id}`, data)
}

const removeCompany = async id => {
  return remove(`/companies/${id}`)
}

module.exports = {
  listCompanies,
  createCompany,
  updateCompany,
  detailCompany,
  removeCompany,
  listOpenCompanies
}
