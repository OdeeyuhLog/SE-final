import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://afdyhgbxjwqljafrkhkc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZHloZ2J4andxbGphZnJraGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MTk4MzIsImV4cCI6MjAxNjk5NTgzMn0.i40bRPelPnExcHeSUs7OgVpTWfR255Q-5SxCbu-NuW0'
export const supabase = createClient(supabaseUrl, supabaseKey)