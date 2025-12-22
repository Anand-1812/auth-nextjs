import { getTokenData } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connectDB";

export async function GET(request: NextRequest) {
  // 1. Await the connection
  await connect();

  try {
    const userId = await getTokenData(request);

    // 3. Await the DB query & use findById for cleaner syntax
    const user = await User.findById(userId).select("-password");

    // 4. Safety check (in case user was deleted but token is valid)
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "User found",
      data: user,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
