import { NextResponse } from "next/server";
import axios from "axios";

let peers: string[] = [];

export async function GET() {
  let longestChain: any[] = [];

  for (const peer of peers) {
    try {
      const response = await axios.get(`${peer}/api/chain`);
      const chain = response.data.cadena;
      if (Array.isArray(chain) && chain.length > longestChain.length) {
        longestChain = chain;
      }
    } catch (err) {
      console.error(`Error al conectar con ${peer}`, err);
    }
  }

  return NextResponse.json({ cadena: longestChain });
}
