const { get, getOne, post, put, remove } = require('../lib/request')

const countCourses = async params => {
  return get('/open/courses/count', params)
}

const listCourses = async params => {
  return get('/courses', params)
}

const listOpenCourses = async params => {
  return get('/open/courses', params)
}

const detailOpenCourse = async params => {
  return get('/open/courses/detail', params)
}

const createCourse = async data => {
  return post('/courses', data)
}

const detailCourse = async (id, params) => {
  return getOne(`/courses/${id}`, params)
}

const updateCourse = async (id, data) => {
  return put(`/courses/${id}`, data)
}

const priceCourse = async data => {
  return post('/courses/price', data)
}

const removeCourse = async id => {
  return remove(`/courses/${id}`)
}

module.exports = {
  listCourses,
  createCourse,
  updateCourse,
  detailCourse,
  removeCourse,
  listOpenCourses,
  countCourses,
  priceCourse,
  detailOpenCourse
}
