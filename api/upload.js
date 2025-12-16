const { get, getOne, post, put, remove } = require('../lib/request')

const listUploads = async params => {
  return get('/uploads', params)
}

const listOpenUploads = async params => {
  return get('/open/uploads', params)
}

const createUpload = async data => {
  return post('/uploads', data, true)
}

const detailUpload = async (id, params) => {
  return getOne(`/uploads/${id}`, params)
}

const updateUpload = async (id, data) => {
  return put(`/uploads/${id}`, data, true)
}

const removeUpload = async id => {
  return remove(`/uploads/${id}`)
}

module.exports = {
  listUploads,
  createUpload,
  updateUpload,
  detailUpload,
  removeUpload,
  listOpenUploads
}
