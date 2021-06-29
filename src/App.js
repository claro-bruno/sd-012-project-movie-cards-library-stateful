import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

import './App.css';

function App() {
  console.log(movies);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary />
    </div>
  );
}

export default App;
