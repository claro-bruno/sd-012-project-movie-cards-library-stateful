import React, { Component } from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList movies={ movies } />
        <SearchBar />
      </div>
    );
  }
}

export default App;
