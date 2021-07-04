import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar
        // searchText={ searchText }
        // onSearchTextChange={ onSearchTextChange }
        // onBookmarkedChange={ onBookmarkedChange }
        // bookmarkedOnly={ bookmarkedOnly }
        // selectedGenre={ selectedGenre }
        // onSelectedGenreChange={ onSelectedGenreChange }
      /> */}
      <MovieLibrary />
    </div>
  );
}

export default App;
