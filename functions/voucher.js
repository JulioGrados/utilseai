const payloadToData = payload => {
  return {
    ...payload,
    assignedName: payload.assigned ? payload.assigned.username : '',
    linkedName: payload.linked ? payload.linked.names : '',
    bankName: payload.bank ? payload.bank.name : '',
    currency: payload.money ? payload.money.code : '',
    valid: payload.validation ? 'Sí' : 'No'
  }
}

const dataToPayload = data => {
  return {
    code: data.code || undefined,
    amount: data.amount || undefined,
    createdAt: data.createdAt || undefined,
    date: data.date || undefined,
    assigned: data.assigned
      ? {
        username: data.assigned.username || undefined,
        ref: data.assigned._id || data.assigned.ref || undefined
      }
      : undefined,
    currency: data.currency || undefined,
    validation: data.validation || undefined,
    validator: data.validator
      ? {
        username: data.validator.username || undefined,
        ref: data.validator._id || data.validator.ref || undefined
      }
      : undefined,
    operationNumber: data.operationNumber || undefined,
    residue: data.residue || undefined,
    bank: data.bank || undefined,
    methodName: data.methodName || undefined,
    order: data.order || undefined,
    money: data.money || undefined
  }
}

module.exports = {
  payloadToData,
  dataToPayload
}
