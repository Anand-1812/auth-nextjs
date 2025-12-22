import nodemailer from 'nodemailer';
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendMail = async ({email, emailType, userId}: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPassToken: hashedToken,
        forgotPassExpiry: Date.now() + 3600000
      });
    }

    let transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    const mailOptions = {
      from: 'youremail@example.com',
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      // Note: We use the hashedToken in the link
      html: `<p>Click
                <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyEmail" : "resetpassword"}?token=${hashedToken}">
                here
              </a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            </p>`
    };

    const mailResponse = await transporter.sendMail(mailOptions)

    return mailResponse;


  } catch (error: any) {
    throw new Error(error.message)
  }
}
