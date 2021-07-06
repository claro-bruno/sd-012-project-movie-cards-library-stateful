import React from 'react';
import Header from './components/Header';
import './App.css';
import movie from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movie } />
    </div>
  );
}

export default App;
