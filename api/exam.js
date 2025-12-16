const { get, getOne, post, put, remove } = require('../lib/request')

const listExams = async params => {
  return get('/exams', params)
}

const listOpenExams = async params => {
  return get('/open/exams', params)
}

const createExam = async data => {
  return post('/exams', data, true)
}

const detailExam = async (id, params) => {
  return getOne(`/exams/${id}`, params)
}

const updateExam = async (id, data) => {
  return put(`/exams/${id}`, data, true)
}

const removeExam = async id => {
  return remove(`/exams/${id}`)
}

module.exports = {
  listExams,
  createExam,
  updateExam,
  detailExam,
  removeExam,
  listOpenExams
}
