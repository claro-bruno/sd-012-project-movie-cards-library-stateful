import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <AddMovie onClick={ () => console.log('test') } />
    </div>
  );
}

export default App;
