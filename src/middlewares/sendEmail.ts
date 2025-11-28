import nodemailer from "nodemailer";
import env from "../config/env.js";
import type { EmailInfoType } from "../types.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: env.SMTP_USERNAME,
    pass: env.SMTP_PASSWORD,
  },
});

const sendEmail = async (emailInfo: EmailInfoType) => {
  try {
    const info = await transporter.sendMail({
      from: "<ehmasuk@gmail.com>",
      to: emailInfo.reciever,
      subject: emailInfo.subject,
      html: emailInfo.html,
    });

    return info;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
