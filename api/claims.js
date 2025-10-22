const { get, getOne, post, put, remove } = require('../lib/request')

const listClaims = async params => {
  return get('/claims', params)
}

const createClaim = async data => {
  return post('/claims', data)
}

const createOpenClaim = async data => {
  return post('/open/claims', data)
}

const detailClaim = async (id, params) => {
  return getOne(`/claims/${id}`, params)
}

const updateClaim = async (id, data) => {
  return put(`/claims/${id}`, data)
}

const removeClaim = async id => {
  return remove(`/claims/${id}`)
}

module.exports = {
  listClaims,
  createClaim,
  updateClaim,
  detailClaim,
  removeClaim,
  createOpenClaim
}
