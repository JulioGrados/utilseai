const { get, getOne, post, put, remove } = require('../lib/request')

const listEmails = async params => {
  return get('/emails', params)
}

const createEmail = async data => {
  return post('/create/emails', data)
}

const resendEmail = async data => {
  return post('/emails/admin', data)
}

const searchEmails = async (params, jwt) => {
  return get('/emails/search', params, jwt)
}

const detailEmail = async (id, params) => {
  return getOne(`/emails/${id}`, params)
}

const updateEmail = async (id, data) => {
  return put(`/emails/${id}`, data)
}

const sendCBEmails = async params => {
  return post('/emails/envio/admin', params)
}

const removeEmail = async id => {
  return remove(`/emails/${id}`)
}

module.exports = {
  listEmails,
  resendEmail,
  createEmail,
  searchEmails,
  updateEmail,
  detailEmail,
  sendCBEmails,
  removeEmail
}
