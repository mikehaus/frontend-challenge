import './Home.css';
import NavBar from './components/general/navBar';
import TopFive from './components/home/topFive';
import BrowseByGenre from './components/home/browseByGenre';
import BrowseAll from './components/home/browseAll';

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/

const Home = () => {
  return (
    <div>
      <NavBar />
        <TopFive />
        <BrowseByGenre />
        <BrowseAll />
    </div>
  );
}

export default Home;
