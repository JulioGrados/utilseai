const stringSimilarity = require('string-similarity')

const compareSimilarity = (input1, input2) => {
  if (!input1 && !input2) {
    return 1
  } else if (!input1 || !input2) {
    return 0
  }

  input1 = input1
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
  input2 = input2
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  const words = input1.split(' ')
  let similarity = 0
  if (words.length < 3) {
    words.forEach(word => {
      if (word.length > 2 && input2.includes(word)) {
        if (similarity === 0) {
          similarity = 0.51
        } else {
          similarity += 0.1
        }
      }
    })
  } else {
    similarity = stringSimilarity.compareTwoStrings(input1, input2)
  }

  return similarity
}

const compareOnlySimilarity = (input1, input2) => {
  if (!input1 && !input2) {
    return 1
  } else if (!input1 || !input2) {
    return 0
  }

  input1 = input1
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
  input2 = input2
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  let similarity = stringSimilarity.compareTwoStrings(input1, input2)

  return similarity
}

module.exports = {
  compareSimilarity,
  compareOnlySimilarity
}
