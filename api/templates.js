const { get, getOne, post, put, remove } = require('../lib/request')

const listTemplates = async params => {
  return get('/templates', params)
}

const createTemplate = async data => {
  return post('/templates', data)
}

const detailTemplate = async (id, params, jwt) => {
  return getOne(`/templates/${id}`, params, jwt)
}

const updateTemplate = async (id, data) => {
  return put(`/templates/${id}`, data)
}

const removeTemplate = async id => {
  return remove(`/templates/${id}`)
}

module.exports = {
  listTemplates,
  createTemplate,
  updateTemplate,
  detailTemplate,
  removeTemplate
}
