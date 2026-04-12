import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fxmsyuaqrtfkwwodjgoa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4bXN5dWFxcnRma3d3b2RqZ29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyODEwNzEsImV4cCI6MjA4OTg1NzA3MX0.Szcs6Ove7Bn5sNhsgww48aABLFMGHxrjtGskFO2I2K0'
);

async function run() {
  const queryStr = 'vance';
  const { data, error } = await supabase.from('noticias').select('*').or(`titulo_reescrito.ilike.%${queryStr}%,conteudo_markdown.ilike.%${queryStr}%,categoria.ilike.%${queryStr}%`).limit(1);
  console.log('Result:', data, 'Error:', error);
}

run();
