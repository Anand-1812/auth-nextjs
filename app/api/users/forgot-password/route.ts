import crypto from "crypto";
import { connect } from "@/db/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const { email } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "If the email exists, a reset link will be sent" },
        { status: 200 }
      );
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.forgotPassToken = hashedToken;
    user.forgotPassExpiry = Date.now() + 15 * 60 * 1000;
    await user.save();

    await sendMail({
      email,
      emailType: "RESET",
      token: resetToken,
    });

    return NextResponse.json(
      { message: "Password reset link sent" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

