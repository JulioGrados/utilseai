const sql = require('mssql')

const database = require('config').moodle.database
const username = require('config').moodle.username
const password = require('config').moodle.password
const host = require('config').moodle.host

const config = {
  user: username,
  password: password,
  server: host,
  database: database,
  options: {
    encrypt: true,
    enableArithAbort: true
  }
}

const connectionMoodle = async () => {
  let pool = ''

  try {
    pool = await sql.connect('config')
    // console.log(poll)
  } catch (err) {
    console.log(err)
  }

  return pool
}

module.exports = {
  connectionMoodle
}
