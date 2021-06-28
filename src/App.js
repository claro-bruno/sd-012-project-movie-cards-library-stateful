import React from 'react';
import Data from './data';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
