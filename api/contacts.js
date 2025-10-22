const { get, getOne, post, put, remove } = require('../lib/request')

const listContacts = async params => {
  return get('/contacts', params)
}

const createContact = async data => {
  return post('/contacts', data)
}

const createOpenContact = async data => {
  return post('/open/contacts', data)
}

const detailContact = async (id, params) => {
  return getOne(`/contacts/${id}`, params)
}

const updateContact = async (id, data) => {
  return put(`/contacts/${id}`, data)
}

const removeContact = async id => {
  return remove(`/contacts/${id}`)
}

module.exports = {
  listContacts,
  createContact,
  updateContact,
  detailContact,
  removeContact,
  createOpenContact
}
