import Home from './Home';
import GenreView from './components/genre/genreView';
import MovieDetailView from './components/mov-detail/movieDetailView';
import { Route, Switch } from 'react-router-dom';

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/genre" exact component={GenreView} />
      <Route path="/detail" exact component={MovieDetailView} />
    </Switch>
  );
};

export default App;
