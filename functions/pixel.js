const axios = require('axios')
const sha256 = require('sha256')
const { token, pixel } = require('config').facebook
const countriesData  = require('./countries')

const bizSdk = require('facebook-nodejs-business-sdk')
const Content = bizSdk.Content
const CustomData = bizSdk.CustomData
const DeliveryCategory = bizSdk.DeliveryCategory
const EventRequest = bizSdk.EventRequest
const UserData = bizSdk.UserData
const ServerEvent = bizSdk.ServerEvent

const access_token = token
const pixel_id = pixel
const api = bizSdk.FacebookAdsApi.init(access_token)

const payloadHelper = async (user, amount, money) => {
  const userData_0 = (new UserData())
    .setEmails([user.firstName])
    .setPhones([user.mobile])
    .setLastNames([user.lastName])
    .setFirstNames([user.firstName])
    .setCountries([user.country]);
  console.log('customData_0', userData_0)
  const customData_0 = (new CustomData())
      .setValue(amount)
    .setCurrency(money);
  console.log('customData_0', customData_0)
  const serverEvent_0 = (new ServerEvent())
      .setEventName("Purchase")
      .setEventTime(user.time)
      .setUserData(userData_0)
      .setCustomData(customData_0)
      .setActionSource("website");

  const eventsData = [serverEvent_0];
  const eventRequest = (new EventRequest(access_token, pixel_id))
    .setEvents(eventsData)
  
  eventRequest.execute().then(
    response => {
      console.log('Response: ', response)
      return response
    },
    err => {
      console.error('Error: ', err)
      return err
    }
  )
}

const payloadEventFacebook = (user, body) => {
  const data = {}
  if (user.firstName) {
    data.firstName = sha256(user.firstName.toLowerCase())
  } else {
    if (body.firstName) {
      data.firstName = sha256(body.firstName.toLowerCase())
    } else {
      data.firstName = null
    }
  }

  if (user.lastName) {
    data.lastName = sha256(user.lastName.toLowerCase())
  } else {
    if (body.lastName) {
      data.lastName = sha256(body.lastName.toLowerCase())
    } else {
      data.lastName = null
    }
  }

  if (user.email) {
    data.email = sha256(user.email.toLowerCase())
  } else {
    if (body.email) {
      data.email = sha256(body.email.toLowerCase())
    } else {
      data.email = null
    }
  }

  if (user.mobile) {
    data.mobile = sha256(user.mobile.toString())
  } else {
    data.mobile = null
  }

  if (user.country) {
    const country = countriesData.find(item => item.name === user.country)
    data.country = sha256(country.code)
  } else {
    if (user.mobileCode) {
      const country = countriesData.find(item => item.callingCode === user.mobileCode)
      data.country = sha256(country.code)
    } else {
      data.country = null
    }
  }
  data.time = Math.floor(new Date() / 1000)
  return data
}

const setEventFb = async helper => {
  try {
    const response = await axios(
      {
        method: 'POST',
        url: url,
        headers: {
          "Content-Type":  "application/json",
          "Authorization": "Bearer " + token
        },
        data: {
          data: [
            helper
          ]
        }
      }
    )
    console.log('response', response)
    return response
  } catch (error) {
    console.log('errorrrrr', error)
    throw error
  }
}

module.exports = {
  payloadHelper,
  payloadEventFacebook,
  setEventFb
}