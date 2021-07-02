import React from 'react';
import Header from './components/Header';
import './App.css';

import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <SearchBar />
    </div>
  );
}

export default App;
