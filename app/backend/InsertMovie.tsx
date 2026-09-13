import supabase from '@/utils/supabase';

export async function InsertMovie() {
  const { data, error } = await supabase
    .from('movies')
    .insert([{ title: 'Toy Story 5', year: 2026 }])
    .select('');

  if (error)  return console.error('Error inserting movie:', error.message);

  console.log('Success:', data);
}