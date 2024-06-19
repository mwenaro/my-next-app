import { NextResponse } from "next/server";

export function GET(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  return new NextResponse(JSON.stringify({ id }));
}

export function PUT(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  return new NextResponse(JSON.stringify({ id }));
}

export function DELETE(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  return new NextResponse(JSON.stringify({ id }));
}
