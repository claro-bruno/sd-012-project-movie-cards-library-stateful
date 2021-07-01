import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import movies from './data';
import MovieLibray from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ String }
        onSearchTextChange="calback"
        bookmarkedOnly={ Boolean }
        onBookmarkedChange="calback"
        selectedGenre={ { String } }
        onSelectedGenreChange="calback"
      />
      <MovieLibray movies={ movies } />
    </div>
  );
}

export default App;
