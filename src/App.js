import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React {
  constructor() {
    super();
    this.onClickCallback = this.onClickCallback.bind(this);
  }

  onClickCallback() {}

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={ this.onClickCallback } />
      </div>
    );
  }
}

export default App;
