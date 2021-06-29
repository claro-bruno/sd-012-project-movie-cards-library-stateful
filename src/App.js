import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import { movies } from './data';
import Footer from './components/Footer';
import './App.css';

const name = 'Diogo Sant\'Anna';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <Footer name={ name } />
    </div>
  );
}

export default App;
