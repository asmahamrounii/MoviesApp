import { Movie } from '@/interfaces';
import { getMovies } from '../../api/movie';


export default async function getMovieshandler(
  q: string,
):Promise<Movie[]> {
  const movies=await getMovies(q)
  return movies
}