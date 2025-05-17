// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://mtbolhzexfgfgrgxttzj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Ym9saHpleGZnZmdyZ3h0dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTgxOTYsImV4cCI6MjA2MzA5NDE5Nn0.KgoHdvUiQSWObYgpUJhSbs-4zLIUHCNVhm-NtWEsY7g';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
