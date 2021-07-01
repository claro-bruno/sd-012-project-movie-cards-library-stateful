import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieLibray from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibray movies={ movies } />
    </div>
  );
}

export default App;
