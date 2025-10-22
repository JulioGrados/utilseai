const { get, getOne, post, put, remove } = require('../lib/request')

const listSends = async params => {
  return get('/send', params)
}

const createSend = async data => {
  return post('/send', data)
}

const detailSend = async (id, params) => {
  return getOne(`/send/${id}`, params)
}

const updateSend = async (id, data) => {
  return put(`/send/${id}`, data)
}

const removeSend = async id => {
  return remove(`/send/${id}`)
}

module.exports = {
  listSends,
  createSend,
  updateSend,
  detailSend,
  removeSend
}
