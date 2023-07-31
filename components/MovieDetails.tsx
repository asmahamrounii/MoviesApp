import React from 'react';
import { Movie } from '@/interfaces';
import MovieCard from './MovieCard';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '5rem'}}>  <MovieCard movie={movie} /></div>)

};

export default MovieDetails;
