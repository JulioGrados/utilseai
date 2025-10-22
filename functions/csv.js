const csv = require('@fast-csv/parse')

const csv2json = async buffer =>
  new Promise(resolve => {
    const results = []

    csv
      .parseString(buffer, { headers: true })
      .on('data', data => {
        results.push(data)
      })
      .on('end', () => {
        return resolve(results)
      })
      .on('error', error => {
        console.log('error', error)
      })
  })

module.exports = {
  csv2json
}
