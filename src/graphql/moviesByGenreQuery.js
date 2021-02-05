import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

/*example:
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}*/

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
query allMovies ($filter: { genres: $genre }) {
  allMovies {
    id
    title
    posterPath
  }
}
`;


// TODO: DRY combine functions
const getMoviesByGenre = ({genre}) => {
  const { data, loading, error } = useQuery(GET_GENRE_MOVIES, {
    fetchPolicy: 'cache-and-network',
    variables: { genre }
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

//module.exports = { getTopFive, getMovieById, getMoviesByFilter };
export default getMoviesByGenre;