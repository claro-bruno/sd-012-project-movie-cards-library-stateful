import React from 'react';
// import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
