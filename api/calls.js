const { get, getOne, post, put, remove } = require('../lib/request')

const listCalls = async params => {
  return get('/calls', params)
}

const createCall = async data => {
  return post('/calls', data)
}

const detailCall = async (id, params) => {
  return getOne(`/calls/${id}`, params)
}

const updateCall = async (id, data) => {
  return put(`/calls/${id}`, data)
}

const removeCall = async id => {
  return remove(`/calls/${id}`)
}

module.exports = {
  listCalls,
  createCall,
  updateCall,
  detailCall,
  removeCall
}
