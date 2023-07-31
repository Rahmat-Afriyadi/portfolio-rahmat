require("dotenv").config();
const nodemailer = require("nodemailer");
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { OAuth2 } = publicRuntimeConfig;

export default function handler(req, res) {
  const { name, from, subject, text } = req.body;

  const mailTransporter = nodemailer.createTransport(OAuth2);

  var mainOptions = {
    from: `${name} <${from}>`,
    to: "afriyadi.arfa@gmail.com",
    subject,
    text: `From: ${from} \nName: ${name} \n${text}`,
  };
  mailTransporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(201).json({ err });
    } else {
      console.log("Message sent: " + info.response);
    }
  });

  res.status(200).json({ name: "John Doe" });
}
