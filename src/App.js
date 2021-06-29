import React from 'react';
import { Route, Link, Switch } from "react-router-dom"
import SearchMovies from './SearchMovies'
import MovieCard from './MovieCard'

function App() {
  return (
    <div className="App">
      <h1>MOVIE SEARCH</h1>
      <SearchMovies />
      <Switch>
          <Route exact path="/">
            <SearchMovies />
          </Route>
          <Route path="/:movieId">
            <MovieCard />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
