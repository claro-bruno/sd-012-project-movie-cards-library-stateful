import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function teste() {
  console.log('teste');
}

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText
        onSearchTextChange
        bookmarkedOnly
        onBookmarkedChange
        selectedGenre
        onSelectedGenreChange
      />
      <AddMovie onClick={ teste } />
    </div>
  );
}

export default App;
