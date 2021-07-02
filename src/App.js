import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movieList from './data';
import './App.css';

// prettier-ignore
function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movieList }/>
    </div>
  );
}

export default App;
