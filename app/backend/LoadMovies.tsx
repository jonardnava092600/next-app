import supabase from '@/utils/supabase';

export const LoadMovies = async () => {
    const {data: movies, error} = await supabase.from('movies').select('');
    if (error) return error;
    return movies;
}
