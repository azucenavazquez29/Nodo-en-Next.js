import { NextResponse } from "next/server";

let peers: string[] = ["http://localhost:3001"];

export async function GET() {
  return NextResponse.json({ nodos: peers });
}

