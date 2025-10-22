const { get, getOne, post, put, remove } = require('../lib/request')

const listMetas = async params => {
  return get('/metas', params)
}

const listOpenMetas = async params => {
  return get('/open/metas', params)
}

const createMeta = async data => {
  return post('/metas', data, true)
}

const detailMeta = async (id, params, jwt) => {
  return getOne(`/metas/${id}`, params, jwt)
}

const detailOpenMeta = async params => {
  return getOne(`/open/metas/detail`, params)
}

const updateMeta = async (id, data) => {
  return put(`/metas/${id}`, data)
}

const removeMeta = async id => {
  return remove(`/metas/${id}`)
}

module.exports = {
  listMetas,
  createMeta,
  updateMeta,
  detailMeta,
  removeMeta,
  listOpenMetas,
  detailOpenMeta
}
