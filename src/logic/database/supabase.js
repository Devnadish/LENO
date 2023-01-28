import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl = "https://llulmdimswbxxsydavne.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdWxtZGltc3dieHhzeWRhdm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3NjQyMTYsImV4cCI6MTk4OTM0MDIxNn0.JOKxnQxfnYNhfTam2rBj5u1gC4IstYBhCVSoEh-2hCA";

export default createClient(supabaseUrl, supabaseAnonKey);


