const { get, getOne, post, put, remove } = require('../lib/request')

const listNotifications = async params => {
  return get('/notifications', params)
}

const createNotification = async data => {
  return post('/notifications', data)
}

const detailNotification = async (id, params) => {
  return getOne(`/notifications/${id}`, params)
}

const updateNotification = async (id, data) => {
  return put(`/notifications/${id}`, data)
}

const removeNotification = async id => {
  return remove(`/notifications/${id}`)
}

module.exports = {
  listNotifications,
  createNotification,
  updateNotification,
  detailNotification,
  removeNotification
}
