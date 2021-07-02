import React from 'react';
import Header from './components/Header';
import movies from './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar movies={ movies } />
      </main>
    </div>
  );
}

export default App;
