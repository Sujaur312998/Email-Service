const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const TableSchema = require('../../model/tableSchema');


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
        let id;
        console.log("setTimeOut......" + toEmail)
        const emails = to.concat(toEmail)
        const emailArr = Array(emails)

/*         const _tableData = new TableSchema({ emails: emailArr, emailSend: false })
        _tableData.save()
            .then(saved => id=saved._id)
            .catch(err => console.log("err while saving", err)); */

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

            transporter.sendMail(mailOptions, async function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(info)

                    const _tableData = new TableSchema({ emails: info.accepted, emailSend: true })
                    await _tableData.save()

                    return res.status(200).json({
                        message: info.response,
                        data: emails
                    });
                }
            });
        });
    }

    setTimeout(sendEmails, 3000)
    
}



exports.profile = (req, res) => {
    return res.status(200).json("profile")
}
