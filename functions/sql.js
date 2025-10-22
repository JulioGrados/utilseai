const mysql = require('mysql')

const hostgatorConfig = require('config').hostgator

const sqlConsult = async (query, database = 'manvicio_ertmdl') => {
  let connection
  try {
    connection = mysql.createConnection({
      ...hostgatorConfig,
      database,
      connectTimeout: 60000,
      charset: 'utf8'
    })
    connection.connect()
  } catch (error) {
    throw error
  }

  const resp = await new Promise((resolve, reject) => {
    try {
      connection.query(query, async (error, results) => {
        if (error) {
          console.log('error query', error)
          throw reject(error)
        }

        return resolve(results)
      })
    } catch (error) {
      console.log('eror', error)
      throw reject(error)
    }
  })

  //connection.end()
  console.log('destroy')
  connection.destroy(item => {
    console.log('item', item)
  })
  return resp
}

module.exports = {
  sqlConsult
}
