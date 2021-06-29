import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movie from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
      <MovieList movies={ movie } />
    </div>
  );
}

export default App;
