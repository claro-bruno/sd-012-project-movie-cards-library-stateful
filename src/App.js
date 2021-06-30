import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const onClick = (objeto) => console.log(objeto);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
