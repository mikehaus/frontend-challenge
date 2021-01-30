import './Home.css';
import { useFetchAllMovies } from './rest';
import { useState, useEffect } from 'react';
import NavBar from './components/global/navBar';
import MainContainer from './components/global/mainContainer';
import MainHeader from './components/global/mainHeader';
import ImageCardTopGrid from './components/home/imageCardTopGrid';

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/

const MovieList = (props) => {
  
  console.log(props.data)

  return (
    <div>
      <h1>Movies</h1>

      {props.loading ? (
        <div>Loading movies...</div>
      ) : (
        <ol>
          {props.data.map(movie => (
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
      )}
    </div>
  );
}

const Home = () => {

  const { data, loading } = useFetchAllMovies();
  const [topFive, setTopFive] = useState(null);
  const [movieList, setMovieList] = useState(null)

  // useEffect to create top five list for top
  useEffect(() => {
    let movieData = data;
    movieData.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    setTopFive(movieData.slice(0, 5));
    for (let i = 0; i < 6; i++) {
      movieData.shift()
    }
    setMovieList(movieData)
  }, [topFive])

  return (
    <div className="home-container">
      <NavBar />
      { loading ? (
        <div>Loading Movies...</div>
      ) : (
        <div>
          <MainContainer data={data}/>
          <ImageCardTopGrid topFive={topFive} />
        </div>
      )}
    </div>
  );
};

export default Home;
