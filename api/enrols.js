const { get, getOne, post, put, remove } = require('../lib/request')

const listEnrols = async params => {
  return get('/enrols', params)
}

const listEnrolCertificates = async (params, jwt) => {
  return get('/enrols/agreements', params, jwt)
}

const ratingsEnrols = async params => {
  return get('/enrols/ratings', params)
}

const generalEnrols = async params => {
  return get('/enrols/general', params)
}

const createEnrol = async data => {
  return post('/enrols', data)
}

const detailEnrol = async (id, params, jwt) => {
  return getOne(`/enrols/${id}`, params, jwt)
}

const updateEnrol = async (id, data) => {
  return put(`/enrols/${id}`, data)
}

const updateEnrolMoodle = async (id) => {
  return put(`/enrols/migrate/${id}`)
}

const createShippingMoodle = async (data) => {
  return post(`/migrate/shippings`, data)
}

const removeEnrol = async id => {
  return remove(`/enrols/${id}`)
}

const sendEnrol = async data => {
  return post(`/enrols/send/`, data)
}

const sendEnrolCertificate = async data => {
  return post(`/enrols/certificate/`, data)
}

const getEnrolCertificate = async params => {
  return get(`/enrols/certificate/`, params)
}

module.exports = {
  listEnrols,
  listEnrolCertificates,
  ratingsEnrols,
  generalEnrols,
  createEnrol,
  updateEnrol,
  updateEnrolMoodle,
  createShippingMoodle,
  detailEnrol,
  removeEnrol,
  sendEnrol,
  getEnrolCertificate,
  sendEnrolCertificate
}
