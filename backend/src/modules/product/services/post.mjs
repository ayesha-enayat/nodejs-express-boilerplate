import { addData } from '../db/index.mjs';
import nodemailer from 'nodemailer';


//make this sendEmail Function in Helper
const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "your gmail ",
            pass: " your app password",
        },
    });
    const mailOptions = {
        from: 'your email',
        to: 'recipient email',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });

}


const postData = async (data) => {
    sendEmail();
    return await addData(data);
}

export default postData;