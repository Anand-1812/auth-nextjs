import nodemailer from "nodemailer";

export const sendMail = async ({
  email,
  emailType,
  token,
}: {
  email: string;
  emailType: "VERIFY" | "RESET";
  token: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const link = `${process.env.DOMAIN}/${
      emailType === "VERIFY" ? "verifyEmail" : "resetpassword"
    }?token=${token}`;

    const mailOptions = {
      from: "no-reply@yourapp.com",
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Verify your email"
          : "Reset your password",
      html: `<p>
        Click <a href="${link}">here</a> to ${
          emailType === "VERIFY"
            ? "verify your email"
            : "reset your password"
        }.
      </p>`,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

