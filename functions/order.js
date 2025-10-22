const payloadToData = payload => {
  return {
    ...payload,
    annular: payload.annular ? true : false,
    statusOrder: payload.status === 'Por Pagar' ? 'Deuda' : 'Pago',
    linkedEmail: payload.student ? payload.student.ref ? payload.student.ref.email : payload.student.email : '',
    linkedFirstName: payload.student ? payload.student.ref ? payload.student.ref.firstName : payload.student.names : '',
    linkedLastName: payload.student ? payload.student.ref ? payload.student.ref.lastName : payload.student.names : '',
    linkedMobile: payload.student ? payload.student.ref ? payload.student.ref.mobile : '' : '',
    linkedDNI: payload.student ? payload.student.ref ? payload.student.ref.dni : '' : '',
    courseId: payload.course ? payload.course.ref ? payload.course.ref._id : '' : '',
    courseMoodleId: payload.course ? payload.course.ref ? payload.course.ref.moodleId : '' : '',
    courseName: payload.course ? payload.course.ref ? payload.course.ref.name : '' : '',
    agreement: payload.course ? payload.course.ref ? payload.course.ref.agreement && payload.course.ref.agreement.institution : '' : '',
    voucherCode: payload.voucher ? payload.voucher.ref ? payload.voucher.ref.code : payload.voucher.code : '',
    voucherDate: payload.voucher ? payload.voucher.ref ? payload.voucher.ref.date : '' : '',
    voucherBank: payload.voucher ? payload.voucher.ref ? payload.voucher.ref.bank.name : payload.voucher.bank.name : '',
    voucherOperation: payload.voucher ? payload.voucher.ref ? payload.voucher.ref.operationNumber : payload.voucher.operationNumber : '',
    assessorUsername: payload.assigned ? payload.assigned.username : '',
    receiptType: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.isBill ? 'Factura' : 'Boleta de venta' : '' : '',
    receiptDate: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.date : '' : '',
    receiptNames: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.names : '' : '',
    receiptDNI: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.dni : '' : '',
    receiptBusinessName: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.businessName : '' : '',
    receiptRUC: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.ruc : '' : '',
    receiptSerie: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.serie : '' : '',
    receiptSequential: payload.receipt ? payload.receipt.ref ? payload.receipt.ref.sequential : '' : '',
    currency: payload.money ? payload.money.code : ''
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
