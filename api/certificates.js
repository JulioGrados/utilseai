const { get, getOne, post, put, remove } = require('../lib/request')

const listCertificates = async params => {
  return get('/certificates', params)
}

const listDealCertificates = async (params, jwt) => {
  return get('/certificates/deal/agreements', params, jwt)
}

const createCertificate = async data => {
  return post('/certificates', data)
}

const createAdminCertificate = async data => {
  return post('/certificates/admin', data)
}

const createCertificateMoodle = async data => {
  return post('/moodle/certificates', data)
}

const detailOpenCertificate = async query => {
  return getOne('/open/certificates/detail', query)
}

const detailCertificate = async (id, params, jwt) => {
  return getOne(`/certificates/${id}`, params, jwt)
}

const updateCertificate = async (id, data) => {
  return put(`/certificates/${id}`, data)
}

const updateAdminCertificate = async (id, data) => {
  return put(`/certificates/admin/${id}`, data)
}

const removeCertificate = async id => {
  return remove(`/certificates/${id}`)
}

module.exports = {
  listCertificates,
  listDealCertificates,
  createCertificate,
  createCertificateMoodle,
  createAdminCertificate,
  updateAdminCertificate,
  updateCertificate,
  detailCertificate,
  removeCertificate,
  detailOpenCertificate
}
