import { connect } from "@/db/connectDB";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto"

export async function POST(request: NextRequest) {
  await connect();

  try {

    const reqBody = await request.json();
    const { token, password } = reqBody;

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 }
      );
    }

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      forgotPassToken: hashedToken,
      forgotPassExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired reset link" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.forgotPassToken = undefined;
    user.forgotPassExpiry = undefined;

    await user.save();

    return NextResponse.json(
      { message: "Password reset successful" },
      { status: 200 }
    );

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
