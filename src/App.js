import React from 'react';
// import AddMovie from './components/AddMovie';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
// import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
