import { Movie } from "../../interfaces";
import MovieDetails from '../../components/MovieDetails';
import { Divider, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
import { getMovie, getMovies } from "@/api/movie";
import Header from '../../components/Header';

interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.FC<MoviePageProps> = ({ movie }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movie) {
      setLoading(false);
    }
  }, [movie]);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div>
      <Header/>
      <Divider></Divider>
      <MovieDetails movie={movie} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getMovies("")  
  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }))

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => { 
  const movie = await getMovie(params?.id  as string || "");

  return { props: { movie:movie ||null} }
}
export default MoviePage;
