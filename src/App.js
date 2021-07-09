import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
