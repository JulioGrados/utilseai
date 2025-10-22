const { get, getOne, post, put, remove } = require('../lib/request')

const listCategories = async params => {
  return get('/categories', params)
}

const listOpenCategories = async params => {
  return get('/open/categories', params)
}

const createCategory = async data => {
  return post('/categories', data, true)
}

const detailCategory = async (id, params) => {
  return getOne(`/categories/${id}`, params)
}

const updateCategory = async (id, data) => {
  return put(`/categories/${id}`, data, true)
}

const removeCategory = async id => {
  return remove(`/categories/${id}`)
}

module.exports = {
  listCategories,
  createCategory,
  updateCategory,
  detailCategory,
  removeCategory,
  listOpenCategories
}
