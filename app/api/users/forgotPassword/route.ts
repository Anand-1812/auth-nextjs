import { connect } from "@/db/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })

    return NextResponse.json({
      message: "email confirm",
      success: true,
    });

  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 })
  }
}
