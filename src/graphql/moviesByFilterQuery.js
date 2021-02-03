import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY_MOVIES_BY_FILTER = gql`
  query allMovies ( $filter: String! ) {
    allMovies (sortOrder: $filter) {
      id
      title
      posterPath
    }
  }
`;


const GetMoviesByFilter = ({ filter }) => {
  const { data, loading, error } = useQuery(QUERY_MOVIES_BY_FILTER, {
    fetchPolicy: 'cache-and-network',
    variables: {filter}
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
}

export default GetMoviesByFilter;