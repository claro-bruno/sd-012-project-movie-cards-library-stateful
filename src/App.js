import React, { Component } from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default App;
