const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

exports.sendEmail = (req, res) => {


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
            to: 'suja312998@gmail.com',
            cc: "19511055@student.bup.edu.bd",
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
}