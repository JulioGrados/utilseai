const { get, getOne, post, put, remove } = require('../lib/request')

const listLessons = async params => {
  return get('/lessons', params)
}

const createLesson = async data => {
  return post('/lessons', data)
}

const createLessonMoodle = async data => {
  return post('/migrations/lessons', data)
}

const detailOpenLesson = async query => {
  return getOne('/open/lessons/detail', query)
}

const detailLesson = async (id, params) => {
  return getOne(`/lessons/${id}`, params)
}

const updateLesson = async (id, data) => {
  return put(`/lessons/${id}`, data)
}

const removeLesson = async id => {
  return remove(`/lessons/${id}`)
}

module.exports = {
  listLessons,
  createLesson,
  createLessonMoodle,
  updateLesson,
  detailLesson,
  removeLesson,
  detailOpenLesson
}
