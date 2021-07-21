import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibray from './components/MovieLibrary';
import Filmes from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibray movies={ Filmes } />
    </div>
  );
}

export default App;
