import { connect } from "@/db/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    // DEBUG 1: Check what the server actually received
    console.log("--------------------------------");
    console.log("1. Server received token:", token);

    // DEBUG 2: Check specifically for this token in DB (ignoring expiry for a moment to test)
    const userWithTokenOnly = await User.findOne({ verifyToken: token });

    if (!userWithTokenOnly) {
      console.log("2. Database Search: No user found with this exact token string.");
      console.log("   Potential Cause: URL Encoding characters (like %20 instead of spaces).");
    } else {
      console.log("2. Database Search: User found! Token matches.");
      console.log("   User Email:", userWithTokenOnly.email);
      console.log("   Expiry in DB:", userWithTokenOnly.verifyTokenExpiry);
      console.log("   Current Time:", new Date());

      // Check if expired
      if (new Date(userWithTokenOnly.verifyTokenExpiry) < new Date()) {
        console.log("   RESULT: Token is EXPIRED.");
      } else {
        console.log("   RESULT: Token is VALID.");
      }
    }
    console.log("--------------------------------");

    // ACTUALLY RUN THE QUERY
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid Token Details" }, { status: 400 });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });

  } catch (error: any) {
    console.log("Server Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
