import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://oirbfcoodjmdkdpyicig.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcmJmY29vZGptZGtkcHlpY2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTY0MjQsImV4cCI6MjA2NDUzMjQyNH0.AxZ3NGZdVR8QAbWZwqa0dRtDtdV0BSJjeR1adD8v27Q'
) 