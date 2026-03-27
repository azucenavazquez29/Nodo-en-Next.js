import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET: obtener todos los grados
export async function GET() {
  const { data, error } = await supabase
    .from("grados")
    .select("*")
    .order("creado_en", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ grados: data });
}

// POST: crear nuevo grado
export async function POST(req: Request) {
  const body = await req.json();
  const { persona_id, institucion_id, programa_id, titulo_obtenido, fecha_fin } = body;

  const { data, error } = await supabase.from("grados").insert([
    {
      persona_id,
      institucion_id,
      programa_id,
      titulo_obtenido,
      fecha_fin,
      hash_actual: null,
      hash_anterior: null,
      nonce: null,
      firmado_por: "Nodo NextJS"
    }
  ]);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ message: "Grado registrado", data });
}
