const nodemailer = require("nodemailer");

const mailSender = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const message = {
    from: '" From SP" <sprwanda74@gmail.com', // sender address
    to: options.email, // email receivers
    subject: "SP Services", // Subject line
    text:"Thank you for your kind request; someone will contact you shortly to assist you.",
  };
  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};
module.exports = mailSender;
