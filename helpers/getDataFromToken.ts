import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { throws } from "assert";

export const getTokenData = (request: NextRequest) => {
  try {

    const encodedToken = request.cookies.get('token')?.value || ""
    const decodedToken:any = jwt.verify(encodedToken, process.env.JWT_TOKEN_SECRET!)

    return decodedToken.id;

  } catch (error: any) {
    throw new Error(error.message)
  }
}

