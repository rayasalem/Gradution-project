import nodemailer, { SendMailOptions } from "nodemailer";
import { SentMessageInfo } from "nodemailer";

async function sendEmail(dest: string, subject: string, message: string): Promise<SentMessageInfo> {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL, 
        pass: process.env.SENDER_EMAIL_PASSWORD, 
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"DEVLOOM" <${process.env.SENDER_EMAIL}>`, 
      to: [dest], 
      subject, 
      html: message, 
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendEmail;