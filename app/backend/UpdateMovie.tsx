import supabase from '@/utils/supabase';

export async function UpdateMovie(id:number, title: string, year:number) {
  const { data, error } = await supabase
    .from('movies')
    .update({title, year})
    .eq("id", id)
    .select('');

  if (error)  return console.error('Error updating movie:', error.message);

  console.log('Success:', data);
}