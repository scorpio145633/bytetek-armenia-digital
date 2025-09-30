// Restrict CORS to allowed origins only
const ALLOWED_ORIGINS = [
  Deno.env.get('VITE_SUPABASE_URL') || '',
  'http://localhost:5173',
  'http://localhost:3000',
];

export const getCorsHeaders = (origin: string | null) => {
  const isAllowed = origin && ALLOWED_ORIGINS.some(allowed => 
    origin.includes(allowed) || allowed.includes(origin)
  );
  
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
};

export const corsHeaders = getCorsHeaders('*');
