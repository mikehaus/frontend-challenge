import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY_MOVIES_BY_FILTER = gql`
  query getMoviesByFilter ( $filter: String! ) {
    allMovies (sortOrder: $filter) {
      id
      title
      posterPath
    }
  }
`;


const GetMoviesByFilter = ({ filter }) => {

  const { data, error, loading } = useQuery(QUERY_MOVIES_BY_FILTER, {
    fetchPolicy: 'cache-and-network',
    variables: { filter }
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
}

export default GetMoviesByFilter;