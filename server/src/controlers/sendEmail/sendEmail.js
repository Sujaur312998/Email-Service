const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

exports.sendEmail = (req, res) => {
    const {to, cc, bcc, subject, text}= req.body
    console.log(to, cc, bcc, subject, text)
    const newDate = Date.now() + 60 * 100

    schedule.scheduleJob(newDate, ()=> {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
    
        const mailOptions = {
            from: 'suja250639@gmail.com',
            to: to,
            cc: cc,
            bcc:bcc,
            subject: subject,
            text: text
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                return res.status(200).json({message:'Email sent: ' + info.response});
            }
        });
    });
}



exports.profile=(req,res)=>{
    return res.status(200).json("profile")
}
