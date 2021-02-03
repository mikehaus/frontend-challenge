import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MOVIE_BY_ID = gql`
query Movie (id: $id) {
  Movie {
      id
      title
      posterPath
      voteAverage
      genres
      releaseData
      director
      overview
      cast
    }
  }
}
`;

const GetMovieById = ({id}) => {
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: {id}
  });

  const result = data?.Movie;

  return {
    data: result,
    error,
    loading
  };
}

export default getMovieById;