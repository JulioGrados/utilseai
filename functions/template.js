const payloadToData = payload => {
  return {
    ...payload,
    authorName: payload.author ? payload.author.username : ''
  }
}

const dataToPayload = data => {
  return {
    name: data.name || undefined,
    area: data.area || undefined,
    content: data.content || undefined,
    author: data.author
      ? {
          username: data.author.username || undefined,
          ref: data.author._id || data.author.ref || undefined
        }
      : undefined,
    type: data.type || undefined,
    description: data.description || undefined,
    from: data.from || undefined,
    sender: data.sender || undefined,
    preheader: data.preheader || undefined,
    variables: data.variables || undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
