import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick="callback" />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
