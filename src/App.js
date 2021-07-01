import React from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import './App.css';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

function App() {
  // const onClick = (objeto) => console.log(objeto);
  // const movies = (objeto) => objeto;
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      {/* <MovieList movies={ movies } /> */}
      {/* <AddMovie onClick={ onClick } /> */}
      <MovieLibrary />
    </div>
  );
}

export default App;
