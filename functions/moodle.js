const moodle_client = require('moodle-client')
const { wwwroot, token, service } = require('config').moodle

const init = moodle_client.init({
  wwwroot,
  token,
  service
})

const {
  getCourses,
  enrolCourse,
  createUser,
  userField,
  coursesUser,
  gradeUser,
  enrolGetCourse,
  quizGetCourse,
  assignGetCourse,
  moduleGetCourse,
  feedbackGetQuiz,
  feedbackListCourse
} = require('config').moodle.functions

const actionMoodle = (method, wsfunction, args = {}) => {
  return init.then(function (client) {
    return client
      .call({
        wsfunction,
        method,
        args
      })
      .then(function (info) {
        return info
      })
      .catch(function (err) {
        throw err
      })
  })
}

const getUsersForField = async (name, value) => {
  const field = name // 'email'
  const values = [value] // ['Halanoca29@hotmail.com']
  console.log('utils getUsersForField', name, value)
  // Las variables enviadas a la función deben ser field con el atributo y values con un array que contenga el valor del atributo
  console.log('field', field)
  console.log('values', values)
  try {
    const userMoodle = await actionMoodle('GET', userField, {
      field,
      values
    })

    console.log('userMoodle', userMoodle)
    return userMoodle[0]
  } catch (error) {
    throw error
  }
}

const searchUsername = async ({ username }) => {
  console.log('utils searchUsername', username)
  try {
    const user = await getUsersForField('username', username)
    console.log('utils user', user)
    return user
  } catch (error) {
    throw error
  }
}

const searchEmail = async ( {email} ) => {
  console.log('utils searchEmail', email)
  try {
    const user = await getUsersForField('email', email)
    console.log('utils user', user)
    return user
  } catch (error) {
    throw error
  }
}

const searchID = async ( {id} ) => {
  console.log('utils searchID', id)
  try {
    const user = await getUsersForField('id', id )
    console.log('utils user', user)
    return user
  } catch (error) {
    throw error
  }
}

const searchUser = async ({username, email}) => {
  console.log('utils searchUser', username, email)
  let user
  if (username) {
    user = await getUsersForField('username', username)
    if (user) {
      return { type: 'username', user }
    }
  }
  if (email) {
    user = await getUsersForField('email', email)
    if (user) {
      return { type: 'email', user }
    }
  }
  console.log('utils user', user)
  return { user: undefined }
}

const getCoursesMoodle = async () => {
  console.log('utils getCoursesMoodle')
  try {
    const coursesMoodle = await actionMoodle('GET', getCourses)
    console.log('utils coursesMoodle', coursesMoodle)
    return coursesMoodle
  } catch (error) {
    throw error
  }
}

const enrolCourseMoodle = async (enrol) => {
  console.log('utils enrolCourseMoodle', enrol)
  try {
    const enrolMoodle = await actionMoodle('POST', enrolCourse, {
      enrolments: [enrol]
    })
    console.log('utils enrolMoodle', enrolMoodle)
    return enrolMoodle
  } catch (error) {
    throw error
  }
}

const createUserMoodle = async (dataUser) => {
  console.log('utils createUserMoodle', dataUser)
  try {
    const userMoodle = await actionMoodle('POST', createUser, {
      users: [dataUser]
    })
    console.log('utils userMoodle', userMoodle)
    return userMoodle
  } catch (error) {
    throw error
  }
}

const coursesForUserMoodle = async (userId) => {
  console.log('utils coursesForUserMoodle', userId)
  try {
    const coursesForUser = await actionMoodle('GET', coursesUser, {
      userid: userId
    })
    console.log('utils coursesForUser', coursesForUser)
    return coursesForUser
  } catch (error) {
    throw error
  }
}

const gradeUserMoodle = async (userId, courseId) => {
  console.log('utils gradeUserMoodle', userId, courseId)
  try {
    const contents = await actionMoodle('POST', gradeUser, {
      userid: userId,
      courseid: courseId
    })
    console.log('utils contents', contents)
    return contents
  } catch (error) {
    throw error
  }
}

const enrolGetCourseMoodle = async (courseId) => {
  console.log('utils enrolGetCourseMoodle', courseId)
  try {
    const usersMoodle = await actionMoodle('POST', enrolGetCourse, {
      courseid: courseId
    })
    console.log('utils usersMoodle', usersMoodle)
    return usersMoodle
  } catch (error) {
    throw error
  }
}

const quizGetCourseMoodle = async (courseId) => {
  console.log('utils quizGetCourseMoodle', courseId)
  try {
    const evaluations = await actionMoodle('POST', quizGetCourse, {
      courseids: [courseId]
    })
    console.log('utils evaluations', evaluations)
    return evaluations
  } catch (error) {
    throw error
  }
}

const assignGetCourseMoodle = async (courseId) => {
  console.log('utils assignGetCourseMoodle', courseId)
  try {
    const evaluations = await actionMoodle('POST', assignGetCourse, {
      courseids: [courseId]
    })
    console.log('utils evaluations', evaluations)
    return evaluations
  } catch (error) {
    throw error
  }
}

const moduleGetCourseMoodle = async (courseId) => {
  console.log('utils moduleGetCourseMoodle', courseId)
  try {
    const feedBackModule = await actionMoodle('GET', moduleGetCourse, {
      courseid: courseId
    })
    console.log('utils feedBackModule', feedBackModule)
    return feedBackModule
  } catch (error) {
    throw error
  }
}

const feedbackGetQuizMoodle = async (feedback) => {
  console.log('utils feedbackGetQuizMoodle', feedback)
  try {
    const feedBackModule = await actionMoodle('GET', feedbackGetQuiz, {
      feedbackid: feedback
    })
    console.log('utils feedBackModule', feedBackModule)
    return feedBackModule
  } catch (error) {
    throw error
  }
}

const feedbackListCourseMoodle = async (courseId) => {
  console.log('utils feedbackListCourseMoodle', courseId)
  try {
    const feedBackCourse = await actionMoodle('GET', feedbackListCourse, {
      courseids: [courseId]
    })
    console.log('utils feedBackCourse', feedBackCourse)
    return feedBackCourse
  } catch (error) {
    throw error
  }
}

const deleteUsersMoodle = async (moodleId) => {
  console.log('utils deleteUsersMoodle', moodleId) 
  try {
    const userDelete = await actionMoodle('POST', deleteUsers, {
      userids: [moodleId]
    })
    console.log('utils userDelete', userDelete)
    return userDelete
  } catch (error) {
    throw error
  }
}

module.exports = {
  assignGetCourseMoodle,
  searchUsername,
  searchEmail,
  searchID,
  searchUser,
  getCoursesMoodle,
  getUsersForField,
  enrolCourseMoodle,
  createUserMoodle,
  coursesForUserMoodle,
  gradeUserMoodle,
  moduleGetCourseMoodle,
  enrolGetCourseMoodle,
  quizGetCourseMoodle,
  feedbackGetQuizMoodle,
  feedbackListCourseMoodle,
  deleteUsersMoodle
}