import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieList';
import movie from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary
        movies={ movie }
      />
    </div>
  );
}

export default App;
