import React from 'react';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
      <MovieLibrary />
    </div>
  );
}

export default App;
