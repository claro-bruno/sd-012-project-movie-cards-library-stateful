import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
// import Input from './components/Input';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
// import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie movies={ movies } />
      <MovieLibrary />
      {/* <Input /> */}
      {/* <TextArea /> */}
    </div>
  );
}

export default App;
