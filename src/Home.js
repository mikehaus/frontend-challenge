import './Home.css';
import { useFetchAllMovies } from './rest';
import styled from 'styled-components';

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/

const AllMovieList = (props) => {
  const movies = props.movList;
  
  return (
    <div>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <ul>
              <li>Release Date: {movie.releaseDate}</li>
              <li>Description: {movie.overview}</li>
              <li>Average Vote: {movie.voteAverage}</li>
              <li>Total Votes: {movie.voteCount}</li>
              <li>Genres: {movie.genres.join(', ')}</li>
            </ul>
          </li>
        ))}
        </ol>
    </div>
  );
}


const Home = () => {
  const { data, loading } = useFetchAllMovies();

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <AllMovieList movList={data} />
      )}
    </div>
  );
};

export default Home;
