import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export async function GET() {
  const { data, error } = await supabase.from("grados").select("*").order("creado_en", { ascending: true });
  if (error) return NextResponse.json({ cadena: [] }, { status: 400 });
  return NextResponse.json({ cadena: data || [] });
}
