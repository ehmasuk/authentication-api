const { smtpPassword, smtpUsername } = require("../env");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

const sendEmail = async (emailInfo) => {
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

module.exports = sendEmail;
