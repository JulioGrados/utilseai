const { get, getOne, post, put, remove } = require('../lib/request')

const listChapterVersions = async params => {
  return get('/chapterversions', params)
}

const listOpenChapterVersions = async params => {
  return get('/open/chapterversions', params)
}

const createChapterVersion = async data => {
  return post('/chapterversions', data)
}

const detailChapterVersion = async (id, params) => {
  return getOne(`/chapterversions/${id}`, params)
}

const updateChapterVersion = async (id, data) => {
  return put(`/chapterversions/${id}`, data)
}

const removeChapterVersion = async id => {
  return remove(`/chapterversions/${id}`)
}

module.exports = {
  listChapterVersions,
  createChapterVersion,
  updateChapterVersion,
  detailChapterVersion,
  removeChapterVersion,
  listOpenChapterVersions
}
