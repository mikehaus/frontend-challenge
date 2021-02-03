import './Home.css';
import { useFetchAllMovies } from './rest';
import styled from 'styled-components';
import * as StyledCompsGeneral from './styles/generalStyles';
import NavBar from './components/general/navBar';
import TopFive from './components/home/topFive';
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
      <NavBar />
      <StyledCompsGeneral.Container>
        {loading ? (
          <div>Loading movies...</div>
        ) : (
          <TopFive />
        )}
      </StyledCompsGeneral.Container>
    </div>
  );
};

export default Home;
