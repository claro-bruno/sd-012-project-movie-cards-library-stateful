import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  const searchTextChange = () => {
  };
  const bookmarkedChange = () => {
  };
  const selectedGenreChange = () => {
  };
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ searchTextChange }
        bookmarkedOnly
        onBookmarkedChange={ bookmarkedChange }
        selectedGenre=""
        onSelectedGenreChange={ selectedGenreChange }
      />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
