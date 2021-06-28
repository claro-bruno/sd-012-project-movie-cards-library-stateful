import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="" onSearchTextChange={ () => console.log('xablau') } />
    </div>
  );
}

export default App;
