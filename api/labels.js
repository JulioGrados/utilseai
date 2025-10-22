const { get, getOne, post, put, remove } = require('../lib/request')

const listLabels = async params => {
  return get('/labels', params)
}

const listOpenLabels = async params => {
  return get('/open/labels', params)
}

const createLabel = async data => {
  return post('/labels', data)
}

const detailLabel = async (id, params, jwt) => {
  return getOne(`/labels/${id}`, params, jwt)
}

const updateLabel = async (id, data) => {
  return put(`/labels/${id}`, data)
}

const removeLabel = async id => {
  return remove(`/labels/${id}`)
}

module.exports = {
  listLabels,
  createLabel,
  updateLabel,
  detailLabel,
  removeLabel,
  listOpenLabels
}
