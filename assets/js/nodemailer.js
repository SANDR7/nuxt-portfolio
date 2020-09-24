'use strict'
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())


app.post('/', function (req, res) {

  let emailInfo = req.body.emailInfo
  let emailProvider = req.body.emailProvider
  sendMail(emailInfo, emailProvider)
  res.status(200).json({ 'message': 'Your mail send successfully' })
  
})
module.exports = {
  path: 'assets/js/nodemailer.js',
  handler: app
}
async function sendMail(emailInfo, emailProvider) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailProvider.username, // generated ethereal user
      pass: emailProvider.password, // generated ethereal password
    },
  });
  const output = `<!doctype html>
  <h1>You've received a message from '${emailInfo.name}'</h1>
  <p>General Client Details</p>
  <ul>
    <li>Name: ${emailInfo.name}</li>
    <li>Email: ${emailInfo.email}</li>
  </ul>
  <h3>The message</h3>
  <p>${emailInfo.message}</p>
`;
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${emailInfo.name} <clients@sandervanast.com>`, // sender address
    to: emailProvider.username, // list of receivers
    subject: `Message from ${emailInfo.name}`, // Subject line
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
sendMail().catch(console.error);
