import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Movie } from "../interfaces";
import { Divider } from "antd";
import { debounce } from 'lodash';
import Header from "@/components/Header";
import useMoviesWithCategories from "../hooks/useMoviesWithCategories";
import { MOVIE_ROUTE } from "../constants";
import { 
  StyledTitle, 
  StyledRow, 
  StyledCol, 
  StyledCard, 
  Img 
} from "../styles";

const IndexPage: React.FC<{
  moviesWithCategories: { [genre: string]: Movie[] };
}> = ({ moviesWithCategories }) => {
  const { push, asPath } = useRouter();
  const [searchParam, setSearchParam] = useState("");

  const debouncedHandleSearch = debounce((value: string) => {
    setSearchParam(value.trim().toLocaleLowerCase());
  }, 300);

  useEffect(() => {
    debouncedHandleSearch(searchParam);
  }, [searchParam, asPath]);

  return (
    <div>
      <Header handleSearch={debouncedHandleSearch} />
      <Divider></Divider>
      {Object.entries(moviesWithCategories).map(([genre, movies]) => (
        <div key={genre}>
          <StyledTitle level={2}>{genre}</StyledTitle>
          <StyledRow>
            {movies.map((movie) => (
              <StyledCol key={movie.id}>
                <StyledCard>
                <Link href={`/movies/${movie.id}`}>
                    <Img alt={movie.title} src={movie.poster} />
                  </Link>
                </StyledCard>
              </StyledCol>
            ))}
          </StyledRow>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  moviesWithCategories: { [genre: string]: Movie[] };
}> = async ({ query }) => {
  const searchTerm = query.q ? (query.q as string) : "";
  const moviesWithCategories = useMoviesWithCategories(searchTerm);

  return {
    props: {
      moviesWithCategories,
    },
  };
};

export default IndexPage;
