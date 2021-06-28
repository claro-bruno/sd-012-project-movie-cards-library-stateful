import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

import './App.css';

function App() {
  function Temporary() {
  }
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ Temporary } />
    </div>
  );
}

export default App;
