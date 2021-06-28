import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        onSearchTextChange
        searchText
        selectedGenre
        onSelectedGenreChange
      />
      <AddMovie />
    </div>
  );
}

export default App;
