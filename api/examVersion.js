const { get, getOne, post, put, remove } = require('../lib/request')

const listExamVersions = async params => {
  return get('/examversions', params)
}

const listOpenExamVersions = async params => {
  return get('/open/examversions', params)
}

const createExamVersion = async data => {
  return post('/examversions', data)
}

const detailExamVersion = async (id, params) => {
  return getOne(`/examversions/${id}`, params)
}

const updateExamVersion = async (id, data) => {
  return put(`/examversions/${id}`, data)
}

const removeExamVersion = async id => {
  return remove(`/examversions/${id}`)
}

const setFavoriteVersion = async (examId, versionId) => {
  return put(`/exams/${examId}/favorite/${versionId}`, {})
}

const editVersion = async (versionId, editPrompt) => {
  return put(`/examversions/${versionId}/edit`, { editPrompt })
}

module.exports = {
  listExamVersions,
  createExamVersion,
  updateExamVersion,
  detailExamVersion,
  removeExamVersion,
  listOpenExamVersions,
  setFavoriteVersion,
  editVersion
}
