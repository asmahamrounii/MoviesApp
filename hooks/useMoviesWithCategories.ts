import { getMovies } from "../api/movie";
import { Movie } from "../interfaces";
import { useEffect, useState } from "react";

const useMoviesWithCategories = (searchTerm: string) => {
  const [moviesWithCategories, setMoviesWithCategories] = useState<{ [genre: string]: Movie[] }>({});

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies(searchTerm);

      const moviesWithCategories = movies.reduce<{ [genre: string]: Movie[] }>(
        (res, currentMovie) => {
          currentMovie.genres.forEach((genre) => {
            if (!res[genre]) {
              res[genre] = [];
            }
            res[genre].push(currentMovie);
          });
          return res;
        },
        {}
      );

      setMoviesWithCategories(moviesWithCategories);
    };

    fetchMovies();
  }, [searchTerm]);

  return moviesWithCategories;
};

export default useMoviesWithCategories;
