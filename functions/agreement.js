const payloadToData = payload => {
  return {
    ...payload,
    dean: payload.dean ? payload.dean.username : ''
  }
}

const dataToPayload = data => {
  return {
    institution: data.institution || undefined,
    slug: data.slug || undefined,
    isHidden: data.isHidden || false,
    sizeX: data.sizeX || false,
    sizeY: data.sizeY || false,
    template: data.template || false,
    description: data.description || false,
    hidden: data.hidden || undefined,
    image: data.image || undefined,
    dean: data.dean
      ? {
          names: data.dean.names || undefined,
          moodleId: data.dean.moodleId || undefined,
          username: data.dean.username || undefined,
          ref: data.dean._id || data.dean.ref || undefined
        }
      : undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
