const { get, getOne, post, put, remove } = require('../lib/request')

const listTestimonies = async params => {
  return get('/testimonies', params)
}

const listTestimoniesCourse = async params => {
  return get('/open/testimonies/course', params)
}

const listOpenTestimonies = async params => {
  return get('/open/testimonies', params)
}

const createTestimony = async data => {
  return post('/testimonies', data)
}

const createTestimonyMoodle = async data => {
  return post('/migrate/testimonies', data)
}

const detailTestimony = async (id, params, jwt) => {
  return getOne(`/testimonies/${id}`, params, jwt)
}

const updateTestimony = async (id, data) => {
  return put(`/testimonies/${id}`, data)
}

const removeTestimony = async id => {
  return remove(`/testimonies/${id}`)
}

module.exports = {
  listTestimonies,
  listTestimoniesCourse,
  createTestimony,
  createTestimonyMoodle,
  updateTestimony,
  detailTestimony,
  removeTestimony,
  listOpenTestimonies
}
