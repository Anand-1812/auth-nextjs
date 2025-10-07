import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendMail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId,
        { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }
      )
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId,
        { forgotPasswordToken: hashedToken, forgotPasswordExpiryToken: Date.now() + 3600000 }
      )
    }

    // send mail using mailtrap
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from : "anand@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset you passowod",
      html: `
        <p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a>
          to ${emailType === "VERIFY" ? "Verify your email": "Reset your password"}
        </p>`
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}
