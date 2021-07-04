import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick="callback" />
    </div>
  );
}

export default App;
