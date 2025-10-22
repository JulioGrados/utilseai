const sendgrid = require('@sendgrid/mail')
const keySG = require('config').sendgrid.key

sendgrid.setApiKey(keySG)

const brevo = require('@getbrevo/brevo')
let defaultClient = brevo.ApiClient.instance

let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = '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'


const sendEmail = async ({ to, cc, from, fromname, subject, html, args, attachments }) => {
  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to
          },
          {
            email: cc
          },
        ],
        subject: subject,
        custom_args: args
      }
    ],
    from: {
      email: from,
      name: fromname
    },
    attachments: attachments,
    content: [
      {
        type: 'text/html',
        value: html
      }
    ]
  }

  try {
    console.log('send')
    await sendgrid.send(msg)
  } catch (err) {
    console.error(err.toString())
  }
}

const sendEmailOnly = async ({ to, from, fromname, subject, html, args, attachments }) => {
  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to,
          }
        ]
      }
    ],
    from: {
      email: from,
      name: 'Escuela Americana de Innovación'
    },
    subject: subject,
    attachments: attachments,
    content: [
      {
        type: 'text/html',
        value: html
      }
    ]
  }

  try {
    console.log('send')
    await sendgrid.send(msg)
  } catch (err) {
    console.error(err.toString())
  }
}


const sendSimple = async ({ to, from, fromname, subject, html, args }) => {
  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to
          }
        ],
        subject: subject,
        custom_args: args
      }
    ],
    from: {
      email: from,
      name: fromname
    },
    content: [
      {
        type: 'text/html',
        value: html
      }
    ]
  }

  try {
    console.log('send')
    await sendgrid
      .send(msg)
      .then(() => {
        console.log('se envio el email con exito')
        return true
      })
      .catch(err => {
        console.log(err)
        err && err.response && err.response.body && console.log(err.response.body)
      })
    return true
  } catch (err) {
    console.error(err.toString())
    return false
  }
}

const sendCrm = async ({ to, from, fromname, subject, html, args }) => {
  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to
          }
        ],
        subject: subject,
        custom_args: args
      }
    ],
    from: {
      email: 'cursos@eai.edu.pe',
      name: 'Escuela Americana de Innovación'
    },
    content: [
      {
        type: 'text/html',
        value: html
      }
    ]
  }

  try {
    console.log('send')
    await sendgrid.send(msg)
    return true
  } catch (err) {
    console.error(err.toString())
    return false
  }
}

const sendMailTemplate = async ({
  to,
  sender,
  subject,
  unique,
  attachments,
  content
}) => {
  let apiInstance = new brevo.TransactionalEmailsApi();
  let sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = content;
  sendSmtpEmail.sender = sender;
  sendSmtpEmail.to = [
    { "email": to }
  ];
  sendSmtpEmail.headers = { "id": unique.toString() };
  if (attachments) {
    sendSmtpEmail.attachment = attachments
  }

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
    console.error(error);
  });
}

const sendMailTemplateOnly = async ({
  substitutions,
  to,
  from,
  fromname,
  templateId,
  args
}) => {
  sendgrid.setSubstitutionWrappers('{{', '}}') // Configure the substitution tag

  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to
          }
        ],
        subject: 'Email Dinamic',
        custom_args: args
      }
    ],
    from: {
      email: from,
      name: fromname
    },
    content: [
      {
        type: 'text/html',
        value: 'Hola'
      }
    ],
    dynamic_template_data: substitutions,
    template_id: templateId
  }
  console.log('msg', msg)
  await sendgrid
    .send(msg)
    .then(() => {
      console.log('se envio el email con exito')
      return true
    })
    .catch(err => {
      console.log(err)
      err && err.response && err.response.body && console.log(err.response.body)
    })
}

module.exports = {
  sendEmail,
  sendEmailOnly,
  sendSimple,
  sendMailTemplate,
  sendMailTemplateOnly,
  sendCrm
}
