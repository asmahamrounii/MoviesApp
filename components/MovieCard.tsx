import React from 'react';
import { Movie } from '@/interfaces';
import { Rate } from 'antd';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <img src={movie?.poster} alt={movie?.title} style={{width: '30rem', height: '60vh',marginRight: '5rem'}} />
      <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>
        {movie?.title} 
      </span>
      <Rate></Rate>
      </div>
      <p>Director: {Array.isArray(movie?.director) ? movie?.director.join(', ') : movie?.director}</p>
      <p>Cast: {movie?.cast.join(', ')}</p>
      <p>Genres: {movie?.genres.join(', ')}</p>
      <p>Classification: {movie?.classification}</p>
      <p>IMDB Rating: {movie?.imdb_rating}</p>
      <p>Length: {movie?.length}</p>
      <p>Released On: {movie?.released_on}</p>
      <p>Overview: {movie?.overview}</p>
      </div>
    </>
  );
};

export default MovieCard;
