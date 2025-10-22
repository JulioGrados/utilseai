'use strict'

const removeSpaceWhite = text => {
  const final = text.replace(/ /g, '')
  return final
}

module.exports = {
  removeSpaceWhite
}