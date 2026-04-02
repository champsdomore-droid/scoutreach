const nodemailer = require('nodemailer');

// Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.argv[2], // Your Gmail address
    pass: process.argv[3]  // App-specific password
  }
});

const to = process.argv[4];
const subject = process.argv[5];
const body = process.argv.slice(6).join(' ');

if (!to || !subject || !body) {
  console.log('Usage: node send-email.js <your-email> <app-password> <to-email> <subject> <body>');
  process.exit(1);
}

transporter.sendMail({
  from: process.argv[2],
  to: to,
  subject: subject,
  text: body
}, (err, info) => {
  if (err) {
    console.log('Error:', err.message);
    process.exit(1);
  }
  console.log('Email sent:', info.response);
});