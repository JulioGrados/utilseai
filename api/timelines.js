const { get, getOne, post, put, remove } = require('../lib/request')

const listTimelines = async params => {
  return get('/timelines', params)
}

const createTimeline = async data => {
  return post('/timelines', data)
}

const createandUpdateTimeline = async data => {
  console.log('data util', data)
  return post('/timelines/update', data)
}

const detailTimeline = async (id, params) => {
  return getOne(`/timelines/${id}`, params)
}

const updateTimeline = async (id, data) => {
  return put(`/timelines/${id}`, data)
}

const removeTimeline = async id => {
  return remove(`/timelines/${id}`)
}

module.exports = {
  listTimelines,
  createTimeline,
  createandUpdateTimeline,
  updateTimeline,
  detailTimeline,
  removeTimeline
}
