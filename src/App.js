import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movie from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
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
