import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';

function handleClick(receivedState) {
  console.log('handleClick was called', receivedState);
}

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick={ handleClick } />
    </div>
  );
}

export default App;
