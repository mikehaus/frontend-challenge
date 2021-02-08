import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// goal is to create all the queries I need

//Schema
/*
type Movie {
  id: ID!
  originalLanguage: String!
  originalTitle: String!
  overview: String!
  popularity: Float!
  posterPath: String!
  releaseDate: String!
  title: String!
  voteAverage: Float!
  voteCount: Int!    
  genres: [String]!
  budget: Int!
  runtime: Int!
  cast: [Cast]!
  director: Director!
}
*/

const GET_GENRE_MOVIES = gql`
query getMoviesByGenre ($genres: [String!], $filter: String!) {
  allMovies(filter: { genres: $genres }, sortField: $filter, sortOrder: "DESC") {
    id
    title
    posterPath
    voteAverage
    genres
  }
}
`;


// TODO: DRY combine functions
const GetMoviesByGenre = ({ genres, filter }) => {

  const { data, error, loading } = useQuery(GET_GENRE_MOVIES, {
    fetchPolicy: 'cache-and-network',
    variables: { genres, filter }
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

//module.exports = { getTopFive, getMovieById, getMoviesByFilter };
export default GetMoviesByGenre;