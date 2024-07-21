import { mdsDaraja } from "@/controllers/MdsDaraja";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let token = await mdsDaraja.getToken();
    if (!token.sucess)
      return NextResponse.json(
        { msg: token.error.message },
        { status: token.error?.status || 401 }
      );
    return NextResponse.json(token);
  } catch (error: any) {
    return NextResponse.json({ error: error }), { status: 500 };
  }
}
