const path = require('path')
const config = require('config')
const fs = require('fs')

const { google } = require('googleapis')
const docs = require('@googleapis/docs')
const axios = require('axios')
const { TokenaccDB } = require('../../db/lib')

let credentials
if (config.server.env === 'development') {
  credentials = require('../credentials/googleL.json')
} else {
  credentials = require('../credentials/google.json')
}

const client_id = credentials.web.client_id
const client_secret = credentials.web.client_secret
const redirect_uris = credentials.web.redirect_uris
const access_token = 'ya29.a0AWY7Ckm29A5kJVd39e2q67BljiNnqAfEGoiZ0dVRVK4SZhAfjrANJuP8sia1j7S8GJGHQ_4YtPF9OWxIftpYcOGO6qvks41UNICWsy0ecHwpy4QLxYY6B8fMkzgFQMRssl7omI4OBVamv5ygdm0yTzNyMom2aCgYKAY4SARMSFQG1tDrp1x_dWfvMXU-96Z1PLairAg0163'
const refresh_token = '1//09JvILpc-hlBVCgYIARAAGAkSNwF-L9Ir0zj4eea5lg63FTqU0gaBx1AkGVoBl6W_FFPB5JFpOqK7YmmIWvXvVBZpifsdL_0aMGI'

// console.log('config.server.env', config.server.env)
// console.log('client_id', client_id)
// console.log('client_secret', client_secret)
// console.log('redirect_uris', redirect_uris)
// console.log('access_token', access_token)
// console.log('refresh_token', refresh_token)

const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
)
oauth2Client.setCredentials({refresh_token: refresh_token})

const client = docs.docs({
  version: 'v1',
  auth: oauth2Client
})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/drive.file'
]


const getDocs = async ( googleId ) => {
  try {
    const response = await client.documents.get({
      documentId: googleId,
    })
    console.log('responseee')
    return response.data
  } catch (error) {
    console.log('errorrrrrr', error.response.data)
    throw error
  }
}

// const copyDocs = async ( googleId, body ) => {
//   try {
//     var response = await drive.files.copy({
//       'fileId': googleId,
//       'resource': body
//     })

//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

// const updateDocs = async ( googleId ) => {
//   try {
//     const updateResponse = await client.documents.batchUpdate({
//       documentId: googleId,
//       requestBody: {
//         requests: [
//           {
//           replaceAllText: {
//             containsText: {
//               text: "{{C_NOMBRES}}",
//               matchCase: true,
//             },
//             replaceText: "Julio Grados",
//           }
//         }]
//       }
//     })
//   } catch (error) {
//     throw error
//   }
// }

// const exportPDFFile = async ( googleId ) => {
//   try {
//     const response = await drive.files.export(
//       {
//         fileId: googleId,
//         mimeType: 'application/pdf'
//       },
//       { responseType: "arraybuffer" }
//     )
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

const createFile = async (name, value, token) => {
  return new Promise((resolve, reject) => { 
    axios({
      method: "POST",
      url: "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: `${name}.mp3`,
        mimeType: "audio/mpeg",
      }),
    }).then(({ headers: { location } }) => {
      const data = value;
      const fileSize = data.length;
      console.log('location', location)
      axios({
        method: "PUT",
        url: location,
        headers: { "Content-Range": `bytes 0-${fileSize - 1}/${fileSize}` },
        data: data,
      }).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        console.log('error 1', error)
        reject(error);
      });
    }).catch((error) => {
      console.log('error 2', error)
      reject(error);
    });
  })
}

const createToken = async () => {
  try {
    const request = await axios({
      method: "POST",
      url: "https://www.googleapis.com/oauth2/v4/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        client_id: client_id,
        client_secret: client_secret,
        refresh_token: refresh_token,
        grant_type: "refresh_token",
      }),
    })
    
    const data = request.data
    const save = await TokenaccDB.create({
      token: data.access_token,
      refreshToken: refresh_token,
      date: newExpirationDate()
    })
    console.log('save', save)
    console.log("server 74 | data", data.access_token)
    console.log("server data", data)

    return data.access_token
  } catch (error) {
    return error.message
  }
}

const getDocumentToken = async () => {
  const tokenLast = await TokenaccDB.list({
    query: {},
    limit: 1,
    sort: {$natural:-1}
  })
  return tokenLast[0].token
}

const getDocumentTokenExpired = async () => {
  const tokenLast = await TokenaccDB.list({
    query: {},
    limit: 1,
    sort: {$natural:-1}
  })
  console.log('tokenLast', tokenLast)
  if (tokenLast.length) {
    const state = tokenExpired(tokenLast[0])
    return state
  } else {
    return true
  }
}

const tokenExpired = (document) => {
  const now = Date.now()

  const expirationDate = document.date
  const expDate = new Date(expirationDate)

  if (now > expDate.getTime()) {
    return true // token expired
  }

  return false // valid token
}

const newExpirationDate = () => {
  var expiration = new Date()
  expiration.setHours(expiration.getHours() + 1)
  return expiration
}

const getToken = async (code) => {
  console.log('code', code)
  const { tokens } = await oauth2Client.getToken(code)
  console.log('tokens', tokens)
  oauth2Client.setCredentials(tokens)
  return tokens
}

const getCode = async () => {
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent'
  });
  console.log('url', url)
  return url
}

module.exports = {
  getDocs,
  // copyDocs,
  createFile,
  // updateDocs,
  // exportPDFFile,
  getToken,
  getCode,
  createToken,
  getDocumentToken,
  getDocumentTokenExpired
}