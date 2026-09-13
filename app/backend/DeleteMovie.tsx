import supabase from '@/utils/supabase';

export async function DeleteMovie() {
  const { data, error } = await supabase
    .from('movies')
    .delete()
    .eq('id', 10)
    .select('');

  if (error)  return console.error('Error deleting movie:', error.message);

  console.log('Success:', data);
}