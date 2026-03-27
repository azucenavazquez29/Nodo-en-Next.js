import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Crear transacción
export async function POST(req: Request) {
  const body = await req.json();
  const { persona_id, institucion_id, programa_id, titulo_obtenido, fecha_fin } = body;

  const { data, error } = await supabase
    .from("grados")
    .insert([{ persona_id, institucion_id, programa_id, titulo_obtenido, fecha_fin }]);

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ message: "Transacción creada", data });
}

// Consultar todas las transacciones
export async function GET() {
  const { data, error } = await supabase.from("grados").select("*");
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ transactions: data });
}

// Actualizar transacción completa
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, ...updates } = body;

  const { data, error } = await supabase.from("grados").update(updates).eq("id", id);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ message: "Transacción actualizada", data });
}

// Actualizar parcialmente (ej. solo titulo_obtenido)
export async function PATCH(req: Request) {
  const body = await req.json();
  const { id, titulo_obtenido } = body;

  const { data, error } = await supabase
    .from("grados")
    .update({ titulo_obtenido })
    .eq("id", id);

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ message: "Campo actualizado", data });
}

// Eliminar transacción
export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;

  const { data, error } = await supabase.from("grados").delete().eq("id", id);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ message: "Transacción eliminada", data });
}

