import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        onBookmarkedChange={ onBookmarkedChange }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
    </div>
  );
}

export default App;
