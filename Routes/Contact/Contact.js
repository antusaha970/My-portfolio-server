const express = require("express");
const nodemailer = require("nodemailer");
const messageFunc = require("./MessageFunction");
const router = express.Router();

router.post("/contact/message", (req, res) => {
  const { email, message } = req.body;
  const mailToSent = messageFunc(message, email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.GMAIL_ID}`,
      pass: `${process.env.GMAIL_PASS}`,
    },
  });

  const mailOptions = {
    from: `${process.env.GMAIL_ID}`,
    to: "antusaha970@gmail.com",
    subject: "Message form your portfolio",
    html: `${mailToSent}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(404).send(false);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send(true);
      // do something useful
    }
  });
});

module.exports = router;
