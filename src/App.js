import Home from './Home';
import GenreView from './components/genre/genreView';
import MovieDetailView from './components/mov-detail/movieDetailView';
import NotFound from './notFound';
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
      <Route path="/detail/:id" exact render={({ match }) => { 
        return <MovieDetailView /> 
      }} />
      <Route path="/genre/:genre" exact render={({ match }) => {
        return <GenreView />
      }} />
      {/*<Route path="/genre/:genre" render={} component={GenreView}/>*/}
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
