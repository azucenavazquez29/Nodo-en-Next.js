import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// POST: registrar un nodo
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    const { data, error } = await supabase
      .from('nodos')
      .insert([{ url }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// GET: obtener lista de nodos
export async function GET() {
  const { data, error } = await supabase.from('nodos').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

