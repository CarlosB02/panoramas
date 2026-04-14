import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const { email, categories } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), { status: 400 });
    }

    // 1. Save to Supabase
    const { data: existing, error: checkError } = await supabase
      .from('subscribers')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return new Response(JSON.stringify({ message: 'Este email já está subscrito!' }), { status: 200 });
    }

    const { error: insertError } = await supabase
      .from('subscribers')
      .insert([{ email, categories }]);

    if (insertError) {
      console.error('Supabase error:', insertError);
      return new Response(JSON.stringify({ error: 'Erro ao guardar na base de dados' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Subscrição concluída com sucesso!' }), { status: 200 });

  } catch (error) {
    console.error('Newsletter error:', error);
    return new Response(JSON.stringify({ error: 'Erro interno no servidor' }), { status: 500 });
  }
}
