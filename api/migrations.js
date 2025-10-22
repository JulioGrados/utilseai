const { post } = require('../lib/request')

const listMigrationCertificates = async params => {
  return post('/migrations/admin/certificates', params)
}

const listMigrationSales = async params => {
  return post('/migrations/admin/sales', params)
}

module.exports = {
  listMigrationCertificates,
  listMigrationSales
}
