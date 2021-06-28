import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        props={ {
          searchText: 'My Text',
          onSearchTextChange: () => '',
          bookmarkedOnly: true,
          onBookmarkedChange: () => '',
          selectedGenre: 'action',
          onSelectedGenreChange: () => '',
        } }
      />
    </div>
  );
}

export default App;
