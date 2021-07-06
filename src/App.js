import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      {/* <MovieList movies={ movies } /> */}
      {/* <AddMovie onClick={ onClick } /> */}
      < MovieLibrary />
    </div>
  );
}

export default App;
