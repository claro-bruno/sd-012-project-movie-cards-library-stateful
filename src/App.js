import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  function onClick() {

  }
  function onSearchTextChange() {

  }
  return (
    <div className="App">
      <Header />
      <SearchBar onChange={ onSearchTextChange } />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
