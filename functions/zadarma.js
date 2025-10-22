const axios = require('axios')
const CryptoJS = require('crypto-js')
const httpBuildQuery = require('http-build-query')

const {url, userkey, secretkey} = require('config').zadarma

const params_sort = function params_sort(obj) {
    let sorted = {}
    Object.keys(obj).sort().forEach(key => sorted[key] = obj[key])
    return sorted
}

const prepare_data_to_request = function prepare_data_to_request(obj) {
  let {
      method,
      params,
      userKey,
      secretKey
  } = obj;
  //https://zadarma.com/ru/support/api/#intro_authorization
  let paramsString = '';

  if (Object.keys(params).length > 0) {
    paramsString = httpBuildQuery(params_sort(params))
  }

  let md5 = CryptoJS.MD5(paramsString).toString()
  let data = method + paramsString + md5

  if (secretKey && secretKey.length == 20) {
    let sha1 = CryptoJS.HmacSHA1(data, secretKey).toString()
    let sign = new Buffer.from(sha1).toString('base64')
    return {
      headers: { 'Authorization': `${userKey}:${sign}` },
      paramsString: paramsString
    }
  }
  console.error('zadarma: api secret key is not are set!!!')
}

module.exports.api = async function request(obj) {
  
  let {//block set default parameters if not set
      baseURL = url,
      api_method = '',
      params = {},
      http_method = 'GET',//GET || POST || PUT || DELETE
      api_user_key = userkey,
      api_secret_key = secretkey,
      timeout = 0//number of milliseconds
  } = obj;

  if (api_method === '') {
      console.error('zadarma: api_method is empty!!!')
  }

  let { headers, paramsString } = prepare_data_to_request({
      method: api_method,
      params: params,
      userKey: api_user_key,
      secretKey: api_secret_key
  })
  try {
    const response = await axios(
      {
        baseURL: baseURL,
        method: http_method,
        url: http_method === 'GET' ? `${api_method}?${paramsString}` : api_method,
        data: paramsString,
        headers: headers,
        timeout: timeout
      }
    )
    return response
  } catch (error) {
    console.log('errorrrrr', error)
    throw error
  }
}

module.exports.zadarma_express_handler = require('./verify')

//example use:
// let balance = await api({
//   http_method: 'POST',
//   api_method: '/v1/sms/send/',
//   params: {
//     number: '+51949002838',
//     message: 'texto'
//   }
// })