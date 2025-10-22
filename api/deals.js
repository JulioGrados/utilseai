const { get, getOne, post, put, remove } = require('../lib/request')

const listDeals = async (params, jwt) => {
  return get('/deals', params, jwt)
}

const generalDeals = async (params, jwt) => {
  return get('/deals/general', params, jwt)
}

const assessorDeals = async (params, jwt) => {
  return get('/deals/assessor', params, jwt)
}

const searchDeals = async (params, jwt) => {
  return get('/deals/search', params, jwt)
}

const dashDeals = async (params, jwt) => {
  return get('/deals/dash', params, jwt)
}

const createDeal = async data => {
  return post('/deals', data)
}

const enrolStudent = async data => {
  return post('/deal/enrol', data)
}

const mixDeal = async data => {
  return post('/deals/mix', data)
}

const changeDeal = async data => {
  return post('/deals/change', data)
}

const reasignDeal = async data => {
  return post('/deals/reasign', data)
}

const detailDeal = async (id, params, jwt) => {
  return getOne(`/deals/${id}`, params, jwt)
}

const updateDeal = async (id, data) => {
  return put(`/deals/${id}`, data)
}

const updateDealCourse = async (id, data) => {
  return put(`/deals/course/${id}`, data)
}

const updateDealOne = async (id, data) => {
  return put(`/deals/admin/${id}`, data)
}

const updateWinner = async (id, data) => {
  return put(`/deals/winner/${id}`, data)
}

const removeDeal = async id => {
  return remove(`/deals/${id}`)
}

module.exports = {
  listDeals,
  generalDeals,
  assessorDeals,
  searchDeals,
  dashDeals,
  createDeal,
  mixDeal,
  reasignDeal,
  changeDeal,
  updateDeal,
  updateDealCourse,
  updateDealOne,
  updateWinner,
  detailDeal,
  removeDeal,
  enrolStudent
}
