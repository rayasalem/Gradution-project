import nodemailer, { SendMailOptions } from "nodemailer";
import { SentMessageInfo } from "nodemailer";

async function sendEmail(dest: string, subject: string, message: string): Promise<SentMessageInfo> {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL, // Your Gmail email address
        pass: process.env.SENDER_EMAIL_PASSWORD, // Your Gmail password or app-specific password
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"DEVLOOM" <${process.env.SENDER_EMAIL}>`, // Sender's name and email address
      to: [dest], // Recipient's email address as an array
      subject, // Email subject
      html: message, // HTML content of the email
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