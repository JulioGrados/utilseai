const { get, getOne, post, put, remove } = require('../lib/request')

const listTimetables = async params => {
  return get('/timetables', params)
}

const createTimetable = async data => {
  return post('/timetables', data)
}

const detailTimetable = async (id, params) => {
  return getOne(`/timetables/${id}`, params)
}

const updateTimetable = async (id, data) => {
  return put(`/timetables/${id}`, data)
}

const removeTimetable = async id => {
  return remove(`/timetables/${id}`)
}

module.exports = {
  listTimetables,
  createTimetable,
  updateTimetable,
  detailTimetable,
  removeTimetable
}
