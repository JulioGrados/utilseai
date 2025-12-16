const { get, getOne, post, put, remove } = require('../lib/request')

const listQuestions = async params => {
  return get('/questions', params)
}

const listOpenQuestions = async params => {
  return get('/open/questions', params)
}

const createQuestion = async data => {
  return post('/questions', data, true)
}

const detailQuestion = async (id, params) => {
  return getOne(`/questions/${id}`, params)
}

const updateQuestion = async (id, data) => {
  return put(`/questions/${id}`, data, true)
}

const removeQuestion = async id => {
  return remove(`/questions/${id}`)
}

module.exports = {
  listQuestions,
  createQuestion,
  updateQuestion,
  detailQuestion,
  removeQuestion,
  listOpenQuestions
}
