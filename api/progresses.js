const { get, getOne, post, put, remove } = require('../lib/request')

const listProgresses = async params => {
  return get('/progresses', params)
}

const createProgress = async data => {
  return post('/progresses', data)
}

const detailProgress = async (id, params) => {
  return getOne(`/progresses/${id}`, params)
}

const updateProgress = async (id, data) => {
  return put(`/progresses/${id}`, data)
}

const removeProgress = async id => {
  return remove(`/progresses/${id}`)
}

module.exports = {
  listProgresses,
  createProgress,
  updateProgress,
  detailProgress,
  removeProgress
}
