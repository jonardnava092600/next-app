import supabase from '@/utils/supabase';

/* type MovieProps = {
    title:string;
    year:number;
} */

export const InserMovie = async (title:string, year:number) => {
    const {data: data} = await supabase.from('move').insert([{"title":title, "year":year}])
  return (
    <div>InserMovie</div>
  )
}
