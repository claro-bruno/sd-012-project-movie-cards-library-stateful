import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
