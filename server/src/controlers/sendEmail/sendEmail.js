const nodemailer = require('nodemailer');
const schedule = require('node-schedule');


let toEmail

exports.passdata = (emails) => {
    toEmail = emails
    //console.log("........."+toEmail)
}

exports.sendEmail = (req, res) => {

    const { to, cc, bcc, subject, text, value } = req.body
    console.log(req.body)
    console.log("sendEmail......" + toEmail)

    const newDate = Date.now() + 6 * 1000


    const sendEmails = () => {
        console.log("setTimeOut......" + toEmail)
        const emails=to.concat(toEmail)
        schedule.scheduleJob(newDate, () => {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASS
                }
            });

            const mailOptions = {
                from: 'suja250639@gmail.com',
                to: emails,
                cc: cc,
                bcc: bcc,
                subject: subject,
                text: text
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return res.status(200).json({ message: 'Email sent: ' + info.response });
                }
            });
        });
    }

    setTimeout(sendEmails, 2000)


}



exports.profile = (req, res) => {
    return res.status(200).json("profile")
}
