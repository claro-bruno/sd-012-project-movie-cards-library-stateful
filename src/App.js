import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

// prettier-ignore
function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;
