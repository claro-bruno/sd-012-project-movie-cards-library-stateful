import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

function teste(state) {
  console.log(state);
}

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <AddMovie onClick={ teste } />
    </div>
  );
}

export default App;
