import { getTokenData } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connectDB";

export async function GET(request: NextRequest) {
  connect()
  try {

    const userID = await getTokenData(request)
    const user = User.findOne(userID._id).select("-password")

    return NextResponse.json({
      message: "User found",
      data: user,
    })

  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400})
  }
}
