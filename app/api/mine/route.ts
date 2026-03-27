import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json();
  const { persona_id, institucion_id, programa_id, titulo_obtenido, fecha_fin, numero_cedula } = body;

  const { data: lastBlock } = await supabase
    .from("grados")
    .select("*")
    .order("creado_en", { ascending: false })
    .limit(1);

  const hashAnterior = lastBlock?.[0]?.hash_actual || "GENESIS";

  let nonce = 0;
  let hash = "";
  do {
    nonce++;
    hash = crypto.createHash("sha256")
      .update(persona_id + institucion_id + programa_id + titulo_obtenido + fecha_fin + numero_cedula + hashAnterior + nonce)
      .digest("hex");
  } while (!hash.startsWith("000"));

  const { data, error } = await supabase.from("grados").insert([
    {
      persona_id,
      institucion_id,
      programa_id,
      titulo_obtenido,
      fecha_fin,
      numero_cedula,
      hash_actual: hash,
      hash_anterior: hashAnterior,
      nonce,
      firmado_por: "Nodo NextJS"
    }
  ]);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ bloque: data });
}
