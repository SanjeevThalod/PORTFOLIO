import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});

const sendEmail = async(req,res) => {
    try {
        const mailOptions = {
            from:process.env.EMAIL,
            to:process.env.MAIL,
            subject:req.body.subject,
            html: `
        <p><strong>From:</strong> ${req.body.text.from}</p>
        <p><strong>Name:</strong> ${req.body.text.name}</p>
        <p><strong>Body:</strong> ${req.body.text.body}</p>
    `
        }
        const result = await transporter.sendMail(mailOptions);
        res.status(200).send( {success:true,result});
    } catch (error) {
        res.status(400).send({success:false,message:`Error sending mail: ${error}`});
    }
}

export default sendEmail;