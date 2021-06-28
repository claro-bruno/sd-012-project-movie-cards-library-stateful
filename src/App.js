import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
      searchText={String}
      onSearchTextChange="calback"
      bookmarkedOnly={Boolean}
      onBookmarkedChange="calback"
      selectedGenre={{String}}
      onSelectedGenreChange="calback"
      />
    </div>
  );
}

export default App;
