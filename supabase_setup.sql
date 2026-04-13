-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql

CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  categories TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS (Row Level Security) if needed, 
-- but for simple server-side inserts, this is enough.
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow the 'service_role' or 'anon' (with careful checks) to insert
-- Usually, we handle this via the server component using the service_role key.
CREATE POLICY "Allow server-side inserts" ON public.subscribers
  FOR INSERT WITH CHECK (true);
