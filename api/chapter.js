const { get, getOne, post, put, remove } = require('../lib/request')

const listChapters = async params => {
  return get('/chapters', params)
}

const listOpenChapters = async params => {
  return get('/open/chapters', params)
}

const createChapter = async data => {
  return post('/chapters', data, true)
}

const detailChapter = async (id, params) => {
  return getOne(`/chapters/${id}`, params)
}

const updateChapter = async (id, data) => {
  return put(`/chapters/${id}`, data)
}

const removeChapter = async id => {
  return remove(`/chapters/${id}`)
}

module.exports = {
  listChapters,
  createChapter,
  updateChapter,
  detailChapter,
  removeChapter,
  listOpenChapters
}
