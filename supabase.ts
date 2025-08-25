import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = "https://ayxfvdmgmcrawijvkjqt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eGZ2ZG1nbWNyYXdpanZranF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTg0MDksImV4cCI6MjA2MTkzNDQwOX0.i4qTsKSfuZIzvEK9MSJvy4G8Qp_DrnCTstCVGJhE-yU";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are not set.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
