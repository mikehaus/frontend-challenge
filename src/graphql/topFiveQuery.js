import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_TOP_FIVE = gql`
  query allMovies {
    allMovies (sortField: "voteAverage", sortOrder: "popularity", page: 0, perPage: 5) {
      id
      posterPath
      title
      voteAverage
      genres
    }
  }
`;

const GetTopFiveMovies = () => {
  const { data, loading, error } = useQuery(GET_TOP_FIVE, {
    fetchPolicy: 'cache-and-network'
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
}

export default GetTopFiveMovies;