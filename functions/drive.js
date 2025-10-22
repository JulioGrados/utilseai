const { google } = require('googleapis')
const slides = google.slides('v1')
const docs = require('@googleapis/docs')

const id = require('config').google.id
const secret = require('config').google.secret
const url = require('config').google.url
const token = require('config').google.token

const oauth2Client = new google.auth.OAuth2(
  id,
  secret,
  url
)
oauth2Client.setCredentials({refresh_token: token})

const client = docs.docs({
  version: 'v1',
  auth: oauth2Client
})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

const getDocs = async ( googleId ) => {
  try {
    const response = await client.documents.get({
      documentId: googleId
    })

    return response.data
  } catch (error) {
    throw error
  }
}

const getSlides = async (googleId) => {
  try {
    const response = await slides.presentations.get({
      auth: oauth2Client,
      presentationId: googleId
    })
    return response.data
  } catch (error) {
    throw error
  }
}

const copyDocs = async ( googleId, body ) => {
  try {
    var response = await drive.files.copy({
      'fileId': googleId,
      'resource': body
    })

    return response.data
  } catch (error) {
    throw error
  }
}

const updateSlides = async (googleId, user, course, start, end) => {
  try {
    const slideRequests = []
    slideRequests.push({
      replaceAllText: {
        replaceText: `${user.lastName}, ${user.firstName}`,
        containsText: { text: '{{C_NOMBRES}}' }
      }
    })
    slideRequests.push({
      replaceAllText: {
        replaceText: `${course.shortName}`,
        containsText: { text: "{{CURSO_EN_CAMEL}}", }
      }
    })
    slideRequests.push({
      replaceAllText: {
        replaceText: `${course.academicHours}`,
        containsText: { text: "{{DURACIÓN}}", }
      }
    })
    slideRequests.push({
      replaceAllText: {
        replaceText: `${start}`,
        containsText: { text: "{{DEL}}", }
      }
    })
    slideRequests.push({
      replaceAllText: {
        replaceText: `${end}`,
        containsText: { text: "{{AL}}", }
      }
    })
    const updateResponse = await slides.presentations.batchUpdate({
      auth: oauth2Client,
      presentationId: googleId,
      resource: {
        requests: slideRequests
      }
    })
    return updateResponse
  } catch (error) {
    throw error
  }
}

const updateDoc = async ( googleId, user, course, certificate, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs3 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs4 = async (googleId, user, course, certificate, modules, number, start, end) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs5 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs6 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs7 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs8 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs10 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs11 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].score}`,
            }
          }
          ,
          {
            replaceAllText: {
              containsText: {
                text: "{{tema11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs12 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs16 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema13}}",
                matchCase: true,
              },
              replaceText: `${modules[12].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m13}}",
                matchCase: true,
              },
              replaceText: `${modules[12].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema14}}",
                matchCase: true,
              },
              replaceText: `${modules[13].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m14}}",
                matchCase: true,
              },
              replaceText: `${modules[13].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema15}}",
                matchCase: true,
              },
              replaceText: `${modules[14].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m15}}",
                matchCase: true,
              },
              replaceText: `${modules[14].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema16}}",
                matchCase: true,
              },
              replaceText: `${modules[15].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m16}}",
                matchCase: true,
              },
              replaceText: `${modules[15].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const updateDocs25 = async ( googleId, user, course, certificate, modules, number, start, end ) => {
  try {
    const updateResponse = await client.documents.batchUpdate({
      documentId: googleId,
      requestBody: {
        requests: [
          {
            replaceAllText: {
              containsText: {
                text: "{{C_NOMBRES}}",
                matchCase: true,
              },
              replaceText: `${user.lastName}, ${user.firstName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DNI}}",
                matchCase: true,
              },
              replaceText: `${user.dni}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CURSO_EN_CAMEL}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{C_CURSO}}",
                matchCase: true,
              },
              replaceText: `${course.shortName}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DURACIÓN}}",
                matchCase: true,
              },
              replaceText: `${course.academicHours}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{CÓDIGO}}",
                matchCase: true,
              },
              replaceText: `${certificate.shortCode}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{DEL}}",
                matchCase: true,
              },
              replaceText: `${start}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{AL}}",
                matchCase: true,
              },
              replaceText: `${end}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{N°}}",
                matchCase: true,
              },
              replaceText: `${number}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m1}}",
                matchCase: true,
              },
              replaceText: `${modules[0].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m2}}",
                matchCase: true,
              },
              replaceText: `${modules[1].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m3}}",
                matchCase: true,
              },
              replaceText: `${modules[2].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m4}}",
                matchCase: true,
              },
              replaceText: `${modules[3].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m5}}",
                matchCase: true,
              },
              replaceText: `${modules[4].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m6}}",
                matchCase: true,
              },
              replaceText: `${modules[5].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m7}}",
                matchCase: true,
              },
              replaceText: `${modules[6].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m8}}",
                matchCase: true,
              },
              replaceText: `${modules[7].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m9}}",
                matchCase: true,
              },
              replaceText: `${modules[8].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m10}}",
                matchCase: true,
              },
              replaceText: `${modules[9].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m11}}",
                matchCase: true,
              },
              replaceText: `${modules[10].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m12}}",
                matchCase: true,
              },
              replaceText: `${modules[11].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema13}}",
                matchCase: true,
              },
              replaceText: `${modules[12].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m13}}",
                matchCase: true,
              },
              replaceText: `${modules[12].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema14}}",
                matchCase: true,
              },
              replaceText: `${modules[13].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m14}}",
                matchCase: true,
              },
              replaceText: `${modules[13].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema15}}",
                matchCase: true,
              },
              replaceText: `${modules[14].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m15}}",
                matchCase: true,
              },
              replaceText: `${modules[14].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema16}}",
                matchCase: true,
              },
              replaceText: `${modules[15].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m16}}",
                matchCase: true,
              },
              replaceText: `${modules[15].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema17}}",
                matchCase: true,
              },
              replaceText: `${modules[16].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m17}}",
                matchCase: true,
              },
              replaceText: `${modules[16].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema18}}",
                matchCase: true,
              },
              replaceText: `${modules[17].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m18}}",
                matchCase: true,
              },
              replaceText: `${modules[17].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema19}}",
                matchCase: true,
              },
              replaceText: `${modules[18].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m19}}",
                matchCase: true,
              },
              replaceText: `${modules[18].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema20}}",
                matchCase: true,
              },
              replaceText: `${modules[19].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m20}}",
                matchCase: true,
              },
              replaceText: `${modules[19].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema21}}",
                matchCase: true,
              },
              replaceText: `${modules[20].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m21}}",
                matchCase: true,
              },
              replaceText: `${modules[20].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema22}}",
                matchCase: true,
              },
              replaceText: `${modules[21].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m22}}",
                matchCase: true,
              },
              replaceText: `${modules[21].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema23}}",
                matchCase: true,
              },
              replaceText: `${modules[22].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m23}}",
                matchCase: true,
              },
              replaceText: `${modules[22].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema24}}",
                matchCase: true,
              },
              replaceText: `${modules[23].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m24}}",
                matchCase: true,
              },
              replaceText: `${modules[23].score}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{tema25}}",
                matchCase: true,
              },
              replaceText: `${modules[24].name}`,
            }
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{m25}}",
                matchCase: true,
              },
              replaceText: `${modules[24].score}`,
            }
          }
        ]
      }
    })
  } catch (error) {
    throw error
  }
}

const exportPDFFile = async ( googleId ) => {
  try {
    const response = await drive.files.export(
      {
        fileId: googleId,
        mimeType: 'application/pdf'
      },
      { responseType: "arraybuffer" }
    )
    return response.data
  } catch (error) {
    throw error
  }
}

const exportPNGSlide = async ( googleId ) => {
  try {
    const IMAGE_SIZE = 'LARGE'

    const pageObjects = await slides.presentations.get({
      auth: oauth2Client,
      presentationId: googleId,
      fields: 'slides/objectId',
    })
    const objectId = pageObjects.data.slides[0].objectId

    const contentUrl = await slides.presentations.pages.getThumbnail({
      auth: oauth2Client,
      presentationId: googleId,
      pageObjectId: objectId,
      'thumbnailProperties.mimeType': 'PNG',
      'thumbnailProperties.thumbnailSize': IMAGE_SIZE,
    })
    console.log('contentUrl', contentUrl)
    // const response = await drive.files.export({
    //   fileId: googleId,
    //   mimeType: 'imagen/svg+xml',
    // });
    console.log('contentUrl.data.contentUrl', contentUrl.data.contentUrl)
    return contentUrl.data.contentUrl
  } catch (error) {
    throw error
  }
}

const deleteFile = async ( googleId ) => {
  try {
    const response = await drive.files.delete({
      'fileId': googleId
    })
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  getDocs,
  getSlides,
  copyDocs,
  updateSlides,
  updateDoc,
  updateDocs3,
  updateDocs4,
  updateDocs5,
  updateDocs6,
  updateDocs7,
  updateDocs8,
  updateDocs10,
  updateDocs11,
  updateDocs12,
  updateDocs16,
  updateDocs25,
  exportPDFFile,
  exportPNGSlide,
  deleteFile
}