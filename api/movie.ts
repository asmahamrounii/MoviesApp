import { ApiResponse, Movie } from "@/interfaces";
import axiosInstance from "./axios";
import { endpoints } from "./endpoints";

export const getMovies = async (q: string) => {
  const res = await axiosInstance.get(endpoints.movies.getMovies, {
    params: {
      q,
    },
  });
  return res.data.movies as Movie[];
};


export const getMovie = async (id: string) => {
  
  const res = await axiosInstance.get(endpoints.movies.getMovie.replace("id",id));
  
  
  return res.data as Movie;
};
